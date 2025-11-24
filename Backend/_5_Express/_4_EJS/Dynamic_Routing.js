const express = require('express');

const app = express();

app.get('/:userName', function (req,res) {
    res.send("User Name is: " + req.params.userName);
});
app.get('/:userName/:ID', function (req,res) {
    res.send("User Name is: " + req.params.userName + " and ID is: " + req.params.ID);
});
app.listen(3000);