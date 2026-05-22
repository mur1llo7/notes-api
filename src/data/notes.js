const {randomUUID } = require ('crypto');

// The in-memory "database" - a plain array
// This is the ONLY place in the codebase that knows notes are stored in an array
let notes = []

// Return all notes
function getAllNotes(){
    return notes;
}

// Return one note by id, or null if not found
function getNoteById(id) {
    return notes.find((note) => note.id === id) || null;
}

// Create a new note, adds it to the array, returns it
function createNote({ title, content }) {
    const now = new Date().toISOString();
    const note = {
        id: randomUUID(),
        title,
        content,
        createdAt: now,
        updatedAt: now,
    };
    notes.push(note);
    return note;
}

// Updates title + content of an existing note, returns updated note or null
function updateNote(id, { title, content }) {
    const note = getNoteById(id);
    if (!note) return null;

    note.title = title;
    note.content = content;
    note.updatedAt = new Date().toISOString();
    return note;
}

// Removes a note from the array, returns true if deleted, false if not found
function deleteNote(id) {
    const index = notes.findIndex((note) => note.id === id);
    if (index === -1) return false;

    notes.splice(index, 1)
    return true;
}

module.exports = {
    getAllNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote,
};