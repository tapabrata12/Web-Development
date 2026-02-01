const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send("Hello World !");
});

app.get('/about', (req,res)=>{
    res.send("This is the code showing the demonstration of creating a basic server using Express.js");
});

// Calling the server on port 3000

app.listen(3000);