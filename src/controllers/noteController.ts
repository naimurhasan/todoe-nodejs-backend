import { Request, Response } from 'express';
import Note from '../models/Note';

// Create a new note
export const createNote = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    // Create a new note
    const note = new Note({ title, content });
    await note.save();
    res.status(201).json({ message: 'Note created successfully', note });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get notes with pagination
export const getNotes = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const options = {
      skip: (parseInt(page as string) - 1) * parseInt(limit as string),
      limit: parseInt(limit as string),
    };
    // Fetch notes with pagination
    const notes = await Note.find({}, null, options);
    const total = await Note.countDocuments({});
    const totalPages = Math.ceil(total / parseInt(limit as string));
    res.status(200).json({ notes, total, totalPages });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update a note
export const updateNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    // Find the note by ID and update it
    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    if (!updatedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json({ message: 'Note updated successfully', note: updatedNote });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete a note
export const deleteNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    // Find the note by ID and delete it
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json({ message: 'Note deleted successfully', note: deletedNote });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
