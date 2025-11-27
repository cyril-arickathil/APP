import {Page} from '@playwright/test'

export class NavigationPagee
{
    readonly page: Page
    constructor(page: Page)
    {
        this.page = page;
    }
    // navigating to the formLayouts page
    async formLayoutPage(){
    await this.page.getByText('Forms').click();
    await this.page.getByText('Form Layouts').click();
    }

    // navigating to the Datepicker page
    async datePickerPage(){
    await this.page.getByText('Forms').click();
    await this.page.getByText('Datepicker').click();
    }

        // navigating to the smartTable page
    async smartTablePage(){
    await this.page.getByText('Tables & Data').click();
    await this.page.getByText('Smart Table').click();
    }






}