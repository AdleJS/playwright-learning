import { test, expect } from "@playwright/test";

test("Record at cursor test", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.getByRole('combobox', { name: 'Іздеу' }).fill("playwright by testers talk");
    await page.getByRole('combobox', { name: 'Іздеу' }).press("Enter");
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
    await expect(page).toHaveTitle("Playwright by Testers Talk☑️ - YouTube");
    await expect(page.getByRole('link', { name: 'Playwright Tutorial Full' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Playwright API Testing Tutorial Crash Course' })).toBeVisible();
});