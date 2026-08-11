const ImageKit = require('@imagekit/nodejs');

async function uploadImg(file) {

  const client = new ImageKit({
    privateKey: process.env.IMAGE_KIT_KEY, // This is the default and can be omitted
  });

  const response = await client.files.upload({
    file: file.toString('base64'),
    fileName: "Music_" + Date.now(),
    folder: '/thumbnail-music'
  });

  return response;
}

module.exports = {uploadImg};
