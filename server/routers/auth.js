const express = require('express');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
require("dotenv").config()

const User = require('../models/User.js');
const HttpError = require('../utils/http-error.js');
const router = express.Router();

const {registerValidation, loginValidation} = require('../validation/auth-validation.js');
const SECRET = process.env.JWT_SECRET;

router.post('/register', registerValidation, async (req, res, next) => {
    try{
        const {firstName, lastName, email, password} = req.body;

        const findUserByEmail = await User.findOne({email});
        
        if(findUserByEmail){
            res.status(400).json({message: 'Email is already registered', status: false});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({firstName, lastName, email, password: hashedPassword});
        await user.save();

        const token = jwt.sign({id: user._id}, SECRET, {expiresIn: '5h'});
        res.json({token});
    }catch(error){
        console.log(error);
        return next(new HttpError('Internal Server Error', 500));
    }   
})

router.post('/login', loginValidation, async (req, res, next) => {
    try{
        const {email, password} = req.body;

        const findUserByEmail = await User.findOne({email});

        if(!findUserByEmail){
            res.status(400).json({message: 'Invalid Credentials', status: false});
        }
        
        const matchPasword = await bcrypt.compare(password, findUserByEmail.password);

        if(!matchPasword){
            console.log('here')
            res.status(400).json({message: 'Invalid Credentials', status: false});
        }

        const token = jwt.sign({id: findUserByEmail._id}, SECRET, {expiresIn: '5h'});
        res.json({token});
    }catch(error){
        console.log(error);
        return next(new HttpError('Internal Server Error', 500));
    }
})

module.exports = router;