import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) =>
{
  await page.goto('http://localhost:4200/pages/modal-overlays/toastr')


})

test('Checkboxes should be unchecked', async({page}) =>{

    const hideOnClick = page.locator('.custom-checkbox').nth(0);
    await hideOnClick.uncheck({force : true})
    await expect(hideOnClick).not.toBeChecked()

    const showToastWithIcon = page.locator('.custom-checkbox').nth(2);
    await showToastWithIcon.uncheck({force : true})
    await expect(showToastWithIcon).not.toBeChecked()
})

test('Checkboxes should be checked', async({page}) =>{
      const checkbox1 = page.locator('.custom-checkbox').nth(0)
      await checkbox1.check({force : true})

    // Assert: box now has the "checked" class
      await expect(checkbox1).toHaveClass(/checked/);

      const PreventArisingOfDuplicateToast = page.locator('.custom-checkbox').nth(1);
      await PreventArisingOfDuplicateToast.check({force : true})
      await expect (PreventArisingOfDuplicateToast).toBeChecked()

      const showToastWithIcon = page.locator('.custom-checkbox').nth(2);
      await showToastWithIcon.check({force : true})
      await expect(showToastWithIcon).toBeChecked()
})



  

     


     


     

    
  



    



