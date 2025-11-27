//2nd way - form filtering

import {test, expect} from '@playwright/test';
import { text } from 'stream/consumers';


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

