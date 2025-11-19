import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) =>
{
  await page.goto('http://localhost:4200/')
 

})

test.describe('form layouts page', () =>
{
  test.beforeEach( async ({page}) =>
  {
     await page.getByText('Forms').click()
  await page.getByText('Form Layouts').click()

  })
  test('input field', async ({page}) =>
  {
    const usingGridEmailInput =
    page.locator('nb-card', {hasText: "Using the Grid"})
    .getByRole('textbox', {name: 'Email'})

    await usingGridEmailInput.fill('email@test.com')
    await usingGridEmailInput.clear()


  })

  test('radio button field', async ({page}) =>
  {
    const usingGridForm =
    page.locator('nb-card', {hasText: "Using the Grid"})
 
    await usingGridForm.getByLabel('Option 1').check({force: true})

    await usingGridForm.getByRole('radio', {name: 'Option 1'}).isChecked()


  })

  test('checkboxes field', async({page}) =>
  {
    await page.getByText('Modal & Overlays').click()
  await page.getByText('Toastr').click()

  await page.getByRole('checkbox', {name: 'Hide on click'}).uncheck({force:true})
  })


})

