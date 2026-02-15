const mongooes = require('mongoose');
const dotenv = require('dotenv');
const dns = require('dns');
dotenv.config();

function connectDB() {
    try{

        dns.setServers(["1.1.1.1", "8.8.8.8"]); // Bypassing DNS resolution to avoid potential issues with MongoDB Atlas
        mongooes.connect(process.env.MONGODB_STR);
        console.log("Connected to MongoDB");
        
       
    }catch(err){
        console.log("Error connecting to MongoDB", err);
    }
}

module.exports = connectDB;