const puppeteer = require('puppeteer');
const chatfinity = `http://localhost:8080/`;
import "regenerator-runtime/runtime.js";

describe('Configuration Tests', () => {
  beforeAll(async () => {
    await page.goto(chatfinity);
  });

  it('should be called Yack Yack Yack', async () => {
    await expect(page.title()).resolves.toMatch('Yack Yack Yack')
  } )
})

