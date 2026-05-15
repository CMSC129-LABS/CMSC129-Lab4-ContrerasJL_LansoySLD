const request = require('supertest');
const app = require('../../server/src/app');
const store = require('../../server/src/store/notesStore');

afterAll(done => {
  done();
});

beforeEach(() => store.reset())

describe('POST /api/notes', () => {
  test('creates a note and returns 201 with the note object', async () => {
    const res = await request(app)
      .post('/api/notes')
      .send({ title: 'My Note', body: 'Some body text.' });

    expect(res.status).toBe(201);
    expect(res.body).toMatchObject({
      id: expect.any(String),
      title: 'My Note',
      body: 'Some body text.',
    });
  });

  test('returns 400 when title is missing', async () => {
    const res = await request(app)
      .post('/api/notes')
      .send({ body: 'No title here' });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});

describe('GET /api/notes', () => {
  test('returns 200 and an array', async () => {
    const res = await request(app).get('/api/notes');

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});