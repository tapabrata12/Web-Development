const ImageKit = require("@imagekit/nodejs");
const dotenv = require("dotenv");
dotenv.config();

const imagekit = new ImageKit({
  privateKey: process.env.IMAGE_KIT_API,
});

async function uploadImage(buffer) {
    
  const response = await imagekit.files.upload({
    file: buffer.toString('base64'),
    fileName: "image.jpg",
  });

  return response;
}

module.exports = uploadImage;
