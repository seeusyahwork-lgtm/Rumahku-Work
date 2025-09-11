const express = require('express');
const router = express.Router();


const usersController = require('../controllers/usersController');

//CREATE - POST  (pengiriman data)
router.post('/', usersController.createNewUser);

//READ - GET (pembacaan data)
router.get('/', usersController.getAllUsers);

//UPDATE - PATCH (update data)
router.patch('/:id', usersController.updateUser);

//DELETE - DELETE (hapus data)
router.delete('/:id', usersController.deleteUser);

module.exports = router;
