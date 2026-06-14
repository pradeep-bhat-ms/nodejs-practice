import http from 'http';

let user = [
    {
        id: 1,
        name: "pradeep"
    },
    {
        id: 2,
        name: "chethan"
    }
];

const server = http.createServer((req, res) => {

    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(user));
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Invalid Data");
    }

});

server.listen(80, () => {
    console.log("Server is running on port 80");
});