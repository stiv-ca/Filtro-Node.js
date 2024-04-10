const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    author: { 
        type: String,
        required: true,
        trimp:true
    },
    pages: { 
        type: Number, 
        required: true},
    description : {
        type: String,
        required: true
    }
});

const Book =  mongoose.model('Book', bookSchema);

module.exports = Book;