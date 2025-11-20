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
await page.getByRole('checkbox', {name: 'Prevent arising of duplicate toast'}).check({force:true})

//test whether all checkboxes are checked 
const all_checkBox =
page.getByRole('checkbox')  //3 elements

for(const box of await all_checkBox.all())
{
    await box.uncheck({force: true})
    expect(await box.isChecked()).toBeFalsy()
}
  })

test('handle dropdowns', async ({page}) =>
{
  const dropMenu = page.locator('ngx-header nb-select')
  await dropMenu.click();

// <ul>
// <li>
// <li>
// </ul>
//page.getByRole('list').getByRole('listitem')

const optionList = page.getByRole('list').locator('nb-option')

await expect(optionList).toHaveText(["Light", "Dark", "Cosmic", "Corporate"])

await optionList.filter({hasText: 'Cosmic'}).click()

const header = page.locator('nb-layout-header')

expect(header).toHaveCSS('background-color', 'rgb(50, 50, 89)')

await dropMenu.click();

const colors =
{
  "Light": "rgb(255, 255, 255)" ,
  "Dark":  "rgb(21, 26, 48)",
  "Cosmic": "rgb(50, 50, 89)",
  "Corporate": "rgb(255, 255, 255)" 
}
//colors['Light'] // 
await dropMenu.click();
for(const color in colors)
{
  await optionList.filter({hasText: color}).click()
  const header = page.locator('nb-layout-header')

expect(header).toHaveCSS('background-color', colors[color])
await dropMenu.click()

}

//nb-tooltip

})




})

