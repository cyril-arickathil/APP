import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) =>
{
  await page.goto('http://localhost:4200/pages/tables/smart-table')


})

test('User can edit a row in the Smart Table', async({page}) =>{

    await page.getByRole('table').locator('tr', {hasText: '@mdo'})
   .locator('.nb-edit').click()
     
    const idInput = page.getByPlaceholder('ID').nth(1)
     await idInput.fill('2')

     const firstNameInput = page.getByPlaceholder('First Name').nth(1);
     const lastNameInput = page.getByPlaceholder('Last Name').nth(1)
     const userNameInput = page.getByPlaceholder('Username').nth(1)
     const userEmailInput = page.getByPlaceholder('E-mail').nth(1)
     const userAgeInput = page.getByPlaceholder('Age').nth(1)

     await firstNameInput.fill('TestFirst');
     await lastNameInput.fill('TestLast');
     await userNameInput.fill('@Test')
     await userEmailInput.fill('@test.com')
     await userAgeInput.fill('30')

      // Verify updated values in the row
     await expect(firstNameInput).toHaveValue('TestFirst');
     await expect(lastNameInput).toHaveValue('TestLast');
     await expect(userNameInput).toHaveValue('@Test');
})


test('Test for loop edit', async ({ page }) => {
  
  const row = page.getByRole('table').locator('tr', { hasText: '@mdo' });
  await row.locator('.nb-edit').click();

  // Input placeholders and replacement values
  const fields = [
    { placeholder: 'ID', value: '2' },
    { placeholder: 'First Name', value: 'Jack' },
    { placeholder: 'Last Name', value: 'Smith' },
    { placeholder: 'Username', value: '@Test' },
    { placeholder: 'E-mail', value: '@forloop.com' },
    { placeholder: 'Age', value: '35' }
  ];

  // Loop through inputs
  for (const field of fields) {
    const input = page.getByPlaceholder(field.placeholder).nth(1);
    await input.fill(field.value);
  }
})

test('Filter by Username and verify results', async ({ page }) => {

  // Type @jack into Username filter
  await page.getByPlaceholder('Username').fill('@jack');

  const rows = page.locator('tbody tr');
  await expect(rows).toHaveCount(1);

   // Verify the output
  const usernameCell = rows.nth(0).locator('td').nth(4);
  await expect(usernameCell).toHaveText('@jack');
})





 
