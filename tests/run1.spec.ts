import { test, expect, selectors } from '@playwright/test';
test.setTimeout(600000);
test('go to login page and login', async ({ page }) => {
    await page.goto('https://demoqa.com/login');   
    await page.fill('id=userName','prin');
    await page.fill('id=password','Prinqaqa1!');
    await page.click('id=login');
    await page.waitForSelector('id=submit');
    const username = await page.$eval('#userName-value', (element) => element.textContent);
    //console.log(username);
    await expect(username).toEqual('Prin');
  });
  
  test('submit textbox', async ({ page }) => {
    await page.goto('https://demoqa.com/login');   
    await page.fill('id=userName','prin');
    await page.fill('id=password','Prinqaqa1!');
    await page.click('id=login');
    await page.waitForSelector('id=submit');
    await page.click('div.header-wrapper');
    await page.click('//*[@id="item-0"]') //ระบุlocaterแบบ xpath
    //await page.click('id=item-0'); //ระบุlocaterแบบcss
    await page.fill('id=userName','prin chansin');
    await page.fill('id=userEmail','actprin@gmail.com');
    await page.fill('id=currentAddress','somewere');
    await page.fill('id=permanentAddress','someone');
    await page.click('id=submit');
    await page.waitForSelector('div.border.col-md-12.col-sm-12');
  });

  test('check box home and dropdown home-desktop', async ({ page }) => {
    await page.goto('https://demoqa.com/login');   
    await page.fill('id=userName','prin');
    await page.fill('id=password','Prinqaqa1!');
    await page.click('id=login');
    await page.waitForSelector('id=submit');
    await page.click('div.header-wrapper');
    await page.click('//*[@id="item-1"]') //ระบุlocaterแบบ xpath
    //await page.click('id=item-1'); //ระบุlocaterแบบcss
    await page.waitForSelector('//*[@id="tree-node"]/ol/li/span/label');
    await page.click('//*[@id="tree-node"]/ol/li/span/label/span[1]');
    const homeresult = ['//*[@id="result"]/span[2]','//*[@id="result"]/span[3]','//*[@id="result"]/span[4]','//*[@id="result"]/span[5]'];
    await Promise.all(
      homeresult.map(selector => page.waitForSelector(selector))
    );
    await page.click('//*[@id="tree-node"]/ol/li/span/button');
    const homedropdown = ['//*[@id="tree-node"]/ol/li/ol/li[1]','//*[@id="tree-node"]/ol/li/ol/li[2]','//*[@id="tree-node"]/ol/li/ol/li[3]'];
    await Promise.all(
      homedropdown.map(selector => page.waitForSelector(selector))
    );
    await page.click('//*[@id="tree-node"]/ol/li/ol/li[1]/span/button');
    const desktopdropdown = ['//*[@id="tree-node"]/ol/li/ol/li[1]/ol/li[1]','//*[@id="tree-node"]/ol/li/ol/li[1]/ol/li[2]'];
    await Promise.all(
      desktopdropdown.map(selector => page.waitForSelector(selector))
    );
  });

  test('check box home and dropdown home-document', async ({ page }) => {
    await page.goto('https://demoqa.com/login');   
    await page.fill('id=userName','prin');
    await page.fill('id=password','Prinqaqa1!');
    await page.click('id=login');
    await page.waitForSelector('id=submit');
    await page.click('div.header-wrapper');
    await page.click('//*[@id="item-1"]') //ระบุlocaterแบบ xpath
    await page.waitForSelector('//*[@id="tree-node"]/ol/li/span/label');
    await page.click('//*[@id="tree-node"]/ol/li/span/label/span[1]');
    const homeresult = ['//*[@id="result"]/span[2]','//*[@id="result"]/span[3]','//*[@id="result"]/span[4]','//*[@id="result"]/span[5]'];
    await Promise.all(
      homeresult.map(selector => page.waitForSelector(selector))
    );
    await page.click('//*[@id="tree-node"]/ol/li/span/button');
    const homedropdown = ['//*[@id="tree-node"]/ol/li/ol/li[1]','//*[@id="tree-node"]/ol/li/ol/li[2]','//*[@id="tree-node"]/ol/li/ol/li[3]'];
    await Promise.all(
      homedropdown.map(selector => page.waitForSelector(selector))
    );
    await page.click('//*[@id="tree-node"]/ol/li/ol/li[2]/span/button');
    const documentdropdown = ['//*[@id="tree-node"]/ol/li/ol/li[2]/ol/li[1]','//*[@id="tree-node"]/ol/li/ol/li[2]/ol/li[2]'];
    await Promise.all(
      documentdropdown.map(selector => page.waitForSelector(selector))
    );
  });

  test('check box home and dropdown home-download', async ({ page }) => {
    await page.goto('https://demoqa.com/login');   
    await page.fill('id=userName','prin');
    await page.fill('id=password','Prinqaqa1!');
    await page.click('id=login');
    await page.waitForSelector('id=submit');
    await page.click('div.header-wrapper');
    await page.click('//*[@id="item-1"]') //ระบุlocaterแบบ xpath
    await page.waitForSelector('//*[@id="tree-node"]/ol/li/span/label');
    await page.click('//*[@id="tree-node"]/ol/li/span/label/span[1]');
    const homeresult = ['//*[@id="result"]/span[2]','//*[@id="result"]/span[3]','//*[@id="result"]/span[4]','//*[@id="result"]/span[5]'];
    await Promise.all(
      homeresult.map(selector => page.waitForSelector(selector))
    );
    await page.click('//*[@id="tree-node"]/ol/li/span/button');
    const homedropdown = ['//*[@id="tree-node"]/ol/li/ol/li[1]','//*[@id="tree-node"]/ol/li/ol/li[2]','//*[@id="tree-node"]/ol/li/ol/li[3]'];
    await Promise.all(
      homedropdown.map(selector => page.waitForSelector(selector))
    );
    await page.click('//*[@id="tree-node"]/ol/li/ol/li[3]/span/button');
    const dowloaddropdown = ['//*[@id="tree-node"]/ol/li/ol/li[3]/ol/li[1]','//*[@id="tree-node"]/ol/li/ol/li[3]/ol/li[2]'];
    //*[@id="tree-node"]/ol/li/ol/li[3]/ol/li[2]
    await Promise.all(
      dowloaddropdown.map(selector => page.waitForSelector(selector))
    );
  });

  test('radio button-yes', async ({ page }) => {
    await page.goto('https://demoqa.com/login');   
    await page.fill('id=userName','prin');
    await page.fill('id=password','Prinqaqa1!');
    await page.click('id=login');
    await page.waitForSelector('id=submit');
    await page.click('div.header-wrapper');
    await page.click('//*[@id="item-2"]') //ระบุlocaterแบบ xpath
    await page.click('//*[@id="yesRadio"]')
    const status = await page.$eval('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/p/span', (element) => element.textContent);
    await expect(status).toEqual('yes');
  });

  test('radio button-Impressive', async ({ page }) => {
    await page.goto('https://demoqa.com/login');   
    await page.fill('id=userName','prin');
    await page.fill('id=password','Prinqaqa1!');
    await page.click('id=login');
    await page.waitForSelector('id=submit');
    await page.click('div.header-wrapper');
    await page.click('//*[@id="item-2"]') //ระบุlocaterแบบ xpath
    await page.click('//*[@id="impressiveRadio"]')
    const status = await page.$eval('//*[@id="app"]/div/div/div[2]/div[2]/div[2]/p/span', (element) => element.textContent);
    await expect(status).toEqual('Impressive');
  });