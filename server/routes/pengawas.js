import express from 'express';
import { getAllpengawas, createNewpengawas, updatepengawas, deletepengawas } from '../controllers/pengawasController.js';

const router = express.Router();

// CRUD pengawas
router.post('/', createNewpengawas);
router.get('/', getAllpengawas);
router.patch('/:id', updatepengawas);
router.delete('/:id', deletepengawas);

export default router;
