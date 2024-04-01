import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse';

async function readCSV() {
    try {
        const csvData = await fs.promises.readFile(path.join(__dirname, 'ex_camera.csv'));
        const camera = parse(csvData, { columns: true, skip_empty_lines: true });
        
        for await (const record of camera) {
        console.log(record);
      }
    } catch (error) {
        console.error('Error reading CSV:', error);
    }
}

readCSV();
