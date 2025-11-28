import test, { Page } from "@playwright/test";

export class FormLayoutsPage
{

    readonly page: Page

    constructor (page: Page)
    {
        this.page = page;
    }

    async submitUsingtheGridForm(email: string, password: string, Option?: string)
    {

    }

}
