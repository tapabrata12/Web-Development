const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

async function connectDB(){
    const urlDB = process.env.MONGODB_STR;
    await mongoose.connect(urlDB);
    console.log("DB Connected !!!");
    
}

module.exports = connectDB;