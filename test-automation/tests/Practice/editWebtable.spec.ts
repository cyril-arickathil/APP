import {test, expect} from '@playwright/test';
test.beforeEach(async ({page})=>
{       
    await page.goto('http://localhost:4200/pages/iot-dashboard');
    await page.setViewportSize({width: 1900, height: 980}); 
    await page.getByText('Tables & Data').click()
     await page.getByText('Smart Table').click()
   await page.waitForTimeout(3000);
});

test('editRecordinTable',async ({page}) =>
{
   
    //locate a row

    const tableRow = page.getByRole('row', {name: '@snow'});

    //click edit icon
    await tableRow.locator('.nb-edit').click();

    //update the firstname and lastname field
    await page.locator('input-editor').getByPlaceholder('First Name').fill('Madhu');
    await page.locator('input-editor').getByPlaceholder('Last Name').fill('Heyansh');
    
    await page.locator('.nb-checkmark').click()
    await page.waitForTimeout(3000);

    //verify the updated data
    const updatedRow = page.getByRole('row', {name: 'Madhu Heyansh @snow'});
    expect(updatedRow).toBeDefined();


    await page.getByRole('table').locator('tr').filter({ hasText: '@fat' }).locator('.nb-trash').click({ timeout: 10000 }); 

});


test.afterEach(async ({page})=>
{
    page.close();
});