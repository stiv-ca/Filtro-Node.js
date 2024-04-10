const mongoose = require('mongoose')

let book;
let user;

const connectDB = async () => {
    try {
        if (!book) {
            book = mongoose.model('books'),require('../schemas/bookSchema'.schema);
        };
        if (!user) {
            user = mongoose.model('users'),require('../schemas/userSchema'.schema);
        };
        await mongoose.connect('localhost <Poner direcciòn de mongoDB>').
        then(() => {
            console.log('conneted database');
        }).catch((error) => {
            console.log(error);
        })
    } catch (error) {
        console.error('Failed to connect database', err);
        process.exit(1);  
    }
}

module.exports = connectDB