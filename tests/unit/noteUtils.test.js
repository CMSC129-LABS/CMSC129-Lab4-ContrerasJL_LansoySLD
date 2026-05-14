const { validateNote, generateId, formatNote } = require('../../server/src/noteUtils');

describe('validateNote', () => {
  test('should return false if title is empty', () => {
    expect(validateNote({ title: '', body: 'some body' })).toBe(false);
  });
});

describe('generateId', () => {
  test('should return a unique string id each time', () => {
    const id1 = generateId();
    const id2 = generateId();
    expect(id1).not.toBe(id2);
  });
});

describe('formatNote', () => {
  test('should return a note object with id, title, body, and createdAt', () => {
    const result = formatNote({ title: 'Test', body: 'Hello' });
    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('title');
    expect(result).toHaveProperty('body');
    expect(result).toHaveProperty('createdAt');
  });
});