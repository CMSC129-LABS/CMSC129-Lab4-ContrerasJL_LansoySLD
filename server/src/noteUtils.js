function validateNote(note) {
  if (!note.title || note.title.trim() === '') {
    return false;
  }
  return true;
}

function generateId() {
  return Date.now().toString() + Math.random().toString(36).slice(2);
}

function formatNote(note) {
  return {
    id: generateId(),
    title: note.title,
    body: note.body,
    createdAt: new Date().toISOString()
  };
}

module.exports = { validateNote, generateId, formatNote };