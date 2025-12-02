import test, { Page } from "@playwright/test";

export class FormLayoutsPage
{

    readonly page: Page

    constructor (page: Page)
    {
        this.page = page;
    }



    async inlineFormLocators(name: string,mailId: string)
{
    const inlineFormNameInput = this.page.locator('nb-card', {hasText: "Inline form"}).getByPlaceholder('Jane Doe');

    inlineFormNameInput.fill(name);
    



  //this.page.locator('form').getByRole('textbox', { name: 'Jane Doe' }).fill(name);
  //this.page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByPlaceholder('Jane Doe').fill(name);
  this.page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByPlaceholder('Email').fill(mailId);
}

    async submitUsingtheGridForm(email: string, password: string, Option?: string)
    {
     
    }

}