const mongoose = require('mongoose');

// Made how my data would look like in the database
const noteSchema = new mongoose.Schema({
    title: String,
    description: String
});

// Created a model based on the schema, which will be used to interact with the database
const noteModel = mongoose.model('Note', noteSchema);

module.exports = noteModel;