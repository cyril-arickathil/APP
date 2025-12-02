import {test as base} from '@playwright/test';

import { FormLayoutsPage } from '../../test-automation/pages/formLayout.page'
import { NavigationPage } from '../../test-automation/pages/navigation.page';

// Declare the types of your fixtures.
type MyFixtures = {
  formLayoutPage: FormLayoutsPage;
  navigationPage: NavigationPage;
};

export const test = base.extend<MyFixtures>({

    navigationPage: async ({ page }, use) => {
        await use(new NavigationPage(page));
    },
        formLayoutPage: async ({ page }, use) => {
        await use(new FormLayoutsPage(page));
    },
});
