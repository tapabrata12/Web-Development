db = require('mongoose');

const dbURL = 'mongodb+srv://tapabratachowdhury12_db_user:KGLWH34AyN6py8iZ@backend.siu93k5.mongodb.net/demo';

async function connectDB() {
    await db.connect(dbURL);
    console.log("Connected to DB");
    
}



module.exports = connectDB;