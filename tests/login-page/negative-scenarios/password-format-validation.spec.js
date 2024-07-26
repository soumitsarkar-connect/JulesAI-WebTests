const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../page-objects/login-page');

test.describe("Login Page tests", async () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test("Password Validation", async ({ page }) => {
        const loginPage = new LoginPage(page);

        // Password required checked
        await loginPage.fillEmailInputBox(loginPage.emailId);
        await loginPage.clickOnPasswordInputBox();
        await loginPage.clickOnLoginButton();
        await loginPage.validatePasswordRequiredMessageShown();

        // Password too short checked
        await loginPage.fillEmailInputBox(loginPage.emailId);
        await loginPage.fillPasswordInputBox("QaJU");
        await loginPage.validatePasswordTooShortMessageShown();

        // Password input type checked
        await loginPage.fillPasswordInputBox(loginPage.password);
        await loginPage.clickOnShowPasswordIcon();
        await loginPage.validatePasswordShown();

    });

});