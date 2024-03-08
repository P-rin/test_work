import { test, expect } from '@playwright/test';
import { count } from 'console';
const {chromium} = require('playwright');
const fs = require('fs');
const csvParser = require('csv-parser');
const filePath = 'C:\Users\Presale2\OneDrive\เดสก์ท็อป\test_work\tests\ex_camera.csv';
const parser = csvParser();

test('check camera', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
        await page.goto('https://app.larry-cctv.com/login');
        await page.getByPlaceholder('E-mail').dblclick();
        await page.getByPlaceholder('E-mail').fill('superadmin@gmail.com');
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('superadmin');
        await page.getByRole('button', { name: 'Login' }).click();
    //await page.fill('input#search','sh-pr-27');
    //อ่านไฟล์
    //     const data = await page.evaluate(async()=>{
    //     const csvData = await fetch('EX_camera.csv').then(res => res.text());
    //     const lines = csvData.split('\n');
    //     const headers = lines[0].split(',');
    //     const rows = lines.slice(1).map(line => line.split(','));
    //     return { headers, rows };
    // });
    

    fs.createReadStream(filePath).pipe(parser).on('data', (data) => {console.log(data);}).on('end', () => {
    console.log('Finished parsing CSV file');
  });



    for (const rows of data.rows) {
      await page.getByPlaceholder('Search by Device...').click();
      await page.getByPlaceholder('Search by Device...').fill(rows[2]);//กรอกข้อมูลลงในฟอร์ม
      await page.getByLabel('Map').click({position: {x: 599,y: 359}});
    }
});


export async function checkHttpStatus(page: Page, url: string, expectedStatuses: number[]) {
  const response = await page.request.get(url);
  expect(response.status());
}

test('api', async ({ page }) => {
  await checkHttpStatus(page, "https://www.example.com", [200, 302]);
});