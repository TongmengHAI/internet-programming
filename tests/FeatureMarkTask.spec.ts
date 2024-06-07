import { test, expect } from '@playwright/test';


test('To test successful mark task as completed', async ({ page }) => {
    await page.goto("http://127.0.0.1:8000/tasks");
    await page.getByLabel('E-Mail Address').fill('tongmeng@gmail.com');
    await page.getByLabel('Password').fill('tongmeng@gmail.com');
    await page.getByRole('button', {name: 'Login'}).click();

    await page.locator('.fa.fa-pencil').first().click();
    await page.getByRole('checkbox', {name: 'Status'}).click();

    //save change
    await page.getByRole('button', {name: 'Save Changes'}).click();

    // Make assertion that task has status "Complete" in column status
    await page.locator('.status').first().hover();
    // await expect(page.getByRole('row', { name: 'Complete'})).toBeVisible();


})

test('To test successful mark task as incompleted', async ({ page }) => {
    await page.goto("http://127.0.0.1:8000/tasks");
    await page.getByLabel('E-Mail Address').fill('tongmeng@gmail.com');
    await page.getByLabel('Password').fill('tongmeng@gmail.com');
    await page.getByRole('button', {name: 'Login'}).click();
    await page.locator('.fa.fa-pencil').first().click();
    
    await page.getByRole('checkbox', {name: 'Status'}).click();

    //save change
    await page.getByRole('button', {name: 'Save Changes'}).click();
    // Make assertion that task has status "Incomplete" in column status
    await page.locator('.status').first().hover();
    // await expect(page.getByRole('cell', { name: 'Incomplete'})).toBeVisible();

})