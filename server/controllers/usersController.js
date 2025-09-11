// controllers/usersController.js

// Import named function dari model
import { getAllUsers as getAllUsersModel, createNewUser as createNewUserModel } from '../models/usersModel.js';

// GET: Ambil semua user
const getAllUsers = async (req, res) => {
    try {
        const data = await getAllUsersModel();
        res.json({
            message: 'controller/usersController.js GET all users success',
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: '/controller/usersController.js GET all users failed Internal Server Error',
            error: error.message,
        });
    }
};

// POST: Tambah user baru
const createNewUser = async (req, res) => {
    try {
        const newUser = await createNewUserModel(req.body);
        res.json({
            message: 'controllers/usersController.js CREATE new user success',
            data: newUser
        });
    } catch (error) {
        res.status(500).json({
            message: 'controllers/usersController.js CREATE new user failed',
            error: error.message
        });
    }
};

// PUT: Update user
const updateUser = (req, res) => {
    const { id } = req.params;
    res.json({
        message: '/Controller UPDATE user success',
        id: id,
        data: req.body
    });
};

// DELETE: Hapus user
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        message: '/Controller DELETE user success',
        data: {
            id: id,
            name: 'Suparno',
            email: 'Suparno@gmail.com',
            address: 'Banyuwangi'
        }
    });
};

// Export semua controller
export {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
};
