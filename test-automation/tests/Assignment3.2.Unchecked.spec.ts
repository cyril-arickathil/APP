//Unchecked:


import {test, expect} from '@playwright/test';
import { text } from 'stream/consumers';


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
