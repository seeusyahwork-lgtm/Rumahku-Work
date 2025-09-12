import express from 'express';
import { getAllkonsumen, createNewkonsumen, updatekonsumen, deletekonsumen } from '../controllers/konsumenController.js';

const router = express.Router();

// CRUD konsumen
router.post('/', createNewkonsumen);
router.get('/', getAllkonsumen);
router.patch('/:id', updatekonsumen);
router.delete('/:id', deletekonsumen);

export default router;
