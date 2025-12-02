import {test} from '@playwright/test';
import { NavigationPage } from '../../pages/navigation.page';
import {locators} from '../../pages/util.page';

test.beforeEach(async ({ page}) => {
  await page.goto('http://localhost:4200/');
  await page.setViewportSize({width: 1900, height: 980});
  await page.waitForTimeout(3000); // Wait for 3 seconds
});
//test

test('navigating to form layout page',async ({page}) =>
{       

    const NavigateTo = new NavigationPage(page);
    await NavigateTo.formLayoutPage();

   const inlineFormLocator = new locators(page);
   await inlineFormLocator.inlineFormLocators('Madhu','Madhu@gmail.com');


    await page.waitForTimeout(3000);
    await page.close(); // Close the specific page
}    
);

test

