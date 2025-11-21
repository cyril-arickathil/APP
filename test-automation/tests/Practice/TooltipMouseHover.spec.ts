import {test, expect} from '@playwright/test';
test.beforeEach(async ({page})=>
{       
    await page.goto('http://localhost:4200/pages/modal-overlays/tooltip');
    await page.setViewportSize({width: 1900, height: 980}); 
    await page.waitForTimeout(3000);
});

test('TooltipMouseHover',async ({page}) =>
{
    const tooltipButton = page.locator('button[nbtooltip="This is a tooltip message"]');
    await tooltipButton.hover();
    const tooltip = page.locator('nb-tooltip');
    await page.waitForTimeout(3000);
    await expect(tooltip).toHaveText('This is a tooltip message');
});