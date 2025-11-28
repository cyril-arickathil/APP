import page, { Page } from '@playwright/test'

export class locators {

readonly page : Page;

    constructor(page : Page)
    {
        this.page = page;
    }


async inlineFormLocators(name: string,mailId: string)
{
  this.page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByPlaceholder('Jane Doe').fill(name);
  this.page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByPlaceholder('Email').fill(mailId);
}

//const Email1 = this.page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByPlaceholder('Email');



}
