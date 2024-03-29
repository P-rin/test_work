import { readFileSync } from 'fs';
import { Page } from 'playwright';

async function readCsvFile(page: Page, filePath: string): Promise<string[]> {
  const data = await page.evaluate(async (filePath) => {
    const fileContent = await readFileSync(filePath, 'utf-8');
    const rows = fileContent.split('\n');
    return rows;
  }, filePath);

  return data;
}

async function main() {
  const page = await playwright.chromium.launch().newPage();
  const filePath = '/path/to/your/local/csv/file.csv';
  const data = await readCsvFile(page, filePath);

  // ประมวลผลข้อมูล CSV ของคุณที่นี่

  console.log(data);

  await page.close();
}

main();
