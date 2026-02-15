const mongoose = require('mongoose');

const SchemaDB = new mongoose.Schema({
    name: { type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

const userModel = mongoose.model('users', SchemaDB);

module.exports = userModel;