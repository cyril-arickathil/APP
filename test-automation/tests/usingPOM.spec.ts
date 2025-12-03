import {test , expect} from '@playwright/test'
import {NavigationPage} from '../pages/navigation.page'

test.beforeEach(async ({page}) =>
{
  await page.goto('http://localhost:4200/')
})

test('navigating to form layout page', async ({page})=>
{
    const navigateTo = new NavigationPage(page)
    await navigateTo.formLayoutsPage()
})