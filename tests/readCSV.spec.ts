import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/.'; 
import { test, expect } from '@playwright/test';
import { count } from 'console';

const camera = parse(fs.readFileSync(path.join(__dirname,'ex_camera.csv')),{
    columns: true,
    skip_empty_lines: true
});

for(count record of camera ){ 
    test('Test Case: ${record.no'),async({})=>{
        console.log(record.no);
    })
}