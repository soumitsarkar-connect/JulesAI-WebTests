const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.emailInputBox = page.locator("input[name='email']");
        this.passwordInputBox = page.locator("input[name='password']");
        this.showPasswordIcon = page.locator("//span[@class='MuiIconButton-label']");
        this.loginButton = page.locator("//button[@type='submit']");
        this.userAvatar = page.locator("[data-test-id='header-menu'] .UserAvatar--inner");

        // Error messages
        this.emailRequiredMessage = page.locator("//div[@data-test-id='input-email']//following-sibling::div[normalize-space(text())='Required']");
        this.passwordRequiredMessage = page.locator("//div[@data-test-id='input-password']//following-sibling::div[normalize-space(text())='Required']");

        this.invalidEmailMessage = page.locator("//div[normalize-space()='Email not valid']");
        this.tooShortPasswordMessage = page.locator("//div[normalize-space()='Password too short']");

        this.toastMessage = page.locator("[data-test-id='toaster-message']");

        // Test data
        this.emailId = 'qa@julesai.com';
        this.password = 'QaJULES2023!';
        this.wrongUserNamePasswordMessage = 'Your email and/or password are incorrects';
    }

    async goto() {
        await this.page.goto('/authentication');
    }

    async login() {
        await this.emailInputBox.fill(this.emailId);
        await this.passwordInputBox.fill(this.password);
        await this.loginButton.click();
    }

    async validateLoginSuccessful() {
        await expect(this.userAvatar).toBeVisible();
    }

    async fillEmailInputBox(emailId) {
        await this.emailInputBox.fill(emailId);
    }

    async clearEmailInputBox(emailId) {
        await this.emailInputBox.clear();
    }

    async fillPasswordInputBox(password) {
        await this.passwordInputBox.fill(password);
    }

    async clearPasswordInputBox(password) {
        await this.passwordInputBox.clear();
    }

    async clickOnPasswordInputBox() {
        await this.passwordInputBox.click();
    }

    async clickOnEmailInputBox() {
        await this.emailInputBox.click();
    }

    async clickOnPasswordInputBox() {
        await this.passwordInputBox.click();
    }

    async clickOnShowPasswordIcon() {
        await this.showPasswordIcon.click();
    }

    async clickOnLoginButton() {
        await this.loginButton.click();
    }

    async validateEmailRequiredMessageShown() {
        await expect(this.emailRequiredMessage).toBeVisible();
    }

    async validatePasswordRequiredMessageShown() {
        await expect(this.passwordRequiredMessage).toBeVisible();
    }

    async validateInvalidEmailMessageShown() {
        await expect(this.invalidEmailMessage).toBeVisible();
    }

    async validatePasswordTooShortMessageShown() {
        await expect(this.tooShortPasswordMessage).toBeVisible();
    }

    async validatePasswordShown() {
        await expect(this.passwordInputBox).toHaveAttribute('type', 'text');
    }

    async validateToastMessage(expectedMessage = this.wrongUserNamePasswordMessage) {
        await expect(this.toastMessage).toHaveText(expectedMessage);
    }

};