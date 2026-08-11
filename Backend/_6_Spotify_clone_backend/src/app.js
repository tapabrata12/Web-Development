const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const router = require('./routes/auth.routes');
const music_router = require('./routes/music.routes');
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', router);
app.use('/api/music',music_router);

module.exports = app;