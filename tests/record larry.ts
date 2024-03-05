import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://cctv.naimueang.com:30800/');
  await page.goto('http://cctv.naimueang.com:30800/login');
  await page.getByPlaceholder('E-mail').click();
  await page.getByPlaceholder('E-mail').dblclick();
  await page.getByPlaceholder('E-mail').fill('superadmin@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('superadmin');
  await page.getByLabel('Map').click({
    position: {
      x: 409,
      y: 318
    }
  });
});

export async function checkHttpStatus(page: Page, url: string, expectedStatuses: number[]) {
  const response = await page.request.get(url);
  expect(response.status());
}

test('api', async ({ page }) => {
  
  await checkHttpStatus(page, "https://www.example.com", [200, 302]);
});