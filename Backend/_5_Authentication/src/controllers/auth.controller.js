const userModel = require('../models/Schema.model');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config();


async function register(req, res) {
    const {name, email, password} = req.body;

    const isUserExist = await userModel.findOne({email});
    if(isUserExist) {
        return res.status(409).json({
            message: "User already exists"
        })
    }
    
    const user = await userModel.create({name,email,password});

    const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
    res.cookie('token',token);
    res.status(201).json({
        message: "User registered successfully",
        user
    });
}

module.exports = { register };