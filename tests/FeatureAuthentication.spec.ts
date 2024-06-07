import { test, expect } from '@playwright/test';

// test('Check if we can register new user', async ({ page }) => {
//     await page.goto('http://localhost:8000');
//     //find register button by test
//     await page.getByText('Register').click();
//     //fill name
//     await page.getByLabel("Name").fill("sok@gmail.com");
//     //fill name in register page
//     await page.getByLabel("E-Mail Address").fill("sok@gmail.com");
//     //password
//     //exact true, catch it is password not password method or ...
//     await page.getByLabel("Password", {exact:true}).fill("sok@gmail.com");
//     //confirm password
//     await page.getByLabel("Confirm Password", {exact:true}).fill("sok@gmail.com");
//     //click register
//     //find button named Register
//     await page.getByRole("button", {name: "Register"}).click(); 
//     // Expect a title "to contain" a substring.
//     // await expect(page).toHaveTitle(/Playwright/);
//   });

  test('To register a new user on the web application', async ({ page }) => {
    // Navigate to the registration page http://127.0.0.1:8000/register
    await page.goto('http://127.0.0.1:8000/register');

    //name 
    await page.getByLabel("Name").fill("tongmeng@gmail.com");

    //fill name in register page
    await page.getByLabel("E-Mail Address").fill("tongmeng@gmail.com");

    //password
    //exact true, catch it is password not password method or ...
    await page.getByLabel("Password", {exact:true}).fill("tongmeng@gmail.com");
    //confirm password
    await page.getByLabel("Confirm Password", {exact:true}).fill("tongmeng@gmail.com");

    //click register
    //find button named Register
    await page.getByRole("button", {name: "Register"}).click();

    await expect(page.getByText("You are logged in!")).toBeVisible();
    // Expect a title "to contain" a substring.
    // await expect(page).toHaveTitle(/Playwright/);
  });

  test('Test Successfully login', async({ page }) => {
    //go to page http://127.0.0.1:8000/login
    await page.goto('http://127.0.0.1:8000/login');


    //fill name space
    await page.getByLabel("E-Mail Address").fill("tongmeng@gmail.com");

    //password
    await page.getByLabel("Password").fill("tongmeng@gmail.com");

    //find login button
    await page.getByRole("button", {name: "Login"}).click();
    await expect(page.getByText("You are logged in!")).toBeVisible();

  });

  test('Test Logged out user', async ({ page }) => {
    await page.goto("http://127.0.0.1:8000/login");

    await page.getByLabel("E-Mail Address").fill("tongmeng@gmail.com");

    //password
    await page.getByLabel("Password").fill("tongmeng@gmail.com");

    //find login button
    await page.getByRole("button", {name: "Login"}).click();
    await expect(page.getByText("You are logged in!")).toBeVisible();
    
    //find account button
    await page.getByRole("button", {name: "tongmeng@gmail.com"}).click();
    await page.getByRole("link", {name: "Logout"}).click();
    await expect(page.getByText("Your Application's Landing Page.")).toBeVisible();

  });

 
  
  