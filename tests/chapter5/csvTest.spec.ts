import { test, expect } from '@playwright/test';
import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';

type TestRecords = {
    BannerText: string;
    NewsLink: string;
    AdvLink: string;
};

const records = parse(fs.readFileSync(path.join(__dirname, '../../test-data/qa/test.csv')), {
    columns: true,
    skipEmptyLines: true,
}) as TestRecords[];

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

