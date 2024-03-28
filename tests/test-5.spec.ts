import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.larry-cctv.com/login');
  await page.getByPlaceholder('E-mail').click();
  await page.getByPlaceholder('E-mail').fill('superadmin@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('superadmin');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByPlaceholder('Search by Device...').click();
  await page.getByPlaceholder('Search by Device...').fill('sh-pr-27');
  await page.getByText('SH-PR-27 (ปากซอยสุนทร 2)').click();
  await page.getByLabel('Map').click({position: {x: 599,y: 359} });
});ืยป