import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse';
import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

const cameraDataPath = path.join(__dirname, 'ex_camera.csv');

async function readCameraData() {
  try {
    const csvData = await fs.promises.readFile(cameraDataPath, 'utf-8');
    return parse(csvData, { columns: true, skip_empty_lines: true });
  } catch (error) {
    console.error('Error reading camera data:', error);
    throw error; // Re-throw to propagate to test runner
  }
}
describe('Camera Tests', async () => {
  const cameraData = await readCameraData();

  for await (const record of cameraData) {
        test(`Test Case: ${record.no}`, async ({ }) => {
            console.log(`Testing camera ${record.no}`);
            // Add your specific test assertions or actions here based on record data
            expect(record.field1).toBe('expected value'); // Example assertion
        });
    }
});