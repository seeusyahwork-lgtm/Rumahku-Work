// controllers/loginController.js

import { 
    getAllLogin as getAllloginModel, 
    createNewLogin as createNewloginModel, 
    updateLoginById as updateloginByIdModel,
    deleteLoginById as deleteloginByIdModel
} from '../models/loginModel.js';

// GET all login
export const getAlllogin = async (req, res) => {
    try {
        const data = await getAllloginModel();
        res.json({ message: 'GET all login success', data });
    } catch (error) {
        res.status(500).json({ message: 'GET all login failed', error: error.message });
    }
};

// CREATE new login
export const createNewlogin = async (req, res) => {
    try {
        const newlogin = await createNewloginModel(req.body);
        res.status(201).json({ message: 'CREATE new login success', data: newlogin });
    } catch (error) {
        res.status(500).json({ message: 'CREATE new login failed', error: error.message });
    }
};

// UPDATE login by ID
export const updatelogin = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedlogin = await updateloginByIdModel(id, req.body);
        if (!updatedlogin) return res.status(404).json({ message: `Login ID ${id} tidak ditemukan` });
        res.json({ message: 'UPDATE login success', data: updatedlogin });
    } catch (error) {
        res.status(500).json({ message: 'UPDATE login failed', error: error.message });
    }
};

// DELETE login by ID
export const deletelogin = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedlogin = await deleteloginByIdModel(id);
        if (!deletedlogin) return res.status(404).json({ message: `Login ID ${id} tidak ditemukan` });
        res.json({ message: 'DELETE login success', data: deletedlogin });
    } catch (error) {
        res.status(500).json({ message: 'DELETE login failed', error: error.message });
    }
};
