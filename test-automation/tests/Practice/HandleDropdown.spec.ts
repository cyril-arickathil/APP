import {test,expect} from '@playwright/test';

test.beforeEach(async ({page})=>        
{
    await page.goto('http://localhost:4200/pages/forms/handling-dropdowns  ');
    await page.setViewportSize({width: 1900, height: 980}); 
    await page.waitForTimeout(3000);
});
test('HandleDropdown',async ({page}) =>
{
    const dropdown = page.locator('ngx-header nb-select');
    await dropdown.click();
    
    const options = page.getByRole('list').locator('nb-option');
    await expect(options).toHaveText(['Light','Dark','Cosmic','Corporate']);

    options.filter({hasText:'Dark'}).click();
    await expect(dropdown).toHaveText('Dark');

    //to check the theam selected

    const header = page.locator('nb-layout-header');
    await expect(header).toHaveCSS('background-color','rgb(34, 43, 69)');


const colors = {
    'Light': 'rgb(255, 255, 255)',
    'Dark': 'rgb(34, 43, 69)',
    'Cosmic': 'rgb(50, 50, 89)',
    'Corporate': 'rgb(255, 255, 255)'
};


for(const color in colors)
{
    await options.filter({hasText:color}).click();
    const header = page.locator('nb-layout-header');
    await expect(header).toHaveCSS('background-color',colors[color]);

    await dropdown.click();
}



});