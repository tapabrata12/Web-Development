const express = require('express');
const {createMusic} = require('../controllers/music.controllers');
const music_router = express.Router();
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage()
})

music_router.post('/upload',upload.single('music'),createMusic);

module.exports = music_router;