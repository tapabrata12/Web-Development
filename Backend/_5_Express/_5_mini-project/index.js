/*
We are making a note taking webapp with Express and EJS template engine.

* */
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

// Explicitly set the views directory to the public/views folder, because the template
// is located in `public/views` in this project layout. Alternatively you can move
// templates into a top-level `views/` folder and remove this line.
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public", "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    // At first we read if there is any existng files in the '/files' folder
    fs.readdir(path.join(__dirname, "files"), function (err, files) {

        // render by name, Express will use the configured view engine and views dir
        res.render("index", {files:files});
    });
});

app.post('/create', function (req, res){
    console.log(req.body);
});

app.listen(3000);
