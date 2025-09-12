import express from 'express';
import { getAllproyek, createNewproyek, updateproyek, deleteproyek } from '../controllers/proyekController.js';

const router = express.Router();

// CRUD proyek
router.post('/', createNewproyek);
router.get('/', getAllproyek);
router.patch('/:id', updateproyek);
router.delete('/:id', deleteproyek);

export default router;
