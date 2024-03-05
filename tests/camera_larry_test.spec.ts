import { test, expect } from '@playwright/test';
import { count } from 'console';
const {chromium} = require('playwright');

test('check camera', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://app.larry-cctv.com/login');
        await page.getByPlaceholder('E-mail').dblclick();
        await page.getByPlaceholder('E-mail').fill('superadmin@gmail.com');
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill('superadmin');
    await page.click('#__next > section > div > div > div.px-0.background-left.col-lg-5 > div > div > button');
    //await page.fill('input#search','sh-pr-27');
    //อ่านไฟล์
    const data = await page.evaluate(async()=>{
        const csvData = await fetch('EX_camera.csv').then(res => res.text());
        const lines = csvData.split('\n');
        const headers = lines[0].split(',');
        const rows = lines.slice(1).map(line => line.split(','));
        return { headers, rows };
    });
    for (const rows of data.rows) {
        
        await page.getByLabel('Map').click({
    position: {
      x: 409,
      y: 318
    }
  });
        //กรอกข้อมูลลงในฟอร์ม
        await page.fill('#search', rows[2]);
        // เลือก element ที่เป็น `li` ตัวแรก
        const firstOptionElement = document.querySelector('ul.search-suggestion-list li:first-child');
        // คลิกที่ element
        firstOptionElement.click();
        //เปิดlivesteam
    }
});


export async function checkHttpStatus(page: Page, url: string, expectedStatuses: number[]) {
  const response = await page.request.get(url);
  expect(response.status());
}

test('api', async ({ page }) => {
  await checkHttpStatus(page, "https://www.example.com", [200, 302]);
});