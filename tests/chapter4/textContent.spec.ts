import { test, expect } from "@playwright/test";

test("Assertions", async ({ page }) => {
    await page.goto("https://tengrinews.kz/");
    const name = await page.locator(".tn-urgent-news-message").textContent();
    expect(name).toBe("ПОДПИСЫВАЙТЕСЬ НА КАНАЛ TENGRI LIVE");
});