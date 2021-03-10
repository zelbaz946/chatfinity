/* eslint-disable no-undef */
const request = require('supertest');

const app = '../server/server.js';

describe('/', () => {
  describe('GET', () => {
    it('responds with 200 status', () => {
      return request(app).get('/').expect(200)
    })
  })
})
