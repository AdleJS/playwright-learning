import { test, expect } from '@playwright/test';

test('Codegen Generated Test', async ({ page }) => {
    await page.goto('https://www.youtube.com/');
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('playwright by testers talk');
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await page.getByRole('link', { name: 'Playwright by Testers Talk☑️' }).click();
    await expect(page.getByRole('link', { name: 'Playwright by Testers Talk☑️' })).toBeVisible();
    await page.locator('video').click();
});