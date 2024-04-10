const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authUser.js')

import routers from '../controllers/controllerUser.js'

routers.get('/', auth.authenticate());
routers.get('/:id', auth.authenticate());
routers.post('/', auth.authenticate());
routers.put('/:id', auth.authenticate());
routers.delete('/:id', auth.authenticate());
routers.get('/:email', auth.authenticate());
routers.get('/:gender',auth.authenticate());
routers.get('/:age',auth.authenticate());

module.exports = routers;