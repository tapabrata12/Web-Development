const express = require('express');
const app = express();


/*
Jab vhi server request accept karta hai waha se route ke beech pahochne tak agar app uss request ko beech me rokte hoo aur kuch perform karte hoo to to yea e;lement middleware kahete hai in most cases.
*/

// Two type to implement middleware

// 1.
app.use(function(req,res,next) {
    // Har routes pe jane se pahle yeh function chalega
    console.log("Middleware Chala");
    next(); // next ka matlab hai agle middleware ya route pe jao  
});

app.use(function(req,res,next) {
    // Har routes pe jane se pahle yeh function chalega
    console.log("Middleware 2nd bar Chala");
    next(); // next ka matlab hai agle middleware ya route pe jao  
});

app.use(function(req,res,next) {
    // Har routes pe jane se pahle yeh function chalega
    console.log("Middleware 3rd bar Chala");
    next(); // next ka matlab hai agle middleware ya route pe jao  
});
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/about', function (req,res) {
 res.send("About Page");   
});
app.listen(3000);