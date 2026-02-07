const express = require('express');
const app = express();
const socialModel = require('./models/social.model');
const multer = require('multer');
const uploadImage = require('./services/imagekit_upload.services');
const cors = require('cors');
app.use(express.json());
app.use(cors());

const upload = multer({ storage: multer.memoryStorage()})


app.get('/view-posts', async (req, res) => {
    const posts = await socialModel.find();
    
    res.status(200).json({message: 'Posts retrieved successfully', data: posts});
});

app.post('/create-post', upload.single('image'), async (req, res) => {
    const buffer = req.file.buffer;

    const response = await uploadImage(buffer);
    
    socialModel.create({
        image_url: response.url,
        caption: req.body.caption
    });

    res.status(201).send({message: 'Post created successfully'});
    
});


module.exports = app;