// //synchronous read file system
// console.log("start");
// console.log("one");

// import fs from 'fs'

// let data=fs.readFileSync('data.txt','utf-8')
// console.log(data);
// console.log("end");

///asynchronous read file system

console.log("start");
console.log("one");
import fs from 'fs';

let data=fs.readFile('data.txt','utf-8' ,(err, data)=>{
if(err){
    console.log(err);
    return;
}
console.log(data);

});
console.log("end");
