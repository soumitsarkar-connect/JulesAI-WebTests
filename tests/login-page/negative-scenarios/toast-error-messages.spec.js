const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../page-objects/login-page');

test.describe("Login Page tests", async () => {

    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test("Validate Toast Error Messages", async ({ page }) => {
        const loginPage = new LoginPage(page);

        // Validate toast message with Correct email id + Wrong password
        await loginPage.fillEmailInputBox(loginPage.emailId);
        await loginPage.fillPasswordInputBox("QaJULES2");
        await loginPage.clickOnLoginButton();
        await loginPage.validateToastMessage();

        // Validate toast message with Wrong email id + Correct password
        await page.reload();
        await loginPage.fillEmailInputBox("qa-wrong-user@julesai.com");
        await loginPage.fillPasswordInputBox(loginPage.password);
        await loginPage.clickOnLoginButton();
        await loginPage.validateToastMessage();

        // Validate toast message with Wrong email id + Wrong password
        await page.reload();
        await loginPage.fillEmailInputBox("qa-wrong-user@julesai.com");
        await loginPage.fillPasswordInputBox("ULES2023!");
        await loginPage.clickOnLoginButton();
        await loginPage.validateToastMessage();
    });

});





