import {test, expect} from '@playwright/test';
test.beforeEach(async ({page})=> {
    await page.goto('http://localhost:4200/');
    await page.setViewportSize({width: 1900, height: 980});

});

test.describe('form layout page', () => {
    test.beforeEach(async ({page})=> {
       await page.locator('text=Forms').click();
       await page.getByText('Form Layouts').click();  
    }); 
    test('infput field',async ({page}) => {
       
        const usinggridEmailInput = page.locator('nb-card', {hasText:'Using the Grid'}).getByRole('textbox', { name: 'Email' });

        await usinggridEmailInput.fill('emailtest.com');
        await usinggridEmailInput.clear();

})

  test('Radio button field',async ({page}) => {
       
        const usinggridForm = page.locator('nb-card', {hasText:'Using the Grid'});
        usinggridForm.getByLabel('Option 1').check({force:true});
        usinggridForm.getByRole('radio', { name: 'Option 2' }).isChecked

})

  test('CheckBox',async ({page}) => {
       
        const usinggridForm = page.locator('nb-card', {hasText:'Using the Grid'});
        usinggridForm.getByLabel('Check me out').check({force:true});
        usinggridForm.getByLabel('Check me out').isChecked

})


})