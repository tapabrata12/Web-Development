const mongoose = require('mongoose');
const dns = require('dns');
async function connectDB() {

    dns.setServers(["1.1.1.1", "8.8.8.8"]); // Bypassing DNS resolution to avoid potential issues with MongoDB Atlas
    try{
      await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB");
    }catch(err){
        console.log("Error connecting to MongoDB:", err);
    }
}

module.exports = connectDB;