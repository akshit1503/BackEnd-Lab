
const http = require('http');
const hostname = '127.0.0.1'; // Localhost
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === '/') {
        res.end('Hey there, this is a Test Server i Created for my BackEnd Lab! This is the homepage.\n');
    } else if (req.url === '/about') {
        res.end('This is the about page.\n');
    } else {
        res.statusCode = 404;
        res.end('Page not found.\n');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
