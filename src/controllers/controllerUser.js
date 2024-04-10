const express = require('express');
const router = express.Router();
const User = require('../schemas/userSchema.js');
const jwtSecret = '%$%$%1bghd'

//Obtener Usuario
router.get('/', async (req, res) => {
    try {
        const users =  await User.find();
        res.json(users);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
});

//Obtener Usuario por ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({message: error.message})}
});

//Crear un nuevo usuario
router.post('/', async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            gender: req.body.gender,
            age: req.body.age
        });
    
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
})

//Actualizar usuario por ID
router.put('/:id', async (req,res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.status(201).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
})

//Eliminar un user por ID
router.delete('/:id', getUser, async (req, res) => {
    try {
        await res.user.remove();
        res.json({message: 'Usuario Eliminado'});
    } catch (error) {
        res.status(404).json({message: error.message})
    }
});

//Obtener detalles del usuario por email
router.get('/:email', async (req, res) => {
    try {
        const user = await User.findOne({email: req.params.email});
        res.status(201).json(user);
    }catch (error) {
        res.status(404).json({message: error.message});
    }
})

//Obtener detalles del usuario por su genero
router.get('/:gender', async (req, res) => {
    try {
        const user = await User.findOne({gender: req.params.gender});
        res.status(201).json(user);
    }catch (error) {
        res.status(404).json({message: error.message});
    }
})

//Obtener detalles del usuario por su edad
router.get('/:age', async (req, res) => {
    try {
        const user = await User.findOne({age: req.params.age});
        res.status(201).json(user);
    }catch (error) {
        res.status(404).json({message: error.message});
    }
})

//Middleware para obtener el usuario por su ID
async function getUser(req, res, next) {
    let user;
    try {
        user = await User.findById(req, params.id);
        if (!user) {
            return res.status(404).json({message: 'Usuario no encontrado'})
        }
    } catch (error) {
        return res.status(404).json({message: error.message});
    }
    
    res.user = user;
    next();
}

const routers = router

module.exports = (routers,jwtSecret);

