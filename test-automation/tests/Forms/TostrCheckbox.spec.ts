import {test, expect} from '@playwright/test';
test.beforeEach(async ({page})=>
{        
    await page.goto('http://localhost:4200/pages/modal-overlays/toastr');
    await page.setViewportSize({width: 1900, height: 980}); 
    await page.waitForTimeout(3000);
});

test('TostrCheckbox',async ({page}) =>
{
    const all_checkboxes = page.getByRole('checkbox');


   for(const box of await all_checkboxes.all())
    { 
        await box.uncheck({force:true});
        expect(box).not.toBeChecked();

        await box.check({force:true});
        expect(box).toBeChecked();
    })

});

