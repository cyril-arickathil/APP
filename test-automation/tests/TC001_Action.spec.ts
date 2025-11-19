import{test,expect} from "@playwright/test"

test("Navigate to form",async({page})=>{
await page.goto("http://localhost:4200/")
await page.getByText("Forms").click();
await page.getByText("Form Layouts").click();
await expect(page.locator("input[placeholder='Email'][type='text']")).toBeVisible();
await expect (page.locator ("input[placeholder='Email'][type='text']")).toBeEditable();
  const inputval = page.locator("input").first()
await (inputval).fill("rani")
await page.locator("input[placeholder='Email'][type='text']").fill("xyz12@gmail.com");
const chkbox = page.locator('label').filter({ hasText: 'Remember me' }).first()
await (chkbox).check();
await expect (chkbox).toBeChecked();
const submitbtn= page.locator('button').nth(3)
await(submitbtn).click();
page.locator("#inputEmail1").fill ("xytz21@gmail.com");
await page.locator("#inputPassword2").fill("Test345");
const radiobtn = page.locator('nb-card nb-radio :text-is("Option 1")')
await(radiobtn).click();
await expect(radiobtn).toBeChecked();
})




