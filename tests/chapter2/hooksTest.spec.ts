import { test, expect } from "@playwright/test";

test.beforeAll(async () => {
    console.log("Running before all tests.");
});

test.afterAll(async () => {
    console.log("Running after all tests.");
});

test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
});

test.afterEach(async () => {
    console.log("Running after each test.");
});

test('has title', async ({ page }) => {

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});