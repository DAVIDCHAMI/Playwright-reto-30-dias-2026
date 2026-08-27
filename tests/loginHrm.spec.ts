import { expect, test } from '@playwright/test';


test('login to HRM', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/')
     await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
     await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
     await page.getByRole('button', { name: 'Login' }).click();
});

test('login to HRM with invalid credentials', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/')
    await page.getByRole('textbox', { name: 'Username' }).fill('invalid_user');
    await page.getByRole('textbox', { name: 'Password' }).fill('invalid_password');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Invalid credentials')).toBeVisible();
});