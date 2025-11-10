const express = require('express');

const app = express();

// Now Routes kayase create karna hai 


// app.get(route, requestHandeler)

app.get('/', function (req,res) {
        res.send("This is Home Route");
});

app.get('/about', function (req,res) {
    res.send("This is About Route");
});

app.listen(3000);