import { test, expect } from "@playwright/test";

test("Assertions", async ({ page }) => {
    await page.goto("https://tengrinews.kz/");
    await expect(page).toHaveURL("https://tengrinews.kz/");
    await expect(page).toHaveTitle("Главные новости Казахстана - Tengrinews.kz");

    // await page.getByRole('img', { name: 'Поиск' }).click();
    // await expect(page.getByRole('searchbox', { name: 'Найти в TengriNews' })).toBeVisible();
    // await expect(page.getByRole('searchbox', { name: 'Найти в TengriNews' })).toBeEditable();
    // await expect(page.getByRole('searchbox', { name: 'Найти в TengriNews' })).toBeEnabled();
    // await expect(page.getByRole('searchbox', { name: 'Найти в TengriNews' })).toBeEmpty();
    // await expect(page.getByRole('searchbox', { name: 'Найти в TengriNews' })).toBeDisabled();
});