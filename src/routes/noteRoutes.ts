import { Router } from 'express';
import { createNote, getNotes, updateNote, deleteNote } from '../controllers/noteController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Create a new note
router.post('/', authMiddleware, createNote);

// Get notes with pagination
router.get('/', authMiddleware, getNotes);

// Update a note
router.put('/:id', authMiddleware, updateNote);

// Delete a note
router.delete('/:id', authMiddleware, deleteNote);

export default router;
