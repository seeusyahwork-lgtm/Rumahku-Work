// routes/login.js
import express from 'express';
import { getAlllogin, createNewlogin, updatelogin, deletelogin } from '../controllers/loginController.js';

const router = express.Router();

// CRUD login
router.get('/', getAlllogin);          // GET all login
router.post('/', createNewlogin);      // CREATE new login
router.patch('/:id', updatelogin);     // UPDATE login by ID
router.delete('/:id', deletelogin);    // DELETE login by ID

export default router;
