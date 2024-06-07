import { test, expect } from '@playwright/test';

// #CRUD001
test('To test successful create new task', async ({ page}) => {
    await page.goto("http://127.0.0.1:8000/tasks/create");
    await page.getByLabel('E-mail Address').fill("tongmeng@gmail.com");
    await page.getByLabel('Password').fill('tongmeng@gmail.com');
    await page.getByRole('button', {name: 'Login'}).click();

    //create tasks
    await page.getByLabel('Task Name').fill('Checking Task');
    await page.getByLabel('Description').fill('TP13: Automate test with playwright.');
    await page.getByRole('button', {name: 'Create Task'}).click();

    await page.goto(" http://127.0.0.1:8000/tasks ");

    await expect(page.getByRole('row', { name: 'Checking Task'})).toBeVisible();
})

// #CRUD002
test('To test edit task without checking completed box', async ({ page }) => {
    await page.goto("http://127.0.0.1:8000/tasks");
    await page.getByLabel('E-Mail Address').fill('tongmeng@gmail.com');
    await page.getByLabel('Password').fill('tongmeng@gmail.com');
    await page.getByRole('button', {name: 'Login'}).click();
    await page.locator('.fa.fa-pencil').first().click();
    
    //update Task Name with "updated at the end"
    const taskNameInput = page.getByLabel('Task Name');
    const currentValue = await taskNameInput.inputValue();
    const updatedValue = currentValue+" updated";
    await taskNameInput.fill(updatedValue);

    //update description
    const NameInput = page.getByLabel('Task Description');
    const current = await NameInput.inputValue();
    const updated = current+" updated";
    await NameInput.fill(updated);

    //save change
    await page.getByRole('button', {name: 'Save Changes'}).click();

    await expect(page.getByRole('row', { name: 'updated'})).toBeVisible();
})

test ('To test successful delete task', async ({ page }) => {
    await page.goto("http://127.0.0.1:8000/tasks");
    await page.getByLabel('E-Mail Address').fill('tongmeng@gmail.com');
    await page.getByLabel('Password').fill('tongmeng@gmail.com');
    await page.getByRole('button', {name: 'Login'}).click();

    await page.locator('.fa.fa-pencil').first().click();
    await page.getByRole('button', {name: 'Delete Task'}).click();
    await expect(page.getByRole('heading', { name: 'Task Deleted'})).toBeVisible();



}) 