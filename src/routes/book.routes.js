const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authBook.js')

import router from '../controllers/controllerBook.js'

router.get('/',auth.authenticate());
router.get('/:id',auth.authenticate());
router.post('/',auth.authenticate());
router.put('/:id',auth.authenticate());
router.delete('/:id',auth.authenticate());  
router.get('/:author',auth.authenticate())