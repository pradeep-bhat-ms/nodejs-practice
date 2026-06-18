// console.log("start");

// process.nextTick(()=>{
//     console.log("next tick");
    
// })
// Promise.resolve().then(()=>{
//     console.log("promise1");
    
// })


// console.log("end");


// function demo(){
//     console.log("hello");
//     process.nextTick(()=>{   // delay the fuctiont  it will  
// console.log("next tick");
//     });

// }
// demo()
// console.log("end");


// process.nextTick(()=>{
//     console.log("next  tick");
//     Promise.resolve().then(()=>{
//         console.log("hiii");
        
//     })
    
// })

setTimeout(() => {
    console.log("zero");

// here next tick will execute
     Promise.resolve().then(()=>{
    console.log("promise1 inside the settimeout ");
       process.nextTick(()=>{
console.log("next  tick3  inside the settimeout and  promise ");
    })
})
    process.nextTick(()=>{
console.log("next  tick1 inside the settimout");
    })
}, 0);
    Promise.resolve().then(()=>{
    console.log("promise2 outside the settimeout");
})
    process.nextTick(()=>{
console.log("next  tick2 outside the timeout");
    })