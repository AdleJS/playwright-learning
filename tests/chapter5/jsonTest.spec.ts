import { test, expect } from '@playwright/test';
import testData from '../../test-data/qa/test.json';

type TestData = {
    TestDataSetFirst: {
        BannerText: string,
        NewsLink: string,
        AdvLink: string,
    },
    TestDataSetSecond: {
        BannerText: string,
        NewsLink: string,
        AdvLink: string,
    }
};

const typedTestData = testData as TestData;

for (const datasetName in typedTestData) {
    const data = typedTestData[datasetName as keyof TestData];

    test(`JSON File Testing: ${data["BannerText"]}`, async ({ page }) => {
        await page.goto(process.env.SITE_URL!);
        const name = await page.locator(".tn-urgent-news-message").textContent();
        const newsLink = await page.getByRole('link', { name: 'NEWS', exact: true }).textContent();
        const adv = await page.getByRole('banner').getByRole('link', { name: 'Реклама' }).textContent();

        expect(name).toBe(data["BannerText"]);
        expect(newsLink).toBe(data["NewsLink"]);
        expect(adv).toBe(data["AdvLink"]);
    });

}

