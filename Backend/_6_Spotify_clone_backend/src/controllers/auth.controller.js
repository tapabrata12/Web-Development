const userModel = require('../models/user.models');
const jwt = require('jsonwebtoken');
const argon2 = require('argon2');

async function register(req,res) {
    const {userName, email, password, role = 'user'} = req.body;

   const findUser = await userModel.findOne({
        $or: [
            {userName},
            {email}
        ]
    });

    if (findUser) {
        return res.status(409).json({
            message: "User already exists"
        });
    }

    try{
        const hashedPassword = await argon2.hash(password);

        const user = await userModel.create({
            userName,
            email,
            password: hashedPassword,
            role
        })

        const token = jwt.sign({id: user._id, role: user.role},process.env.JWT_SECRET);

        res.cookie('token',token);

        res.status(200).json({
            message: "User created successfully",
            user: user
        });

    }catch(err){
        res.status(400).json({
            message: "Problem in creating user",
            err: err
        });
    }
}


async function login(req,res) {
    const {userName, email, password} = req.body;

    const findUser = await userModel.findOne({
        $or:[{userName},{email}]
    });

    if (!findUser) {
        return res.status(401).json({
            message: "User not found please register !!"
        });
    }

    try{
        const isPasswordValid = await argon2.verify(findUser.password,password);
        
        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid password"
            });
        }

        const token = jwt.sign({id: findUser._id, role: findUser.role},process.env.JWT_SECRET);

        res.cookie('token',token);

        return res.status(200).json({
            message: "Login successful",
            user: findUser
        })

    }catch(err){
        res.status(400).json({
            message: "Error in login",
            err: err
        });
    }
}

module.exports = {register, login};