import {test, expect} from '@playwright/test';

test.beforeEach(async ({page})=>        
{
    await page.goto('http://localhost:4200/');
    await page.setViewportSize({width: 1900, height: 980});
    await page.waitForTimeout(3000);
    await page.locator('text=Forms').click();
    await page.getByText('Form Layouts').click();
    await page.waitForTimeout(3000);
});

test('BasicForm',async ({page}) =>
{
    const UsingTheGrid = page.locator('nb-card', {hasText:'Using the Grid'});   

}); 