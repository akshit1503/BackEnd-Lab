const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;
const filePath = path.join(__dirname, 'data.txt');

const testContent = "Akshit Singh\nThis is the Content in the file named data Created by server\nIt's being served by Node.js!\n";
fs.writeFileSync(filePath, testContent);

const server = http.createServer((req, res) => {

    if (req.url === '/') {

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500; //Server Error
                res.setHeader('Content-Type', 'text/plain');
                if (err.code === 'ENOENT') {
                    res.end(`Error: The file '${path.basename(filePath)}' was not found on the server.`);
                } else {
                    res.end(`An internal server error occurred: ${err.message}`);
                }
                console.error(`Error reading file ${filePath}:`, err);
                return;
            }
            res.statusCode = 200; // OK
            res.setHeader('Content-Type', 'text/plain');
            res.end(data);
        });
    } else {
        res.statusCode = 404;//Error
        res.setHeader('Content-Type', 'text/plain');
        res.end('Page Not Found');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log(`Serving content from: ${filePath}`);
    console.log(`Try accessing http://${hostname}:${port}/ in your browser.`);
});
