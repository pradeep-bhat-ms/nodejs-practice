// // sync write file

// console.log("start");
// import fs from 'fs'

// let data=fs.writeFileSync('demo.txt',"Welcome to nodejs");

// console.log(data);
// console.log("end");


// // async write file

// console.log("start");

// import { AsyncLocalStorage } from 'async_hooks';
// import fs from 'fs'
// let data=fs.writeFile('text.txt',"welcome to node jssss",(err,data)=>{
//     if(err){
//         return;
//     }
//     console.log(data);
    
// })
// console.log("end");

//update file synchronously

// import fs from 'fs'
// let data=fs.appendFile('./text.txt','\n  welcome byee',(data)=>{
//     console.log(data);
// })
// console.log(data);

//async update file

// import fs from 'fs';
// console.log("Start");

// let data=fs.appendFile('./demo.txt', '\n am in the next line ', (err,data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Data appended successfully");
//     }
// });

// console.log("End");