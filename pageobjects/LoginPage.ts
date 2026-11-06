import { Locator, Page } from '@playwright/test';

export class LoginPage {

    readonly page: Page;
    readonly usernameLocator: Locator
    readonly passwordLocator: Locator
    readonly loginButtonLocator: Locator

    constructor(page: Page) {
        this.page = page
        this.usernameLocator = page.getByRole('textbox', { name: 'Username' });
        this.passwordLocator = page.getByRole('textbox', { name: 'Password' });
        this.loginButtonLocator = page.getByRole('button', { name: 'Login' });
    }


    async doLogin(username: string, password: string) {
        await this.usernameLocator.fill(username);
        await this.passwordLocator.fill(password);
        await this.loginButtonLocator.click();
    }

}