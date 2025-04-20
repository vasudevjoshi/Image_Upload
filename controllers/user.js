const user = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const register = async(req,res) =>{
    const {name, email, password} = req.body;
    try{
        let userExist = await user.findOne({email});
        if(userExist){
            return res.status(400).json({message: 'User already exists'});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new user({name, email, password: hashedPassword});
        await newUser.save();
        res.status(201).json({message: 'User registered successfully'});
    }catch(err){        
        console.error(err.message);
        res.status(500).json({message: 'Server error'});
    }       
}
const login = async (req,res)=>{
    const {email, password} = req.body;
    try{
        let userExist = await user.findOne({email});
        if(!userExist){
            return res.status(400).json({message: 'Invalid credentials'});
        }
        const isMatch = await bcrypt.compare(password, userExist.password);
        if(!isMatch){
            return res.status(400).json({message: 'Invalid credentials'});
        }
        const token = jwt.sign({id: userExist._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(200).json({token, user: {id: userExist._id, name: userExist.name, email: userExist.email}});
    }catch(err){        
        console.error(err.message);
        res.status(500).json({message: 'Server error'});
    }
}