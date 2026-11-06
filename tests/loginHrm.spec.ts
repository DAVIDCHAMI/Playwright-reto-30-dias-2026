import { expect, test } from '@playwright/test';
import { LoginPage } from '../pageobjects/LoginPage';


test('login to HRM', async({page})=>{
    const loginPage = new LoginPage(page);
     await page.goto('/web/index.php/auth/login')
    await loginPage.doLogin('Admin', 'admin123');
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});

test('login to HRM with invalid credentials', async({page})=>{
     const loginPage = new LoginPage(page);
    await page.goto('/web/index.php/auth/login')
    await loginPage.doLogin('invalid_user', 'invalid_password');
    await expect(page.getByText('Invalid credentials')).toBeVisible();
});