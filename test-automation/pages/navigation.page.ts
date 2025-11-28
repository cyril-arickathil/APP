import {Locator, Page} from '@playwright/test'

export class NavigationPagee
{
    readonly page: Page
    readonly formLayoutLocator: Locator
    readonly datePickerLocator: Locator
    readonly smartTableLocator: Locator
    readonly tosterPageLocator: Locator

    constructor(page: Page)
    {
        this.page = page;
        this.formLayoutLocator = page.getByText('Form Layouts');
        this.datePickerLocator = page.getByText('Datepicker');
        this.smartTableLocator = page.getByText('Smart Table');
        this.tosterPageLocator = page.getByText('Toastr');

    }
    // navigating to the formLayouts page
    async formLayoutPage(){
    await this.page.getByText('Forms').click();
    await this.formLayoutLocator.click();
    }

    // navigating to the Datepicker page
    async datePickerPage(){
    await this.page.getByText('Forms').click();
    await this.datePickerLocator.click();
    }

        // navigating to the smartTable page
    async smartTablePage(){
    await this.page.getByText('Tables & Data').click();
    await this.smartTableLocator.click();
    }

      async tosterPage(){
    await this.page.getByText('Tables & DataModal & Overlays').click();
    await this.tosterPageLocator.click();
    }






}