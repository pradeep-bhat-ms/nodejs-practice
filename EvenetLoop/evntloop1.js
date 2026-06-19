// console.log("start");

// setTimeout(() => {
//     console.log("setTimeout");
// }, 0);

// setImmediate(() => {
//     console.log("setImmediate");
// });

// Promise.resolve().then(() => {
//     console.log("promise");
// });

// process.nextTick(() => {
//     console.log("nextTick");
// });

// console.log("end");


// start
// end
// promise
// nextTick
// setImmediate
// setTimeout

// console.log("start");

// process.nextTick(() => {
//     console.log("nextTick");
// });

// Promise.resolve().then(() => {
//     console.log("promise");
// });

// setTimeout(() => {
//     console.log("timeout");
// }, 0);

// setImmediate(() => {
//     console.log("immediate");
// });

// console.log("end");

// // start
// // end
// // promise
// // nextTick
// // immediate
// // timeout

// import fs from 'fs';

// fs.readFile('data.txt', () => {
//     console.log("file read");

//     setTimeout(() => {
//         console.log("timeout");
//     }, 0);

//     setImmediate(() => {
//         console.log("immediate");
//     });
// });

// // file read
// // immediate
// // timeout


console.log("start");

setTimeout(() => {
    console.log("timeout");
}, 0);

setImmediate(() => {
    console.log("immediate");
});

Promise.resolve().then(() => {
    console.log("promise");
});

process.nextTick(() => {
    console.log("nextTick");
});

console.log("end");

// start
// end
// promise
// nextTick
// immediate
// timeout