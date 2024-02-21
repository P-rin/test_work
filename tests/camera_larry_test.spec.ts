import { test, expect, firefox } from '@playwright/test';
import { count } from 'console';
const {chromium} = require('playwright');

test('check camera', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://app.larry-cctv.com/login');
    await page.fill('xpath=/html/body/div/section/div/div/div[2]/div/div/div[2]/input','superadmin@gmail.com');
    await page.fill('xpath=/html/body/div/section/div/div/div[2]/div/div/div[3]/input1','superadmin');
    const data = await page.evaluate(async()=>{
        const csvData = await fetch('EX_camera.csv').then(res => res.text());
        const lines = csvData.split('\n');
        const headers = lines[0].split(',');
        const rows = lines.slice(1).map(line => line.split(','));
        return { headers, rows };
    });
    for (const rows of data.rows) {
        // กรอกข้อมูลลงในฟอร์ม
        await page.fill('#search', rows[2]);
        await page.click('//*[@id="__next"]/div/div[3]/div[1]/div[2]/div[1]/div[2]/div[1]/ul/li[1]')

    }
});