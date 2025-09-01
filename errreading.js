
const fs = require('fs');
const fileName = 'example.txt';

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {

        if (err.code === 'ENOENT') {
            console.error(`Error: File '${fileName}' not found.`);
        } else {
            console.error(`An error occurred while reading the file: ${err.message}`);
        }
        return;
    }

    console.log(`File '${fileName}' content:\n${data}`);
});

console.log('Attempting to read file asynchronously...');
