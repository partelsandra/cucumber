// features/step_definitions/add-meal.js

const { Given, When, Then, After } = require('cucumber');
const puppeteer = require('puppeteer');

let browser, page;

Given('the user is on the Calorie Tracker page', async function () {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://127.0.0.1:5501/calorytracker/index.html');
});

When('the user adds a new meal with name {string} and calories {string}', async function (name, calories) {
    // Perform Puppeteer steps to add a new meal
    console.log('Adding a new meal...');
    await page.type('#item-name', name);
    await page.type('#item-calories', calories);
    await page.click('.add-btn');

    // Oodake, kuni uus söök ilmub loendi hulka
await page.waitForSelector(`#item-list li:contains("${name}")`, { timeout: 15000 });

});

Then('the total calories should be updated to {string}', async function (totalCalories) {
    // Perform Puppeteer steps to check if total calories are updated
    console.log('Checking if total calories are updated...');
    const currentTotalCalories = await page.$eval('.total-calories', (element) => element.textContent.trim());
    console.log('Current Total Calories:', currentTotalCalories);

    // Võrdle, kas praegused kalorid on õigesti värskendatud
    if (currentTotalCalories !== totalCalories.trim()) {
        throw new Error(`Total calories not updated correctly. Expected: ${totalCalories}, Actual: ${currentTotalCalories}`);
    }
});

Then('the new meal {string} should be displayed in the list', async function (mealName) {
    // Perform Puppeteer steps to check if the new meal is displayed in the list
    console.log('Checking if the new meal is displayed in the list...');
    const newMealSelector = `#item-list li:contains("${mealName}")`;
    const newMealElement = await page.$(newMealSelector);

    // Veendu, et uus söök on loendis nähtav
    if (!newMealElement) {
        throw new Error(`The new meal "${mealName}" is not displayed in the list.`);
    }
});

After(async function () {
    if (browser) {
        await browser.close();
    }
});
