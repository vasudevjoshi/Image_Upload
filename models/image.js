const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    url:{
        type: String,
        required: true,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    description:{
        type: String,
        required: true,
    },
});
const Image = mongoose.model('Image', imageSchema);

module.exports = Image;