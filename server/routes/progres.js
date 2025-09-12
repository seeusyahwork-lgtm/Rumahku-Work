import express from 'express';
import { getAllprogres, createNewprogres, updateprogres, deleteprogres } from '../controllers/progresController.js';

const router = express.Router();

// CRUD progres
router.post('/', createNewprogres);
router.get('/', getAllprogres);
router.patch('/:id', updateprogres);
router.delete('/:id', deleteprogres);

export default router;
