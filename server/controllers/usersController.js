// controllers/usersController.js

// Import named function dari model
import { 
    getAllUsers as getAllUsersModel, 
    createNewUser as createNewUserModel, 
    updateUserById as updateUserByIdModel,
    deleteUserById as deleteUserByIdModel // 🆕 import fungsi delete
} from '../models/usersModel.js';

// GET: Ambil semua user
const getAllUsers = async (req, res) => {
    try {
        const data = await getAllUsersModel();
        res.json({
            message: 'controllers/usersController.js GET all users success',
            data: data
        });
    } catch (error) {
        res.status(500).json({
            message: 'controllers/usersController.js GET all users failed',
            error: error.message,
        });
    }
};

// POST: Tambah user baru
const createNewUser = async (req, res) => {
    try {
        const newUser = await createNewUserModel(req.body);
        res.status(201).json({
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

// PATCH: Update user berdasarkan id
const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedUser = await updateUserByIdModel(id, req.body);
        res.json({
            message: 'controllers/usersController.js UPDATE user success',
            data: updatedUser
        });
    } catch (error) {
        res.status(500).json({
            message: 'controllers/usersController.js UPDATE user failed',
            error: error.message
        });
    }
};

// DELETE: Hapus user berdasarkan id
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await deleteUserByIdModel(id);
        if (deletedUser.length === 0) {
            return res.status(404).json({
                message: `User dengan id ${id} tidak ditemukan`
            });
        }
        res.json({
            message: 'controllers/usersController.js DELETE user success',
            data: deletedUser
        });
    } catch (error) {
        res.status(500).json({
            message: 'controllers/usersController.js DELETE user failed',
            error: error.message
        });
    }
};

// Export semua controller
export {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
};
