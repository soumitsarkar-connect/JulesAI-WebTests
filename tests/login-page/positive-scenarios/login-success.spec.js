const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../page-objects/login-page');

test.describe("Login Page tests", async () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test("Validate Login Flow using correct email and password", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login();
    await loginPage.validateLoginSuccessful();
  });

});





