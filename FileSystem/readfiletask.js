// import fs from 'fs'
// const data=fs.readFileSync('b.txt','utf-8')
// console.log(data);


//  let data1=fs.writeFileSync('a.txt',data,(data1)=>{
//   if(err){
//          return ;
//      }
//      console.log(data1);
//  })

import fs from 'fs';
let data=fs.readFileSync('b.txt','utf-8');
let data2=data.replace('i am pradi','how are you');
fs.writeFileSync('b.txt', data2);
console.log(data2);