import { test, expect } from "@playwright/test";

test("Mouse Actions Test", async ({ page }) => {
    await page.goto("https://tengrinews.kz/");
    // await page.getByRole('link', { name: 'NEWS', exact: true }).click({ button: "middle" });
    // await page.getByRole('link', { name: 'NEWS', exact: true }).click({ button: "left" });
    // await page.getByRole('link', { name: 'NEWS', exact: true }).click({ button: "right" });
    // aw ait page.getByText('Популярные', { exact: true }).hover();
    await page.getByText('Популярные', { exact: true }).dblclick();
});