import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://cctv.naimueang.com:30800/login');
  await page.getByPlaceholder('E-mail').click();
  await page.getByPlaceholder('E-mail').fill('superadmin@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('superadmin');
  await page.locator('i').click();
  await page.locator('i').click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('http://cctv.naimueang.com:30800/login');
  await page.goto('http://cctv.naimueang.com:30800/');
  await page.getByPlaceholder('Search by Device...').click();
  await page.getByPlaceholder('Search by Device...').fill('t');
  await page.getByText('TF-DD-01 (แยกดินแดง)').click();//ต้องทำให้มันกดแบบฟิคตำแหน่ง dropdown
  await page.getByLabel('Map').click({
    position: {
      x: 571,
      y: 353
    }
  });
});

test('test', async ({ page }) => {
  await page.goto('https://app.larry-cctv.com/');
  await page.goto('https://app.larry-cctv.com/login');
  await page.getByPlaceholder('E-mail').click();
  await page.getByPlaceholder('E-mail').fill('superadmin@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('superadmin');
  await page.locator('i').click();
  await page.locator('i').click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: '' }).click();
  await page.getByText('Camera', { exact: true }).click();
  await page.getByRole('button', { name: ' Camera list' }).click();
  await page.getByRole('button', { name: ' Camera list' }).click();
  await page.getByRole('button', { name: ' Camera list' }).click();
});

