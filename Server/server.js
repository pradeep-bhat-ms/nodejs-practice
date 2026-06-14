import http from 'http'
const port=80;
// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/plain'})
//     res.end("hello world")
// })
// server.listen(port,()=>{
//     console.log(`server is running in ${port}`);
    
// })

// const server=http.createServer((req,res)=>{
//     //     // this is how to send response in json format
//     res.writeHead(200,{'content-type':'application/json'})
//     res.end(JSON.stringify(
//         {
//             id: 1,
//             name:"pradeep"
//         }
//     ))
//     })

// server.listen(port,()=>{
//     console.log(`server is running in ${port}`);
    
// })

    // // request  objects 
    // console.log(req.url);
    // console.log(req.headers);
    // console.log(req.method);// GET, POST
    

// response objects
// res.end()
// res.writeHead()


const server=http.createServer((req,res)=>{
    
    if(req.url=="/")
    {
        res.end("Hello World")
    }
    else if(req.url=="/about")
    {
        res.end("About Us")
    }
    else if(req.url=="/contact")
    {
        res.end("contact us")
    }
    else{
        res.end ("invalid url")
    }
})
server.listen(port,()=>{
    console.log(`server is running in ${port}`);
    
})