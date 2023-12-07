import { test, expect } from '@playwright/test';
test.setTimeout(60000);
test('go to login page and login', async ({ page }) => {
    await page.goto('https://demoqa.com/login');   
    await page.fill('id=userName','demoqa');
    await page.fill('id=password','welcome1!');
    await page.click('id=login');
    await page.waitForSelector('id=submit');
    const username = page.textContent('id=userName-value');
    console.log(username);
    await expect(username).toMatch('demoqa');
  });
  
