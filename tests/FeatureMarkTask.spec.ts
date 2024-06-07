import { test, expect } from '@playwright/test';


test('To test successful mark task as completed', async ({ page }) => {
    await page.goto("http://127.0.0.1:8000/tasks");
    await page.getByLabel('E-Mail Address').fill('ousa@1122.gmail.com');
    await page.getByLabel('Password').fill('ousa@1122.gmail.com');
    await page.getByRole('button', {name: 'Login'}).click();
    await page.locator('.fa.fa-pencil').first().click();
    
    await page.getByRole('checkbox', {name: 'Status'}).click();
    

    //save change
    await page.getByRole('button', {name: 'Save Changes'}).click();

    //Make assertion that task is changed with the word "updated" at the end.
    await expect(page.getByText("Completed")).toBeVisible();

})

test('To test successful mark task as incompleted', async ({ page }) => {
    await page.goto("http://127.0.0.1:8000/tasks");
    await page.getByLabel('E-Mail Address').fill('ousa@1122.gmail.com');
    await page.getByLabel('Password').fill('ousa@1122.gmail.com');
    await page.getByRole('button', {name: 'Login'}).click();
    await page.locator('.fa.fa-pencil').first().click();
    
    await page.getByRole('checkbox', {name: 'Status'}).click();
    

    //save change
    await page.getByRole('button', {name: 'Save Changes'}).click();

    //Make assertion that task is changed with the word "updated" at the end.
    await expect(page.getByText("Incompleted")).toBeVisible();

})