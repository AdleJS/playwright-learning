import { test, expect } from "@playwright/test";

test("Visual Test", async ({ page }) => {
    await page.goto("https://www.nur.kz/login/");
    await expect(page).toHaveScreenshot("NurkzLoginPage.png");
    await page.getByRole('button', { name: 'Войти с номером телефона' }).click();
    const loginForm = await page.locator('.login-module__container--21Qtw');
    await expect(loginForm).toHaveScreenshot("LLoginForm.png");
});