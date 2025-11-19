import {test, expect} from '@playwright/test';

test.beforeEach(async ({page})=>      
{
    await page.goto('http://localhost:4200/');
    await page.setViewportSize({width: 1900, height: 980});
    await page.waitForTimeout(3000); // Wait for 3 seconds
    await page.locator('text=Forms').click();
    await page.getByText('Form Layouts').click();   
    await page.waitForTimeout(3000);

}); 

test('Inlineform',async ({page}) =>
{
    const UsingTheGrid = page.locator('nb-card', {hasText:'Using the Grid'});
     
    await UsingTheGrid.getByRole('textbox',{name:'Email'}).fill('Madhu@gmail.com');
    await UsingTheGrid.locator('#inputPassword2').fill('madhu123');

    //Radio Button
    await UsingTheGrid.getByLabel('Option 1').click();
    await UsingTheGrid.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForTimeout(3000); // Wait for another 3 seconds

});

test.afterEach(async ({page}) =>
{
    await page.close();
} );  