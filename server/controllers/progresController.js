import {
    getAllprogres as getAllprogresModel,
    createNewprogres as createNewprogresModel,
    updateprogresById as updateprogresByIdModel,
    deleteprogresById as deleteprogresByIdModel
} from '../models/progresModel.js';

// GET all progres
export const getAllprogres = async (req, res) => {
    try {
        const data = await getAllprogresModel();
        res.json({ message: 'GET all progres success', data });
    } catch (error) {
        res.status(500).json({ message: 'GET all progres failed', error: error.message });
    }
};

// CREATE new progres
export const createNewprogres = async (req, res) => {
    try {
        const newprogres = await createNewprogresModel(req.body);
        res.status(201).json({ message: 'CREATE new progres success', data: newprogres });
    } catch (error) {
        res.status(500).json({ message: 'CREATE new progres failed', error: error.message });
    }
};

// UPDATE progres by ID
export const updateprogres = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedprogres = await updateprogresByIdModel(id, req.body);
        if (!updatedprogres) return res.status(404).json({ message: `progres ID ${id} tidak ditemukan` });
        res.json({ message: 'UPDATE progres success', data: updatedprogres });
    } catch (error) {
        res.status(500).json({ message: 'UPDATE progres failed', error: error.message });
    }
};

// DELETE progres by ID
export const deleteprogres = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedprogres = await deleteprogresByIdModel(id);
        if (!deletedprogres) return res.status(404).json({ message: `progres ID ${id} tidak ditemukan` });
        res.json({ message: 'DELETE progres success', data: deletedprogres });
    } catch (error) {
        res.status(500).json({ message: 'DELETE progres failed', error: error.message });
    }
};
