console.log( "start");
import fs from 'node:fs/promises'


// // read file system using promise

// async function demo() {
//     let data=await fs.readFile('data.txt','utf-8');
//     console.log(data);
// }
// demo();

// // write file system using promise

// async function demo(){
//     let data=await fs.writeFile('demo.txt',"welcome to filesyatem")
//     console.log("file write succesfully");
// }

// demo();

// // append file system using promise

// async function demo(){
//     let data=await fs.appendFile('data.txt' ,"\n node js")
//         console.log("file append succesfully"); 
// }
// demo();

// // delete file system using promise
// async function demo() {
//     const data=await fs.unlink('tx.txt')
//     console.log("file deltede succesfully");
// }
// demo();

// // read json file system using promise

// async function demo(){
//     try{
//         const data= await fs.readFile('test.json','utf-8')
//         const user=JSON.parse(data);
//         console.log(user);
        
//     }catch(err){
//         console.log(err);
        
//     }
// }
// demo();



// write json file system using promise
async function  test() {

    const userData={
        id:1,
        name:"pradeep",
        age:22  
    }
    const data=await fs.writeFile('test1.json', JSON.stringify(userData))
    console.log(data);
}
test()


console.log("end");
