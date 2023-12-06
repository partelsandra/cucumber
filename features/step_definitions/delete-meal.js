const { Given, When, Then } = require('cucumber');
const puppeteer = require('puppeteer');

let browser, page;

Given('the user is on the Calorie Tracker page', async function () {
  browser = await puppeteer.launch();
  page = await browser.newPage();
  await page.goto('http://127.0.0.1:5500/calorytracker/index.html');
  await page.waitForSelector('#item-list');
});

When('the user deletes all existing meals', async function () {
  const deleteButtons = await page.$$('#item-list li .delete-btn');
  for (const deleteButton of deleteButtons) {
    await deleteButton.click();
    await page.waitForSelector('.confirm-delete-btn');
    await page.click('.confirm-delete-btn');
  }
});

Then('all existing meals should be successfully deleted', async function () {
  await page.waitForSelector('#item-list li', { hidden: true });
  await page.screenshot({ path: 'delete-meal-test-screenshot.png' });
  await browser.close();
});
