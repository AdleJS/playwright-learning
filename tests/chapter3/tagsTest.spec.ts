import { test, expect } from "@playwright/test";

test("Test One", { tag: ["@SmokeTesting"] }, async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Test Two', { tag: ["@RegressionTesting"] }, async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});

test('Test Three', { tag: ["@RegressionTesting", "@SmokeTesting"] }, async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
});