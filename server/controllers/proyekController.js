import { 
    getAllproyek as getAllproyekModel, 
    createNewproyek as createNewproyekModel, 
    updateproyekById as updateproyekByIdModel,
    deleteproyekById as deleteproyekByIdModel
} from '../models/proyekModel.js';

// GET all proyek
export const getAllproyek = async (req, res) => {
    try {
        const data = await getAllproyekModel();
        res.json({ message: 'GET all proyek success', data });
    } catch (error) {
        res.status(500).json({ message: 'GET all proyek failed', error: error.message });
    }
};

// CREATE new proyek
export const createNewproyek = async (req, res) => {
    try {
        const newproyek = await createNewproyekModel(req.body);
        res.status(201).json({ message: 'CREATE new proyek success', data: newproyek });
    } catch (error) {
        res.status(500).json({ message: 'CREATE new proyek failed', error: error.message });
    }
};

// UPDATE proyek by ID
export const updateproyek = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedproyek = await updateproyekByIdModel(id, req.body);
        if (!updatedproyek) return res.status(404).json({ message: `proyek ID ${id} tidak ditemukan` });
        res.json({ message: 'UPDATE proyek success', data: updatedproyek });
    } catch (error) {
        res.status(500).json({ message: 'UPDATE proyek failed', error: error.message });
    }
};

// DELETE proyek by ID
export const deleteproyek = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedproyek = await deleteproyekByIdModel(id);
        if (!deletedproyek) return res.status(404).json({ message: `proyek ID ${id} tidak ditemukan` });
        res.json({ message: 'DELETE proyek success', data: deletedproyek });
    } catch (error) {
        res.status(500).json({ message: 'DELETE proyek failed', error: error.message });
    }
};
