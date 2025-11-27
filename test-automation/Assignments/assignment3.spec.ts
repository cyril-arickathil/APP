//1st way
import {test, expect} from '@playwright/test';
import { text } from 'stream/consumers';


test.beforeEach(async ({page})=>{
await page.goto('http://localhost:4200/');
await page.getByTitle('Forms').click();
await page.getByTitle('Form Layouts').click();
}) 

test('checked boxes', async ({page}) => {
const nbcardbody = page.locator('nb-card').locator('nb-card-body');

const checkboxA1 = await nbcardbody.getByRole('checkbox' , {name : 'Remember me'})
await checkboxA1.first().check({force: true});

const checkboxA2 = await nbcardbody.getByRole('checkbox', {name : 'Check me out'})
await checkboxA2.click({force : true});

const checkboxA3 = await nbcardbody.getByRole('checkbox',{name : 'Remember me'})
await checkboxA3.nth(1).check({force : true});

 expect(checkboxA1).toBeChecked();
 expect(checkboxA2).toBeChecked();
 expect(checkboxA3.nth(1)).toBeChecked();
})


//2nd way - form filtering




test.beforeEach(async ({page})=>{
await page.goto('http://localhost:4200/');
await page.getByTitle('Forms').click();
await page.getByTitle('Form Layouts').click();
}) 

test('formcheckboxes ', async ({page})=> {

const basicform = await page.locator('nb-card' ,  {hasText : 'Basic form' });
const Horizontalform = await page.locator('nb-card' ,  {hasText : 'Horizontal form' });
const Inlineform = await page.locator('nb-card' ,  {hasText : 'Inline form' });

const checkbox1 = basicform.getByRole('checkbox', {name : 'Check me out'});
await checkbox1.click({force : true});

const checkbox2 = Horizontalform.getByRole('checkbox' , {name :'Remember me'});
await checkbox2.click({force : true});

const checkbox3 = Inlineform.getByRole('checkbox', {name : 'Remember me'});
await checkbox3.click({force : true});

expect(checkbox1).toBeChecked();
expect(checkbox2).toBeChecked();
expect(checkbox3).toBeChecked();
}
)


//Unchecked:



test.beforeEach(async ({page})=>{
await page.goto('http://localhost:4200/');
await page.getByTitle('Forms').click();
await page.getByTitle('Form Layouts').click();
}) 

test('form-uncheckboxes ', async ({page})=> {

const basicform = await page.locator('nb-card' ,  {hasText : 'Basic form' });
const Horizontalform = await page.locator('nb-card' ,  {hasText : 'Horizontal form' });
const Inlineform = await page.locator('nb-card' ,  {hasText : 'Inline form' });

const checkbox1 = basicform.getByRole('checkbox', {name : 'Check me out'});
const checkbox2 = Horizontalform.getByRole('checkbox' , {name :'Remember me'});
const checkbox3 = Inlineform.getByRole('checkbox', {name : 'Remember me'});
expect(checkbox1).not.toBeChecked();
expect(checkbox2).not.toBeChecked();
expect(checkbox3).not.toBeChecked();
})

