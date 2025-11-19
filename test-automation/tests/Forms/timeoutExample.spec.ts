import {test, expect} from '@playwright/test';

test.beforeEach(async ({page})=>        
{
    await page.goto('https://www.uitestingplayground.com/ajax');
    await page.setViewportSize({width: 1900, height: 980}); 
    await page.getByRole('button', { name: 'Button Triggering AJAX Request' }).click();
});

test('timeout',async ({page}) =>
{
    const successButton = page.locator('.bg-success');

    //verify the success confirmation message
    await expect(page.locator('.bg-success')).toHaveText('Data loaded with AJAX get request.');

    const successmessage = await successButton.textContent();
   expect(successmessage).toEqual('Data loaded with AJAX get request.');

   //verify dom content
   await successButton.waitFor({state:'attached'});

});

test('timeout - alternate condition',async ({page}) =>
{
    const successButton = page.locator('.bg-success');
    
    await page.waitForSelector('.bg-success'); // Wait for the success message to appear

     
    //verify the success confirmation message
    await expect(page.locator('.bg-success')).toHaveText('Data loaded with AJAX get request.');


     // wait for the response and statuscode to be 304

    await page.waitForResponse('https://www.uitestingplayground.com/ajaxdata')
    await page.waitForLoadState('networkidle');// Ensure all network activity is complete

    const successmessage = await successButton.textContent();
   expect(successmessage).toEqual('Data loaded with AJAX get request.');

   //verify dom content
   await successButton.waitFor({state:'attached'});

});







test.afterEach(async ({page}) =>
{
    await page.close();
} );