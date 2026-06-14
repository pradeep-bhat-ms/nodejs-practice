//how to create a server using http module in nodejs
import http from 'http';
const port = 5000;

const server=http.createServer((req,res)=>{
    res.end("Hello World")
})
server.listen(port,()=>{
    console.log(`Server is running on  ${port}`);
})