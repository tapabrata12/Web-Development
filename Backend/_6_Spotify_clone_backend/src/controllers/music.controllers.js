const musicModel = require("../models/music.models");
const { uploadImg } = require("../services/upload.service");
const jwt = require("jsonwebtoken");

async function createMusic(req, res) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(400).json({
      message: "Unauthorised access",
    });
  }

  try {
    const decorded = jwt.verify(token, process.env.JWT_SECRET);

    if (decorded.role != "artist") {
      return res.status(403).json({
        message: "Access restricted",
      });
    }

    const { title } = req.body;
    const file = req.file

    if(!file){
      return res.status(404).json({
      message: "resource not found",
    });
    }

    const result = await uploadImg(file.buffer);
    const music = await musicModel.create({
      url: result.url,
      title: title,
      artist: decorded.id,
    });
    
    return res.status(201).json({
      message: "Music successfully created",
      music: music,
    });
    
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
}

module.exports = { createMusic };
