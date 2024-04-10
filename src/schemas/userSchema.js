const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    lastName: { 
        type: String,
        required: true,
        trimp:true
    },
    email: { 
        type: String, 
        required: true},
    gender : {
        type: String,
        required: true
    },
    age: { 
        type: Number, 
        required: true }
});

const User =  mongoose.model('User', userSchema);

module.exports = User;