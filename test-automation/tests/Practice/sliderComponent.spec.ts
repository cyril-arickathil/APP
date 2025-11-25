import {test, expect} from '@playwright/test';
test.beforeEach(async ({page})=>    
{       
    await page.goto('http://localhost:4200/pages/iot-dashboard');
    await page.setViewportSize({width: 1900, height: 980});  
    //await page.getByTitle('IoT Dashboard').click();
    await page.waitForTimeout(1000);
});
test('sliderTest',async ({page}) =>
{
    //locate the circle
    const tempGauge = page.locator('[tabtitle="Temperature"] ngx-temperature-dragger circle');
    

    await tempGauge.evaluate(circle => {
        circle.setAttribute('cx', '232.63098833543773');
        circle.setAttribute('cy', '232.63098833543773');
    });
    await page.waitForTimeout(1000);
    await tempGauge.click();
    
});

test.afterEach(async ({page})=>
{
    await page.waitForTimeout(2000);
    page.close();
});
