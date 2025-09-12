// const express = require('express');
// const router = express.Router();


// const usersController = require('../controllers/usersController');

// //CREATE - POST  (pengiriman data)
// router.post('/', usersController.createNewUser);

// //READ - GET (pembacaan data)
// router.get('/', usersController.getAllUsers);

// //UPDATE - PATCH (update data)
// router.patch('/:id', usersController.updateUser);

// //DELETE - DELETE (hapus data)
// router.delete('/:id', usersController.deleteUser);

// module.exports = router;


import express from 'express';
import { 
    getAllUsers, 
    createNewUser, 
    updateUser, 
    deleteUser 
} from '../controllers/usersController.js';

const router = express.Router();

// CRUD users
router.get('/', getAllUsers);
router.post('/', createNewUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;  // ✅ default export
