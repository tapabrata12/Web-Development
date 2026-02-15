const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');
const router = express.Router();
const userModel = require('../models/Schema.model');
/*
This is Only Just a dummy API to test 
*/
router.post('/dopost', async (req,res)=>{
    const isToken = req.cookies.token;
    if (!isToken) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    try{
        const decorded = jwt.verify(isToken, process.env.JWT_SECRET);
        const user = await userModel.findById(decorded.id);
        return res.json({message:"Token is valid", user});
    }catch(err){
        res.status(401).json({
            message: "Invalid token"
        });
    }
   
    
});

module.exports = router;