import { test, expect } from "@playwright/test";

test("Checkbox and Radio Test", async ({ page }) => {
    await page.goto("https://jqueryui.com/checkboxradio/");

    const frame = await page.frameLocator(".demo-frame");

    await expect(frame.locator('[for="radio-1"]')).not.toBeChecked();

    await frame.locator('[for="radio-1"]').check();
});