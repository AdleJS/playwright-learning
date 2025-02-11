import { test, expect } from "@playwright/test";

test("Datepicker Test", async ({ page }) => {
    await page.goto("https://jqueryui.com/datepicker/");
    const iFrame = await page.frameLocator("[class='demo-frame']");
    await iFrame.locator("#datepicker").fill('02/23/2025');
});