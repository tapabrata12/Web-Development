const http = require("http");
const PORT = 5000;
const server = http.createServer((req, res) => {
    // Now I have to write the logic to accept the request and send the responce
    if (req.url === "/api/data" && req.method === "POST") {

        // Now at first we have to read request body mannually.
        let body = "";

        // This is for as long as data is coming
        req.on('data',(chunk)=>{
            // Here chunk is type Buffer
            body += chunk.toString(); // So lets convert this into a string and append to body
        });
        
        // This is when all the data has been received
        req.on('end',()=>{
            // Now body contains the complete request body but as type of String
            const parsedData = JSON.parse(body); // Converting string to object because we are expecting JSON data here
            res.writeHead(201, {'content-type': 'application/json'});
            res.end(JSON.stringify({message: "Data received successfully", data: parsedData}));
        });

    } else {
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("Sorry, page not found!");

    }
});

server.listen(PORT, () => {
    console.log(`Server is listening on Port http://localhost:${PORT}/`);
});