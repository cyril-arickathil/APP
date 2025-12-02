import page, { Page } from '@playwright/test'

export class locators {

readonly page : Page;

    constructor(page : Page)
    {
        this.page = page;
    }


async inlineFormLocators(name: string,mailId: string)
{
  //this.page.locator('form').getByPlaceholder('Jane Doe').fill(name);
  this.page.locator('form').getByPlaceholder('Jane Doe').fill(name);
  this.page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByPlaceholder('Email').fill(mailId);
}
async UsingGridFormLocators(Email: string,password: string)
{
  this.page.locator('#inputEmail1').fill(Email);
  this.page.locator('#inputPassword2').fill(password);
}

}


