import { 
    getAllkonsumen as getAllkonsumenModel, 
    createNewkonsumen as createNewkonsumenModel, 
    updatekonsumenById as updatekonsumenByIdModel,
    deletekonsumenById as deletekonsumenByIdModel
} from '../models/konsumenModel.js';

// GET all konsumen
export const getAllkonsumen = async (req, res) => {
    try {
        const data = await getAllkonsumenModel();
        res.json({ message: 'GET all konsumen success', data });
    } catch (error) {
        res.status(500).json({ message: 'GET all konsumen failed', error: error.message });
    }
};

// CREATE new konsumen
export const createNewkonsumen = async (req, res) => {
    try {
        const newkonsumen = await createNewkonsumenModel(req.body);
        res.status(201).json({ message: 'CREATE new konsumen success', data: newkonsumen });
    } catch (error) {
        res.status(500).json({ message: 'CREATE new konsumen failed', error: error.message });
    }
};

// UPDATE konsumen by ID
export const updatekonsumen = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedkonsumen = await updatekonsumenByIdModel(id, req.body);
        if (!updatedkonsumen) return res.status(404).json({ message: `Konsumen ID ${id} tidak ditemukan` });
        res.json({ message: 'UPDATE konsumen success', data: updatedkonsumen });
    } catch (error) {
        res.status(500).json({ message: 'UPDATE konsumen failed', error: error.message });
    }
};

// DELETE konsumen by ID
export const deletekonsumen = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedkonsumen = await deletekonsumenByIdModel(id);
        if (!deletedkonsumen) return res.status(404).json({ message: `Konsumen ID ${id} tidak ditemukan` });
        res.json({ message: 'DELETE konsumen success', data: deletedkonsumen });
    } catch (error) {
        res.status(500).json({ message: 'DELETE konsumen failed', error: error.message });
    }
};
