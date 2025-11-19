import {test, expect} from '@playwright/test';

test.beforeEach(async ({page})=>
{
    await page.goto('http://localhost:4200/');
    await page.setViewportSize({width: 1900, height: 980});
    await page.waitForTimeout(3000); // Wait for 3 seconds
        await page.locator('text=Forms').click();
    await page.getByText('Form Layouts').click();   
    await page.waitForTimeout(3000);
}
);

test('Forms',async ({page}) =>
{
    await page.locator('text=Forms').click();
    await page.getByText('Form Layouts').click();   
    await page.waitForTimeout(3000);
    await page.locator('nb-card-header', {hasText:'inline form'}).getByPlaceholder('Jane Doe').fill('Madhu');
    await page.getByPlaceholder('Email').nth(0).fill('m.madhu1256@gmail.com');
    await page.locator('.custom-checkbox').first().click();
    await page.getByText('SBUBMIT').first().click();

    await page.waitForTimeout(3000); // Wait for another 3 seconds
}
);

test.afterEach(async ({page}) =>
{
    await page.close();
}
);


test('reusing locators',async ({page}) =>
{
    const basicForm = page.locator('nb-card', {hasText:'Basic form'});
    await basicForm.getByRole('textbox', { name: 'Email' }).fill('m.madhu125@gmail.com');
    await basicForm.getByRole('textbox', { name: 'Password' }).fill('Madhu@1256');
    await basicForm.getByRole('button', { name: 'SUBMIT' }).click();
}
)

test('expect locators',async ({page}) =>
{
    const basicForm = page.locator('nb-card', {hasText:'Basic form'});
    const emailfied = basicForm.getByRole('textbox', { name: 'Email' });
    const passwordfied = basicForm.getByRole('textbox', { name: 'Password' });  
    const submitbtn = basicForm.getByRole('button', { name: 'SUBMIT' });


    await emailfied.fill('m.madhu125@gmail.com');
    await expect(emailfied).toHaveValue('m.madhu1256@gamail.com');
    await basicForm.getByRole('textbox', { name: 'Password' }).fill('Madhu@1256');
    const ButtonName = await basicForm.getByRole('button', { name: 'SUBMIT' }).textContent();
    console.log('Button Name is: '+ ButtonName);
    await expect(submitbtn).toHaveText('SUBMIT');

    // how to get all radio button text contents and validate
    const AllRadioButtons = page.locator('nb-radio').allTextContents();
    await expect(AllRadioButtons).toContain('Option 1');
    await expect(AllRadioButtons).toContain('Option 2');
    await expect(AllRadioButtons).toContain('Option 3');



}
)


test('assertions',async ({page}) =>
{
    const basicForm = page.locator('nb-card', {hasText:'Basic form'});
    const emailfied = basicForm.getByRole('textbox', { name: 'Email' });
    const passwordfied = basicForm.getByRole('textbox', { name: 'Password' });  
    const submitbtn = basicForm.getByRole('button', { name: 'SUBMIT' });

    //generic assertions
    await expect(emailfied).toBeVisible();
    await expect(passwordfied).toBeEnabled();

    const SUBMITBtn = await submitbtn.textContent();
    console.log('Submit button text is: '+ SUBMITBtn);
    expect(SUBMITBtn).toEqual('SUBMIT');
    
    //negative assertions
    await expect(emailfied).not.toBeDisabled();
    await expect(passwordfied).not.toBeHidden();

    //flaky test  - unreliable
    //sometimes they pass, sometimes they fail
    // await expect(submitbtn).toHaveText('Submit');

    //locator assertion
    await expect(basicForm).toHaveClass(/ng-star-inserted/);
    await expect(basicForm).toHaveAttribute('class','card mb-4 ng-star-inserted');


    //hard assertion
    const SUBMITBtn1 = await submitbtn.textContent();
    console.log('Submit button text is: '+ SUBMITBtn);
    expect(SUBMITBtn1).toEqual('SUBMIT');

    //soft assertion
    await test.step('Soft Assertions', async () => {
        const SUBMITBtn2 = await submitbtn.textContent();
        console.log('Submit button text is: '+ SUBMITBtn2);
        expect.soft(SUBMITBtn2).toEqual('Submit');
    });



})

