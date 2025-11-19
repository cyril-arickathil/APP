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
    const inlineForm = page.locator('nb-card', {hasText:'Inline form'});
    const checkbox = page.locator('nb-checkbox', {hasText:'Remember me'});

    //await basicForm.getByRole('textbox', { name: 'Email' }).fill('m.madhu125@gmail.com');
    
    await inlineForm.getByRole('textbox',{name:'Jane Doe'}).fill('Madhu');
    await inlineForm.getByRole('textbox',{name:'Email'}).fill('m.madhu@gamil.com');
    //await inlineForm.getByLabel('nb-checkbox', {}).click();
    await checkbox.first().click();
    await inlineForm.getByRole('button', { name: 'SUBMIT' }).click();
    await page.waitForTimeout(3000); // Wait for another 3 seconds
});

test.afterEach(async ({page}) =>
{
    await page.close();
} );  