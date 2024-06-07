import { test, expect } from '@playwright/test';

test('To test successful create new task', async ({ page}) => {
    await page.goto("http://127.0.0.1:8000/tasks/create");
    await page.getByLabel('E-mail Address').fill("tongmeng@gmail.com");
    await page.getByLabel('Password').fill('tongmeng@gmail.com');
    await page.getByRole('button', {name: 'Login'}).click();

    //create tasks
    await page.getByLabel('Task Name').fill('OUSA Task');
    await page.getByLabel('Description').fill('Motivation is not the only to make you growth but it is discipline!!');
    await page.getByRole('button', {name: 'Create Task'}).click();
})

test('To test edit task without checking completed box', async ({ page }) => {
    await page.goto("http://127.0.0.1:8000/tasks");
    await page.getByLabel('E-Mail Address').fill('tongmeng@gmail.com');
    await page.getByLabel('Password').fill('tongmeng@gmail.com');
    await page.getByRole('button', {name: 'Login'}).click();
    await page.locator('.fa.fa-pencil').first().click();
    
    //update Task Name with "updated at the end"
    const taskNameInput = await page.getByLabel('Task Name');
    const currentValue = await taskNameInput.inputValue();
    const updatedValue = `${currentValue} updated`;
    await taskNameInput.fill(updatedValue);

    //update description
    const NameInput = await page.getByLabel('Task Description');
    const current = await NameInput.inputValue();
    const updated = `${current} updated`;
    await NameInput.fill(updated);

    //save change
    await page.getByRole('button', {name: 'Save Changes'}).click();

    //Make assertion that task is changed with the word "updated" at the end.
    await expect(page.getByText("Task Updated")).toBeVisible();

})

test ('To test successful delete task', async ({ page }) => {
    await page.goto("http://127.0.0.1:8000/tasks");
    await page.getByLabel('E-Mail Address').fill('tongmeng@gmail.com');
    await page.getByLabel('Password').fill('tongmeng@gmail.com');
    await page.getByRole('button', {name: 'Login'}).click();
    await page.locator('.fa.fa-pencil').first().click();
    await page.getByRole('button', {name: 'Delete Task'}).click();
    await expect(page.getByText("Task Deleted")).toBeVisible();


}) 