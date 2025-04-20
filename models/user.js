const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },  
    password:{
        type: String,
        required: true,
    }, 
    date:{
        type: Date,
        default: Date.now,
    }
});
const user = mongoose.model('User', userSchema);
module.exports = user;