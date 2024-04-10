const express = require('express');
const router = express.Router();
const Book = require('../schemas/bookSchema.js');
const jwtSecret = '@#$%&'

//Obtener Libros
router.get('/', async (req, res) => {
    try {
        const books =  await Book.find();
        res.json(books);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
});

//Obtener Libro por ID
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.json(book);
    } catch (error) {
        res.status(404).json({message: error.message})}
});

//Crear un nuevo libro
router.post('/', async (req, res) => {
    try {
        const book = new Book({
            name: req.body.name,
            author: req.body.author,
            pages: req.body.pages,
            description: req.body.description
        });
    
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
})

//Actualizar libro por ID
router.put('/:id', async (req,res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.status(201).json(book);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
})

//Eliminar un libro por ID
router.delete('/:id', getBook, async (req, res) => {
    try {
        await res.book.remove();
        res.json({message: 'Libro Eliminado'});
    } catch (error) {
        res.status(404).json({message: error.message})
    }
});

//Obtener libros por autor
router.get('/:author', async (req, res) => {
    try {
        const books = await Book.find({author: req.params.author});
        res.status(201).json(books);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
})

//Obtener libro por nombre del libro
router.get('/:name', async (req, res) => {
    try {
        const books = await Book.findOne({name: req.params.name});
        res.status(201).json(books);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
})

//Obtener libros por nùmero de paginas
router.get('/:pages', async (req,res) => {
    try {
        const books = await Book.find({pages: req.params.pages});
        res.status(201).json(books);
    } catch (error) {
        res.status(404).json({message: error.message});

    }
})
 
//Middleware para obtener el libro por su ID
async function getBook(req, res, next) {
    let book;
    try {
        book = await Book.findById(req, params.id);
        if (!book) {
            return res.status(404).json({message: 'Libro no encontrado'})
        }
    } catch (error) {
        return res.status(404).json({message: error.message});
    }
    
    res.book = book;
    next();
}

module.exports = (router,jwtSecret);

