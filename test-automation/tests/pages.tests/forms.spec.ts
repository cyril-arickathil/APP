import {test} from '@playwright/test';
import { NavigationPage } from '../../pages/navigation.page';
import {locators} from '../../pages/util.page';


test.beforeEach(async ({ page}) => {
    await page.goto('http://localhost:4200/');
    await page.setViewportSize({width: 1900, height: 980});
    await page.waitForTimeout(3000); // Wait for 3 seconds
});



test('form Layout page Inline Form',async ({page}) =>
{    
    const NavigateTo = new NavigationPage(page);
    await NavigateTo.formLayoutPage();

   const inlineFormLocator = new locators(page);
   await inlineFormLocator.inlineFormLocators('Madhu','Madhu@gmail.com');
    await page.waitForTimeout(3000);
    //checkbox handle
        await page.locator('nb-checkbox').locator('.status-basic nb-transition').nth(0).click({force: true});
        await page.waitForTimeout(3000);
    await page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByRole('button').click();


});

test('UsingtheGridForm', async ({ page }) => {

    const NavigateTo = new NavigationPage(page);
    await NavigateTo.formLayoutPage();

   const  UsingGridFormLocators = new locators(page);
  //  await UsingGridFormLocators.UsingGridFormLocators('Madhu@gmail.ocm','Madhu12345');  

  await page.locator('#inputEmail1').fill('Madhu@gmail.ocm');
  await page.locator('#inputPassword2').fill('Madhu12345');
  //await page.locator('nb-radio').locator('.inner-circle').filter({ hasText: 'Option 1' }).getByRole('radio').click();
  await page.locator('.inner-circle').first().click();

  await page.locator('nb-card').filter({ hasText: 'Using the' }).getByRole('button').click();
  await page.waitForTimeout(3000);
});

test.afterEach(async ({page}) =>
{
    await page.close();
});