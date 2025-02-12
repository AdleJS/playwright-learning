import { test, expect } from "@playwright/test";

test.describe("Smoke Testing", () => {
    test("Test One", async ({ page }) => {
        await page.goto('https://playwright.dev/');
        await page.getByRole('link', { name: 'Get started' }).click();
        await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    });
});

test.describe("Regression Testing", () => {
    test('Test Two', async ({ page }) => {
        await page.goto('https://playwright.dev/');
        await expect(page).toHaveTitle(/Playwright/);
    });

    test('Test Three', async ({ page }) => {
        await page.goto('https://playwright.dev/');
        await expect(page).toHaveTitle(/Playwright/);
    });
});



