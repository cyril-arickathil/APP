import {test} from '@playwright/test';

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

page.locator(':text-is("Using the Grid")')  // exact mact of text

page.locator(':text("Using")')
})

test('user facing locators', async ({page}) =>
{
  await page.getByRole('textbox', {name : 'Email'}).nth(2).click()
  await page.getByRole('button', {name: 'Submit'}).click()
  //check box
  //text box

  await page.getByLabel('Email').click()

  await page.getByPlaceholder('Jane Doe').click()

  await page.getByText('Using the Grid').click()

  await page.getByTitle('IoT Dashboard').click()

  //recommended by pw
  await page.getByTestId('SignIn').click();

})




