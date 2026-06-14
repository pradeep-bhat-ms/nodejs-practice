//how to create a server using http module in nodejs
import http from 'http';
import fs from 'fs';
const port = 80;

const server=http.createServer((req,res)=>{
    // res.end("Hello World")
fs.readFile('./index.html','utf-8',(err,data)=>{
if(err){
    res.writeHead(404,{'content-type':'text/plain'})
    res.end("file not found")
}
else
    {
    res.writeHead(200,{'content-type':'text/html'})
    res.end(data)
    }
})

})
server.listen(port,()=>{
    console.log(`Server is running on  ${port}`);
})