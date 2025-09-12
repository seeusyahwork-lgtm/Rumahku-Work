import express from 'express';
import { getAllmandor, createNewmandor, updatemandor, deletemandor } from '../controllers/mandorController.js';

const router = express.Router();

// CRUD mandor
router.post('/', createNewmandor);
router.get('/', getAllmandor);
router.patch('/:id', updatemandor);
router.delete('/:id', deletemandor);

export default router;
