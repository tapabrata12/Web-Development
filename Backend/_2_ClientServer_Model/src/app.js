// Iss file ka main kaam hai ki server ko create karna

const express = require('express');

const app = express();

app.use(express.json())

notes = []

app.post('/notes', (req,res)=>{
    notes.push(req.body);
    res.status(201).send({message: "Note added successfully"});
});

app.get('/notes', (req,res)=>{
    res.status(200).send({
        message: "Notes fetched successfully",
        notes: notes,
    })
})


app.patch('/notes/:INDEX',(req,res)=>{
    let INDEX = req.params.INDEX
    let updateNote = req.body.description
    notes[INDEX] = {...notes[INDEX], description: updateNote}

    

    res.status(201).send({
        "message":"Note updated successfully",
    })
})

app.delete('/notes/:id',(req,res)=>{
    let INDEX = req.params.id
    const item = 1
    notes.splice(INDEX,item)

    res.status(201).send({"message":"Item deleted successfully"})
})

module.exports = app;