import { test, expect } from '@playwright/test';
import { readExcelFile } from '../../src/utils/ExcelHelper';

const records = readExcelFile();

for (const record of records) {
    test(`CSV File Testing: ${record["BannerText"]}`, async ({ page }) => {
        await page.goto(process.env.SITE_URL!);
        const name = await page.locator(".tn-urgent-news-message").textContent();
        const newsLink = await page.getByRole('link', { name: 'NEWS', exact: true }).textContent();
        const adv = await page.getByRole('banner').getByRole('link', { name: 'Реклама' }).textContent();

        expect.soft(name).toBe(record["BannerText"]);
        expect(newsLink).toBe(record["NewsLink"]);
        expect(adv).toBe(record["AdvLink"]);
    });

}