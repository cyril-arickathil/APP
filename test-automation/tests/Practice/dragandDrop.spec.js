import {test,expect} from '@playwright/test'

test ('drag and drop test' ,async({page}) =>
    {
        await page.goto('https://www.globalsqa.com/demo-site/draganddrop/');
        await page.waitForTimeout(3000);

        
        const frame = page.frameLocator('[rel-title="Photo Manager"] iframe')
        const destination = frame.locator('#trash');
       
        //drag and drop 
        await frame.locator('li',{hasText: 'High Tatras 2'}).dragTo(destination);   
        await page.waitForTimeout(3000);

        //user controlled way
        await frame.locator('li',{hasText: 'High Tatras 3'}).hover();
        await page.mouse.down();
        await destination.hover();
        await page.mouse.up();
        await page.waitForTimeout(3000);

        //assertions
        await expect(destination.locator('li h5')).toHaveText(['High Tatras 2', 'High Tatras 3']);
        



        await page.close();
    }); 

