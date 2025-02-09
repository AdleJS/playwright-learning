import { test, expect } from "@playwright/test";

test("Capturing Screenshot", async ({ page }) => {
    await page.goto("https://www.youtube.com/@testerstalk");
    await page.locator("#page-header-container").screenshot({ path: "./screenshots/header.png" });
    await page.screenshot({ path: "./screenshots/page.png" });
    await page.screenshot({ path: "./screenshots/full-page.png", fullPage: true });
});