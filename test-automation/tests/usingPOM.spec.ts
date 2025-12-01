import {test , expect} from '@playwright/test'
import {NavigationPage} from '../pages/navigation.page'
import {FormLayoutsPage} from '../pages/formLayouts.page'

test.beforeEach(async ({page}) =>
{
  await page.goto('http://localhost:4200/')
})

test('navigating to form layout page', async ({page})=>
{
    const navigateTo = new NavigationPage(page)
    await navigateTo.formLayoutsPage()
    await navigateTo.datePickerPage()
    await navigateTo.smartTablePage()
    await navigateTo.toolTipPage()
    await navigateTo.toasterPage()
})

test('navigating to form layout page and submit form', async ({page})=>
{
    const navigateTo = new NavigationPage(page)
    const onFormLayouts = new FormLayoutsPage(page)
    
    await navigateTo.formLayoutsPage()
    await onFormLayouts.submitUsingTheGridForm('test@email.com', 'mypassword', 'Option 1')
    await onFormLayouts.submitUisngInLineForm('rahul kumar', 'rahulKumar@test.com',true )
})

test('example here', async ({page})=>
{
    const navigateTo = new NavigationPage(page)
    
})