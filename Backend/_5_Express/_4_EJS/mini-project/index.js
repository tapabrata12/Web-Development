const express = require('express');
const app = express();
const path = require('path');
// For converting Json data to Readable format to the Backend
app.use(express.json());
// For converting Form Data to Readable format to the Backend
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));
// Setup EJS as the templating engine
app.set('view engine', 'ejs');

app.get('/',function (req,res) {
    res.render('index'); 
});

app.listen(3000);