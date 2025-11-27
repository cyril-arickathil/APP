import {test, expect} from '@playwright/test';
import { text } from 'stream/consumers';


test.beforeEach(async ({page})=>{
await page.goto('http://localhost:4200/');
await page.getByTitle('Forms').click();
await page.getByTitle('Form Layouts').click();
}) 

test('Inline form', async ({page}) =>{
  const nbcardbody = page.locator('nb-card').locator('nb-card-body');
await page.locator('nb-card').getByPlaceholder('Jane Doe').fill('Kusuma');
await nbcardbody.getByPlaceholder('Email').first().fill('prasadula.kusuma@24gmail.com');
await nbcardbody.getByRole('checkbox' , {name : 'Remember me'}).first().check({force: true});
await nbcardbody.getByRole('button', {name : 'Submit'}).nth(0).click();
})

test('Using the grid', async ({page})=>{
  const nbcardbody = page.locator('nb-card').locator('nb-card-body');
const trueassert =  nbcardbody.locator('#inputEmail1')
await trueassert.fill('prasadula.kusuma@grwo.com');
await nbcardbody.locator('#inputPassword2').fill('Secret');
expect(trueassert).toHaveValue('prasadula.kusuma@grwo.com');
await nbcardbody.getByRole('radio', {name : 'Option 2'}).click({force : true});
})

test('Basic form' , async ({page})=>
{
const nbcardbody = page.locator('nb-card').locator('nb-card-body');
const checkbox1 = nbcardbody.getByRole('checkbox', {name : 'Check me out'})
await checkbox1.click({force : true});
expect(checkbox1).toBeChecked();
})
