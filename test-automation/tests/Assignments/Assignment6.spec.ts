import {test,expect} from '@playwright/test';

test.beforeEach(async ({page})=>    
{       
    await page.goto('http://localhost:4200/pages/datepicker');
    await page.setViewportSize({width: 1900, height: 980});  
    await page.getByTitle('Forms').click();
    await page.getByText('Datepicker').click();
    await page.waitForTimeout(1000);
});
test('datePickerTest',async ({page}) =>
{
     
    await page.getByPlaceholder('Form Picker').click();
    await page.waitForTimeout(2000);

    //select the date 15th
    await page.locator('nb-calendar-day-cell').filter({hasText:'15'}).click();
    await page.waitForTimeout(1000);

    //verify the selected date
    const selectedDate = await page.getByPlaceholder('Form Picker').inputValue();
    console.log('Selected Date is : '+selectedDate);
    expect(selectedDate).toEqual('06/15/2024');




});

test.afterEach(async ({page})=>
{
    page.close();
});