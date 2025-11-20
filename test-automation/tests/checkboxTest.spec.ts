// 1. **Write test cases** handling checkboxes
//    - to verify all checkboxes are checked.
//    - to verify all checkboxes are unchecked.

// 2. **Assertion**
//    - use generic asertions to verify
//    - use locator based assertions to verify checkboxes are unchecked

import{test,expect, Locator} from "@playwright/test"
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
   test('Check on formlayout', async ({page}) =>
  {
    //const checkboxs = page.locator('span.custom-checkbox')
     const checkboxes = await page.locator('input[type="checkbox"]').all();
   // Iterate through each checkbox and check it
  for (const checkbox of checkboxes) {
    // Check the checkbox if it's not already checked
    if (!(await checkbox.isChecked())) {
      await checkbox.check({force: true})
    }
  
await expect(checkbox).toBeChecked();
  }
   


  })
  test('checkboxes field on toaster', async({page}) =>
  {
    await page.getByText('Modal & Overlays').click()
  await page.getByText('Toastr').click()

 const checkboxes = await page.locator('input[type="checkbox"]').all();
for (const checkbox of checkboxes) {
    // Check the checkbox if it's not already checked
    if (!(await checkbox.isChecked())) {
      await checkbox.check({force: true})
    }
    
  
await expect(checkbox).toBeChecked();
  }

  })
})



