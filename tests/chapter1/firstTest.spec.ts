import { test, expect } from "@playwright/test";

test("My First Playwright Typescript Test", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.getByRole('combobox', { name: 'Іздеу' }).fill("playwright by testers talk");
    await page.getByRole('combobox', { name: 'Іздеу' }).press("Enter");
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();
    await expect(page).toHaveTitle("Playwright by Testers Talk☑️ - YouTube");
});