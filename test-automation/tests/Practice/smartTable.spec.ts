import {test, expect} from '@playwright/test';
test.beforeEach(async ({page})=>
{       
    await page.goto('http://localhost:4200/pages/iot-dashboard');
    await page.setViewportSize({width: 1900, height: 980}); 
    await page.getByText('Tables & Data').click()
     await page.getByText('Smart Table').click()
   await page.waitForTimeout(3000);
});



test('deleteRecordinTable',async ({page}) =>
{
    page.on('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        expect(dialog.message()).toBe('Are you sure you want to delete?');
         await page.waitForTimeout(3000);
        await dialog.dismiss();
    });
    
    // await page.click('tbody tr:has-text("@mdo") >>
    //await page.getByRole('table').locator('tr', {hasText: '@fat'}).locator('.nb-trash').click();
   
    
    await page.getByRole('table').locator('tr').filter({ hasText: '@fat' }).locator('.nb-trash').click({ timeout: 10000 });




});




test('createFilterAgeData',async ({page}) =>
{
    //await basicForm.getByRole('textbox', { name: 'Email' }).fill('m.madhu125@gmail.com');
    await page.getByRole('table').locator('tr').getByPlaceholder('Age').fill('20');
    await page.waitForTimeout(3000);

    const noofRowsforAge = await page.getByRole('table').locator('tr').filter({hasText:'20'}).count();
    console.log('No of rows for age 20:',noofRowsforAge);

    //print all the rows data for age 20
    for(let i=0;i<noofRowsforAge;i++)
    {
        //const rowData = await page.getByRole('table').locator('tr').filter({hasText:'20'}).nth(i).textContent();
        const Username = await page.getByRole('table').locator('tr').filter({hasText:'20'}).nth(i).locator('td').nth(4).textContent();
        const Email = await page.getByRole('table').locator('tr').filter({hasText:'20'}).nth(i).locator('td').nth(5).textContent();
        console.log("Username : "+Username + " Email : "+Email);

        //get username column data alone
        //const Username = await page.getByRole('table').locator('tr').filter({hasText:'20'}).nth(i).locator('td').nth(1).textContent();


    }


});



test.afterEach(async ({page})=>
{
    page.close();
});