import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) =>
{
  await page.goto('http://localhost:4200/')
  await page.getByText('Forms').click()
  await page.getByText('Form Layouts').click()

})

test('Locator syntaxes from pw', async({page}) =>
{
  //basic locator strategies
//by tag names
await page.locator('input').first().click()

//by ID #
await page.locator('#inputEmail1').click()

//by class . 
page.locator('.input-full-width')

//by attribute
page.locator('[type="email"]')
page.locator('[placeholder="Email"]')

//by class and its all values
page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition cdk-focused cdk-mouse-focused"]')


//by combine different selectors
page.locator('input[placeholder="Email"]')

//by xpath  --> pw does not recommend it at all
page.locator('//*[@id="inputEmail1"]')

//user-facing locator

//by partial text / text match

page.locator(':text-is("Using the Grid")')  // exact match of text

page.locator(':text("Using")')
})

test('user facing locators', async ({page}) =>
{
  await page.getByRole('textbox', {name : 'Email'}).nth(2).click()
  await page.getByRole('button', {name: 'Submit'}).click()
  //check box
  //text box
// <label>
  await page.getByLabel('Email').click()

  //placeholder="Email"
  await page.getByPlaceholder('Jane Doe').click()
// >Using the Grid<
  await page.getByText('Using the Grid').click()

  //title="Iot Dashboard"
  await page.getByTitle('IoT Dashboard').click()

  //recommended by pw testIdAttribute: 'data-pw'
  await page.getByTestId('SignIn').click();

})

test('locating child elements ', async ({page}) =>
{
  await page.locator('nb-card nb-radio :text-is("Option 1")').click()

  await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 1")').click();

 await page.locator('nb-card').getByRole('button', {name: 'Sign In'}).first().click()

await page.locator('nb-card').last().getByRole('button').click();
})

test('locating parent elements ', async ({page}) =>
{
  await page.locator('nb-card', {hasText: 'Using the Grid'})
  .getByRole('textbox', {name: 'Email'}).fill('yourEmail@gmail.com')

   await page.locator('nb-card', {has: page.locator('#inputEmail1')})
   .getByRole('textbox', {name: 'Email'}).fill('yourEmail@gmail.com')

   await page.locator('nb-card').filter({hasText: 'Inline form'}).click()


})

test('reusing locators elements ', async ({page}) =>
{
  const basicForm = page.locator('nb-card').filter({hasText: 'Basic form'})
  const emailField = basicForm.getByRole('textbox', {name: 'Email'});
  const passwordField = basicForm .getByRole('textbox', {name: 'Password'})
  const submitButton = basicForm.getByRole('button', {name: 'Submit'})
 
  await emailField.fill('email@gmail.com')
  await passwordField.fill('secretPassword')
  await submitButton.click()

  await expect(emailField).toHaveValue(/@/)

})

test('extracting values from elements ', async ({page}) =>
{
   const basicForm = page.locator('nb-card').filter({hasText: 'Basic form'})
   const buttonText = await basicForm.getByRole('button').textContent() //submit

   expect(buttonText).toEqual('Submit')

   //all text values 
   //string []
const allLabelnamesOfRadio =
   await page.locator('nb-radio').allTextContents() //3 elements  ['', '', '']

   expect(allLabelnamesOfRadio).toContain('Option 1')


   //example to find text of all links in a page
   const allLinksNames =
   await page.getByRole('link').allTextContents()

   expect(allLinksNames).toContain('Forms')
})




