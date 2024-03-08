import { test, expect } from '@playwright/test';
import { count } from 'console';
const {chromium} = require('playwright');
const csv = require('csv-parser');
const fs = require('fs');
test('check camera', async () => {
// Array to store the csv values.
var kpis : string[] = [];

kpis= fs.readFileSync('C:\Users\Presale2\OneDrive\เดสก์ท็อป\test_work\tests\ex_camera.csv')
  .toString() // convert Buffer to string
  .split('\n') // split string to lines
  .map(e => e.trim()) ; // remove white spaces for each line;

console.log("All Data:" + kpis);
console.log("First row:"+ kpis[1]);
});