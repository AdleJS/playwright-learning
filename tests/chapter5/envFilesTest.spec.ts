import { test, expect } from '@playwright/test';

test('Test Env', async ({ page }) => {
    await page.goto(process.env.SITE_URL!);
    const name = await page.locator(".tn-urgent-news-message").textContent();
    expect(name).toBe("ПОДПИСЫВАЙТЕСЬ НА КАНАЛ TENGRI LIVE");
});