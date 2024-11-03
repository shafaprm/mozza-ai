const express = require('express');
const cors = require('cors');

const connectMongo = require('./utils/connect-mongo');
const HttpError = require('./utils/http-error.js');

const openaiRoutes = require('./routers/api.js');
const authRouters = require('./routers/auth.js');

require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 5000;

connectMongo();

app.use(cors());
app.use(express.json({extended: false}));
app.use(express.urlencoded({extended: false}));

app.use('/api/conversation', openaiRoutes);
app.use('/api/auth', authRouters);

app.use(async (req, res, next) => {
    return next(new HttpError('Route Not Found', 404));
})

app.use((error, req, res, next) => {
    return res.json({message: error.message || 'Internal Server Error', statusCode: error.statusCode || 500});
})

app.listen(PORT, console.log(`Server Running on Port ${PORT}`));
