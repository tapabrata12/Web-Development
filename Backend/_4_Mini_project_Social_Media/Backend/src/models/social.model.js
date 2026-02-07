const mongoose = require('mongoose');

const socialSchema = new mongoose.Schema({
    image_url: {type: String, required:true},
    caption: {type: String, required:true},
});

const socialModel = mongoose.model('social', socialSchema);

module.exports = socialModel;