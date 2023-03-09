const fs = require('fs');

const readStream = fs.createReadStream('./blog1.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./blog2.txt');

//  Longest way to write a stream (in here the stream is read too)
/* 
    readStream.on('data', (chunk) => {
        console.log('---NEW CHUNCK---');
        console.log(chunk);
        writeStream.write('\nNEW CHUNK\n');
        writeStream.write(chunk);
    }) 
*/

//  Shortest way to write a stream (it doesn't read it)
readStream.pipe(writeStream);