import {test,expect} from '@playwright/test';

test.beforeEach(async ({page})=>        
{
    await page.goto('http://localhost:4200/pages/iot-dashboard  ');
    await page.setViewportSize({width: 1900, height: 980}); 
    await page.locator('text=Forms').click();
    await page.getByText('Form Layouts').click();
    await page.waitForTimeout(3000);
});

test('Assignment3',async ({page}) =>
{
    const   InlineForm = page.locator('nb-card', {hasText:'Inline form'});
    await InlineForm.locator('input[placeholder="Jane Doe"]').fill('John Smith');
    await InlineForm.locator('input[placeholder="Email"]').fill('Madhu@gmail.com');

    // Checkbox are check and uncheck
    const Checkbox = InlineForm.locator('nb-checkbox');
    await Checkbox.click();
    await expect(Checkbox.locator('input')).toBeChecked();
    await Checkbox.click();
    await expect(Checkbox.locator('input')).not.toBeChecked();

});