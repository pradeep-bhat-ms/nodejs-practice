const buffer = Buffer.from("Hello Pradeep");

console.log(buffer);
console.log(buffer.toString());

//A Buffer stores binary data.
// <Buffer 48 65 6c 6c 6f 20 50 72 61 64 65 65 70>
// Hello Pradeep


// // Read Stream
// import fs from 'fs';

// const readStream = fs.createReadStream('data.txt', 'utf-8');

// readStream.on('data', (chunk) => {
//     console.log(chunk);
// });

///o/p=Welcome to Node.js Streams

//Write Stream

// import fs from 'fs';

// const writeStream = fs.createWriteStream('output.txt');

// writeStream.write("Hello Node.js\n");
// writeStream.write("Learning Streams");
// writeStream.end();

// console.log("Data written successfully");

//. Copy File Using Streams

import fs from 'fs';

const readStream = fs.createReadStream('data.txt');
const writeStream = fs.createWriteStream('copy.txt');

readStream.pipe(writeStream);

console.log("File copied successfully");