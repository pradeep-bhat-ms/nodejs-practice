import path from 'path'

///        / this is mac os separator
///        \ this is window os separator

const withoutpath="/data"+"/user"+"/demo.js"
console.log(path.join(withoutpath));
// convert the path from one os to suitable os o/p=\data\user\demo.js


let pathfile="/user/example/data/test.txt"

console.log(path.join(pathfile))
/// o/p===\user\example\data\test.txt  


// dirname returns the folder name  o/p=/user/example/data
console.log(path.dirname(pathfile));

// basename returns the file name    o/p==test.txt
console.log(path.basename(pathfile));

// extname returns extension  o/p===.txt
console.log(path.extname(pathfile));

// it checks the absolute path  return boolean value
// true when absolute path
// false when its not a absolute path    o/p===true
console.log(path.isAbsolute(pathfile)); // true // from the root directory and globally is accesable 
console.log(path.isAbsolute(withoutpath)); // true 
console.log(path.isAbsolute("text.txt")); // false // we are creating  like ./ 
 

console.log(path.parse(withoutpath));
// parse converts path into objects 
//  o/p==
// {
//   root: '/',
//   dir: '/data/user',
//   base: 'demo.js',
//   ext: '.js',
//   name: 'demo'
// }

let data={
  root: '/',
  dir: '/data/user',
  base: 'demo.js',
  ext: '.js',
  name: 'demo'
}
console.log(path.format(data));
// fromat will convert object into path o/p==/data/user\demo.js

// resolve will convert into absolute path  o/p== C:\Users\prade\OneDrive\Desktop\Nodejs\path\demo.js
console.log(path.resolve("demo.js"));
console.log(path.resolve("http.js")); // o/p==C:\Users\prade\OneDrive\Desktop\Nodejs\path\http.js


// normalize remove unnecessary separator from the path o/p==\user\data\demo.js
let file2="/user//data///\demo.js"
console.log(path.normalize(file2));



