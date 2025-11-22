import {test, expect} from '@playwright/test';
test.beforeEach(async ({page})=>
{       
    await page.goto('http://localhost:4200/pages/modal-overlays/tooltip');
    await page.setViewportSize({width: 1900, height: 980}); 
    await page.waitForTimeout(3000);
});

test('TooltipMouseHover',async ({page}) =>
{
    const tooltipButton = page.locator('nb-card', {hasText: 'Tooltip Placement'});
    await tooltipButton.getByRole('button', {name: 'Top'}).hover();
    
    const tooltip = page.locator('nb-tooltip').textContent();
    await page.waitForTimeout(3000);
    expect(tooltip).toBe('This is tooltip');
});


