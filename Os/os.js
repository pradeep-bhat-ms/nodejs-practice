import os from 'os'

console.log(os.platform());  //win32 **
console.log(os.type()); //Windows_NT **
console.log(os.tmpdir());  //C:\Users\prade\AppData\Local\Temp
console.log(os.homedir()); //C:\Users\prade
console.log(os.release());  //10.0.26200 **
console.log(os.totalmem());  //12540301312
console.log(os.hostname());  //DESKTOP-FV3G0BT
console.log(os.freemem());   //3930488832
console.log(os.uptime());    //435505.093 **
console.log(os.version());   //Windows 11 Home Single Language **
console.log(os.machine());   //x86_64
console.log(os.arch());   //x64
console.log(os.availableParallelism());


let a=`${(os.freemem()/1024**3).toFixed(3)}GB`;
console.log(a);


let b=`${(os.totalmem()/1024**3).toFixed(3)}`
console.log(b);




