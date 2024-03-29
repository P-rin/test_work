import { test, expect } from '@playwright/test';
import { count } from 'console';
const {chromium} = require('playwright');
import { readFileSync } from 'fs';

async function readCsvFile(filePath: string): Promise<string[]> {
  const data = await readFileSync(filePath, 'utf-8');
  const rows = data.split('\n');
  return rows;
}

test('check camera', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
        await page.goto('https://app.larry-cctv.com/login');
        await page.getByPlaceholder('E-mail').dblclick();
        await page.getByPlaceholder('E-mail').fill('superadmin@gmail.com');
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('superadmin');
        await page.getByRole('button', { name: 'Login' }).click();

        const filePath = 'C:\Users\Presale2\OneDrive\เดสก์ท็อป\test_work\tests\ex_camera.csv';
        const data = await readCsvFile(filePath);console.log(data);
});