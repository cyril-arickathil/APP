// 1. **Write test cases** to interact with tooltips on the page:
//    - Visit: `http://localhost:4200/pages/modal-overlays/tooltip`
//    - Locate tooltip elements and trigger their display (e.g., hover or focus).
//    - Add **assertions** to verify tooltip text and visibility.
import{test,expect} from "@playwright/test"
test("verify tooltip text",async({page})=>{
  await page.goto("http://localhost:4200/pages/modal-overlays/tooltip")
  const button = page.getByRole('button', { name: 'Show Tooltip' }); 
//button.nth(0).click()
button.nth(0).hover()

  //await page.locator('button').nth(0).hover();
const tooltipLocator = page.getByText('This is a tooltip');
 await tooltipLocator.waitFor({ state: 'visible' });
  const tooltipText = await tooltipLocator.textContent();
    console.log(`Tooltip text: ${tooltipText}`);
//const tooltip = page.locator()
await page.waitForTimeout(6000)
button.nth(1).click()
button.nth(1).hover()
//const tooltipimg = tooltipLocator.getAttribute('ng-reflect-status')
//await expect(tooltipimg).toBe("danger")

})