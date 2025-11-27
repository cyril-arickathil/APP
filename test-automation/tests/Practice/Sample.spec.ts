import {test} from '@playwright/test';


test.beforeEach(async ({ page}) => {
  await page.goto('http://localhost:4200/');
  await page.setViewportSize({width: 1900, height: 980});
  await page.waitForTimeout(3000); // Wait for 3 seconds
});
//test

test('Forms',async ({page}) =>
{    
    
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
    
    await page.waitForTimeout(3000); // Wait for another 3 seconds
    await page.getByRole('textbox', { name: 'Email'}).nth(0).fill('m.madhu1256@gmail.com');
    await page.getByRole('textbox', { name: 'Password'}).fill('Madhu@1256');
    await page.waitForTimeout(3000); // Wait for another 3 seconds
    await page.close(); // Close the specific page
}    
);

test('Charts',async ({page}) =>
{    
    
    await page.locator('a[title="Charts"]').click();
    await page.getByText('Echarts').click();
    
    await page.waitForTimeout(3000); // Wait for another 3 seconds
    await page.close(); // Close the specific page
}    
);