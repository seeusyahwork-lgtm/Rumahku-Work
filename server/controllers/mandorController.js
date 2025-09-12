import { 
    getAllmandor as getAllmandorModel, 
    createNewmandor as createNewmandorModel, 
    updatemandorById as updatemandorByIdModel,
    deletemandorById as deletemandorByIdModel
} from '../models/mandorModel.js';

// GET all mandor
export const getAllmandor = async (req, res) => {
    try {
        const data = await getAllmandorModel();
        res.json({ message: 'GET all mandor success', data });
    } catch (error) {
        res.status(500).json({ message: 'GET all mandor failed', error: error.message });
    }
};

// CREATE new mandor
export const createNewmandor = async (req, res) => {
    try {
        const newmandor = await createNewmandorModel(req.body);
        res.status(201).json({ message: 'CREATE new mandor success', data: newmandor });
    } catch (error) {
        res.status(500).json({ message: 'CREATE new mandor failed', error: error.message });
    }
};

// UPDATE mandor by ID
export const updatemandor = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedmandor = await updatemandorByIdModel(id, req.body);
        if (!updatedmandor) return res.status(404).json({ message: `mandor ID ${id} tidak ditemukan` });
        res.json({ message: 'UPDATE mandor success', data: updatedmandor });
    } catch (error) {
        res.status(500).json({ message: 'UPDATE mandor failed', error: error.message });
    }
};

// DELETE mandor by ID
export const deletemandor = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedmandor = await deletemandorByIdModel(id);
        if (!deletedmandor) return res.status(404).json({ message: `mandor ID ${id} tidak ditemukan` });
        res.json({ message: 'DELETE mandor success', data: deletedmandor });
    } catch (error) {
        res.status(500).json({ message: 'DELETE mandor failed', error: error.message });
    }
};
