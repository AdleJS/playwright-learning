import { test, expect } from "@playwright/test";

test("Keyboard Actions", async ({ page }) => {
    await page.goto("https://tengrinews.kz/");
    await page.getByRole('img', { name: 'Поиск' }).click();
    await page.getByRole('searchbox', { name: 'Найти в TengriNews' }).click();
    await page.getByRole('searchbox', { name: 'Найти в TengriNews' }).fill("Бензовоз");
    await page.getByRole('searchbox', { name: 'Найти в TengriNews' }).press("Enter");
    await page.locator('section').getByRole('searchbox').click();
    await page.keyboard.press("Control+A");
    await page.keyboard.press("Delete");
});