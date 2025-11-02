const http = require("http");
const PORT = 3000;
const server = http.createServer((req, res) => {
    // Now I have to write the logic to accept the request and send the responce
    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "content-type": "text/plain" });
        res.end("Hello, world!");
    } else if (req.url === "/about" && req.method === "GET") {
        res.writeHead(200, { "content-type": "text/plain" });
        res.end("Hello from the About page");
    }else {
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("Sorry, page not found!");
    }
});

server.listen(PORT, () => {
    console.log(`Server is listening on Port http://localhost:${PORT}/`);
});