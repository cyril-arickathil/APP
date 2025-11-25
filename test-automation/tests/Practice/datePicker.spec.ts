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
    expect(selectedDate).toEqual('Nov 15, 2025');

});


test('dateSelect1Jan2026',async ({page}) =>
{
     
    await page.getByPlaceholder('Form Picker').click();
    await page.waitForTimeout(2000);

    //select date 1st Jan 2026
    const selectedDate = 'Jan 1, 2026';
    console.log('Selected Date is : '+selectedDate);
    //const Date = await page.locator('nb-calendar-day-cell').filter({hasText:'15'});
    const Date = await page.locator('nb-calendar-day-cell').getByText('1',{exact:true});
    await page.waitForTimeout(1000);

    //click next month twice to reach Jan 2026
    for(let i=0;i<2;i++)
    {
        //await page.locator('nb-calendar-pageable-navigation button').locator('.next-month appearance-ghost size-medium shape-rectangle icon-start icon-end status-basic nb-transition').click();
        await page.locator('nb-calendar-pageable-navigation button').nth(1).click();
      
        //await page.locator('button[aria-label="Next month"]').click();
        await page.waitForTimeout(1000);
    }
    await Date.click();
    await page.waitForTimeout(1000);
    //verify the selected date
    const dateValue = await page.getByPlaceholder('Form Picker').inputValue();
    console.log('Selected Date is : '+dateValue);
    expect(dateValue).toEqual(selectedDate);
    

});

//date class - 
let date = new Date();
console.log("Today Date: "+date);
date.setDate(date.getDate()+1);
const tomorrowDate = date.getDate().toString();
const expectedMonth = date.toLocaleString('En-US',{month:'short'});
const expectedYear = date.getFullYear().toString();

const dateConcat = expectedMonth + ' ' + tomorrowDate + ', ' + expectedYear;

test('dateSelectTomorrow',async ({page}) =>
{
     
    await page.getByPlaceholder('Form Picker').click();
    await page.waitForTimeout(2000);

    const Date = await page.locator('nb-calendar-day-cell').getByText(tomorrowDate,{exact:true});
    Date.click();
    await page.waitForTimeout(1000);

    //verify the selected date
    const selectedDate = await page.getByPlaceholder('Form Picker').inputValue();
    console.log('Selected Date is : '+selectedDate);
    expect(selectedDate).toEqual(dateConcat);



});





test.afterEach(async ({page})=>
{
    page.close();
});