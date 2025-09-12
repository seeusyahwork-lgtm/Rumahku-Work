import { 
    getAllpengawas as getAllpengawasModel, 
    createNewpengawas as createNewpengawasModel, 
    updatepengawasById as updatepengawasByIdModel,
    deletepengawasById as deletepengawasByIdModel
} from '../models/pengawasModel.js';

// GET all pengawas
export const getAllpengawas = async (req, res) => {
    try {
        const data = await getAllpengawasModel();
        res.json({ message: 'GET all pengawas success', data });
    } catch (error) {
        res.status(500).json({ message: 'GET all pengawas failed', error: error.message });
    }
};

// CREATE new pengawas
export const createNewpengawas = async (req, res) => {
    try {
        const newpengawas = await createNewpengawasModel(req.body);
        res.status(201).json({ message: 'CREATE new pengawas success', data: newpengawas });
    } catch (error) {
        res.status(500).json({ message: 'CREATE new pengawas failed', error: error.message });
    }
};

// UPDATE pengawas by ID
export const updatepengawas = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedpengawas = await updatepengawasByIdModel(id, req.body);
        if (!updatedpengawas) return res.status(404).json({ message: `pengawas ID ${id} tidak ditemukan` });
        res.json({ message: 'UPDATE pengawas success', data: updatedpengawas });
    } catch (error) {
        res.status(500).json({ message: 'UPDATE pengawas failed', error: error.message });
    }
};

// DELETE pengawas by ID
export const deletepengawas = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedpengawas = await deletepengawasByIdModel(id);
        if (!deletedpengawas) return res.status(404).json({ message: `pengawas ID ${id} tidak ditemukan` });
        res.json({ message: 'DELETE pengawas success', data: deletedpengawas });
    } catch (error) {
        res.status(500).json({ message: 'DELETE pengawas failed', error: error.message });
    }
};
