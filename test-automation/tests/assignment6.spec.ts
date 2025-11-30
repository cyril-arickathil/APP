import {test,expect} from '@playwright/test';

test.beforeEach(async ({page})=>    
{       
    await page.goto('http://localhost:4200/pages/datepicker')  
    await page.getByTitle('Forms').click()
    await page.getByText('Datepicker').click()
    await page.waitForTimeout(1000);
})

test('Select date in Common Datepicker',async ({page}) =>
{
    await page.getByPlaceholder('Form Picker').click();
    await page.waitForTimeout(2000)

    await page.getByText('Forms').click();
    await page.getByRole('link', { name: 'Datepicker' }).click();

    const calendarInput =  page.getByPlaceholder('Form Picker')

     await calendarInput.click()

  // Get future date 
    const date = new Date();
    date.setDate(date.getDate() + 2);


    const expectedDay = date.getDate().toString();
    const expectedMonth = date.toLocaleString('En-US', {month: 'short'})
    const expectedYear = date.getFullYear();

    const expectedFormattedDate = `${expectedMonth} ${expectedDay}, ${expectedYear}`;


    await page.locator('[class="day-cell ng-star-inserted"]').getByText(expectedDay, {exact: true}).click()

  
})







    
       



