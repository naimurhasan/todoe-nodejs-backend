import { Router } from 'express';
import { createNote, getNotes, updateNote, deleteNote } from '../controllers/noteController';

const router = Router();

// Create a new note
router.post('/', createNote);

// Get notes with pagination
router.get('/', getNotes);

// Update a note
router.put('/:id', updateNote);

// Delete a note
router.delete('/:id', deleteNote);

export default router;
