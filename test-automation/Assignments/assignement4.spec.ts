import {test, expect} from '@playwright/test';
import { text } from 'stream/consumers';

test.beforeEach(async ({page}) =>{
await page.goto('http://localhost:4200/pages/modal-overlays/tooltip');
await page.getByTitle('Modal & Overlays').click();
await page.getByTitle('Tooltip').click();
})

test('tooltip1', async ({page}) =>{
  const TP = await page.locator('nb-card' , {hasText : 'Tooltip Placements'});
 await TP.locator('nb-card-body').getByRole('button', {name : 'right'}).hover();
const tooltipassert = await page.locator('nb-tooltip').textContent();
expect(tooltipassert).toEqual('This is a tooltip');
})