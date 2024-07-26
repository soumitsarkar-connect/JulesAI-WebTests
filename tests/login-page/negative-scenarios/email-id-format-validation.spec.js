const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../page-objects/login-page');

test.describe("Login Page tests", async () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test("Validate Email Id Format", async ({ page }) => {
        const loginPage = new LoginPage(page);

        // Email required check
        await loginPage.fillPasswordInputBox(loginPage.password);
        await loginPage.clickOnLoginButton();
        await loginPage.validateEmailRequiredMessageShown();

        // Missing "@" symbol
        await loginPage.fillEmailInputBox("qajulesai.com");
        await loginPage.clickOnPasswordInputBox();
        await loginPage.validateInvalidEmailMessageShown();

        // Missing domain
        await loginPage.clearEmailInputBox();
        await loginPage.fillEmailInputBox("qa@julesai.");
        await loginPage.clickOnPasswordInputBox();
        await loginPage.validateInvalidEmailMessageShown();

        // Invalid characters
        await loginPage.clearEmailInputBox();
        await loginPage.fillEmailInputBox("qa@julesai#com");
        await loginPage.clickOnPasswordInputBox();
        await loginPage.validateInvalidEmailMessageShown();

        // Multiple "@" symbols
        await loginPage.clearEmailInputBox();
        await loginPage.fillEmailInputBox("qa@@julesai.com");
        await loginPage.clickOnPasswordInputBox();
        await loginPage.validateInvalidEmailMessageShown();

        // Spaces
        await loginPage.clearEmailInputBox();
        await loginPage.fillEmailInputBox("qa @julesai.com");
        await loginPage.clickOnPasswordInputBox();
        await loginPage.validateInvalidEmailMessageShown();

        // Incorrect quoted name
        await loginPage.clearEmailInputBox();
        await loginPage.fillEmailInputBox("@julesai.com");
        await loginPage.clickOnPasswordInputBox();
        await loginPage.validateInvalidEmailMessageShown();

        // Unbalanced quotes
        await loginPage.clearEmailInputBox();
        await loginPage.fillEmailInputBox("qa@julesai com");
        await loginPage.clickOnPasswordInputBox();
        await loginPage.validateInvalidEmailMessageShown();

        // Email and password required checked
        await loginPage.clearEmailInputBox();
        await loginPage.clearPasswordInputBox();
        await loginPage.clickOnLoginButton();
        await loginPage.validateEmailRequiredMessageShown();
        await loginPage.validatePasswordRequiredMessageShown();

    });

});


