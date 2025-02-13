import { test, expect } from "@playwright/test";

const nameArray = ['Installation', 'Cypress installation', 'API installation'];

for (const name of nameArray) {
    test(`Parameterized test for ${name}`, async ({ page }) => {
        await page.goto('https://playwright.dev/');
        await page.getByRole('link', { name: 'Get started' }).click();
        await expect(page.getByRole('heading', { name: `${name}` })).toBeVisible();
    });
}

