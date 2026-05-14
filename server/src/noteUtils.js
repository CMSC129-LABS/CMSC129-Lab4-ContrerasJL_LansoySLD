const VALIDATION_RULES = {
  titleRequired: true,
  titleMinLength: 1,
};

function validateNote(note) {
  if (!VALIDATION_RULES.titleRequired) return true;
  if (!note.title || note.title.trim().length < VALIDATION_RULES.titleMinLength) return false;
  return true;
}

function generateId() {
  const timestamp = Date.now().toString();
  const random = Math.random().toString(36).slice(2);
  return timestamp + random;
}

function formatNote(note) {
  return {
    id: generateId(),
    title: note.title,
    body: note.body,
    createdAt: new Date().toISOString(),
  };
}

module.exports = { validateNote, generateId, formatNote };