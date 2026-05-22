const express = require('express')
const router = express.Router();
const {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote,
} = require('../data/notes');

// GET /notes - return all notes
router.get('/', (req, res) => {
    const notes = getAllNotes();
    res.status(200).json(notes);
});

// GET /notes/:id - return one note
router.get('/:id', (req, res) => {
    const note = getNoteById(req.params.id);
    if (!note) {
        return res.status(404).json({ error: 'Note not found' });
    }
    res.status(200).json(note);
});

// POST /notes - Create a note
router.post('/', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' })
    }
    const note = createNote({ title, content });
    res.status(201).json(note);
});

// PUT /notes/:id - Updated a Note
router.put('/:id', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }
    const note = updateNote(req.params.id, { title, content });
    if(!note) {
        return res.status(404).json({ error: 'Note not found' });
    };
    return res.status(200).json(note);
});

// DELETE /notes/:id - Delete a note
router.delete('/:id', (req, res) => {
    const deleted = deleteNote(req.params.id);
    if(!deleted) {
        return res.status(404).json({ error: 'Note not found' });
    }
    res.status(200).json({ message: 'Note deleted' })
});

module.exports = router;