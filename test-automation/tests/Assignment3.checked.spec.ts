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


