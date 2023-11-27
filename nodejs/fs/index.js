const { log } = require('console');
const fs = require('fs');
const { buffer } = require('stream/consumers');

console.log('READ START');
// Asynchronus way to read file

// fs.readFile('input.txt', function(err, data) {
//     if (err) {
//         console.log('Error', err);
//         return err;
//     }
//     console.log('Data', data);
//     console.log('READ END');
//     return data;
// })

// console.log('Other Stuff');

// Synchronus way to read file

// var data = fs.readFileSync('input.txt');

// console.log('Data:', data.toString());
// console.log('READ END');
// console.log('Other Stuff');


// Read > Open + Read

// const buf = new Buffer(1024);

// fs.open('input.txt', 'r+', function(err, fd){
//     if (err) {
//         console.log('Error In Opening File: ', err);
//     }
//     console.log(("File open Successfullu!"));

//     fs.read(fd, buf, 0, buf.length, 0, function(er,bytes){
//         if (er) {
//             console.log('Error In reading File!');

//         }
//         console.log('Data ', bytes);
//         console.log('Data ', buf.slice(0, bytes).toString());
//         fs.close(fd, function(err){
//             if (err){
//                 console.log('Error In Closing File');
//             }
//             console.log('Close file ');
//         })
//     })
// })

// Writing In File 

// fs.writeFile('input.txt', 'HELLO HIMANSHU', function(err){
//     if (err){
//         console.log('Error In writing File');
//     }else{
//         console.log('sucess in writing file!');
//     }
// })

// Append to file

// fs.appendFile('input.txt', ' HELLO HIMANSHU Append to File', function(err){
//     if (err){
//         console.log('Error In Append File');
//     }else{
//         console.log('sucess in Append file!');
//     }
// })

// dELETE FILE

// fs.unlink('input.txt' , function(err){
//     if (err){
//         console.log('Error in deleting file');
//     }
//     console.log('Sucess In deleting file');

// })
