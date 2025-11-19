import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) =>
{
  await page.goto('http://localhost:4200/pages/forms/layouts')
  await page.getByText('Forms').click()
  await page.getByText('Form Layouts').click()

})

test('Inline Form', async({page}) =>{

    const nameInput = page.getByPlaceholder('Jane Doe');

     await nameInput.click();
     await nameInput.fill('John Smith')
   
     const emailInput = page.getByPlaceholder('Email').nth(0);

    await emailInput.click();
    await emailInput.type('jane@email.com')

    const checkbox = page.locator('.custom-checkbox').nth(0)
    await checkbox.click()
    await expect(checkbox).toHaveClass(/checked/)

    const submitButton = page.getByRole('button', { name: 'SUBMIT' }).nth(0)
    await submitButton.click()

})

test('Using Grid 1', async({page}) => {

    const emailInput = page.getByPlaceholder('Email').nth(1);

    await emailInput.click();
    await emailInput.type('jane@email.com')

   const passwordInput = page.locator('#inputPassword2');

    await passwordInput.click();
    await passwordInput.type('MySecretPassword123');

    await page.locator('nb-card nb-radio :text-is("Option 1")').click()
    await page.locator('nb-card').getByRole('button', {name: 'Sign In'}).first().click()

})

test('Basic Form', async({page}) => {

    const emailInput = page.getByPlaceholder('Email').nth(2);

    await emailInput.click();
    await emailInput.type('jane@email.com')

   const passwordInput = page.locator('#exampleInputPassword1');

    await passwordInput.click();
    await passwordInput.type('MySecretPassword123');

    const checkbox = page.locator('.custom-checkbox').nth(1)
    await checkbox.click()
    await expect(checkbox).toHaveClass(/checked/)

    const submitButton = page.getByRole('button', { name: 'SUBMIT' }).nth(1)
    await submitButton.click()

})

    


  
