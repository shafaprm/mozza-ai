const mongoose = require('mongoose');
require('dotenv').config(); 

const connectMongo = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connection to MongoDb Succeed')
    }catch(err){
        console.log(err)
        console.log('MongoDb Connection Failed')
    }
}

module.exports = connectMongo;