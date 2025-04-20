const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('MongoDB connected Successfully'))
        .catch(err => console.log('MongoDB connection error:', err.message));
        
    } catch(err){
        console.error(err.message);
        process.exit(1);}
    }