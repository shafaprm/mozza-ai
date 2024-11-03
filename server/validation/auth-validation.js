const Joi = require('joi');

const HttpError = require('../utils/http-error.js');

const registerSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email({
        minDomainSegments: 2, 
        tlds: {allow: ['com', 'net']}})
        .required(),
    password: Joi.string().min(6).required(),
})

const registerValidation = (req, res, next) => {
    const {error} = registerSchema.validate(req.body);

    if(error){
        const messages = error.details.map((err) => err.message).join(',');

        return next(new HttpError(messages, 400));  
    }

    return next();
}

const loginSchema = Joi.object({
    email: Joi.string().email({
        minDomainSegments: 2, 
        tlds: {allow: ['com', 'net']}})
        .required(),
    password: Joi.string().min(6).required(),
})

const loginValidation = (req, res, next) => {
    const {error} = loginSchema.validate(req.body);

    if(error){
        const messages = error.details.map((err) => err.message).join(",");
        return next(new HttpError(messages, 400));
    }

    return next();
}

module.exports = {registerValidation, loginValidation};