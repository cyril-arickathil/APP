import {test} from '@playwright/test';
import { NavigationPagee } from '../../pages/navigation.page';

test.beforeEach(async ({ page}) => {
  await page.goto('http://localhost:4200/');
  await page.setViewportSize({width: 1900, height: 980});
  await page.waitForTimeout(3000); // Wait for 3 seconds
});
//test

test('navigating to form layout page',async ({page}) =>
{       

    const NavigateTo = new NavigationPagee(page);
    await NavigateTo.formLayoutPage();
    
    await page.locator('nb-card form').getByPlaceholder('Jane Doe').fill("Madhu M");
    await page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByPlaceholder('Email').fill("Madhu@gmail.com");
    await page.waitForTimeout(3000);
    await page.close(); // Close the specific page
}    
);

