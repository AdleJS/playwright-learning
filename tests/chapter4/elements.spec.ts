import { test, expect } from "@playwright/test";

test("Elements Iteration", async ({ page }) => {
    await page.goto("https://tengrinews.kz/");

    const newsTopics = await page.$$(".main-news_top_item_container");

    for (const elem of newsTopics) {
        console.log(elem.textContent());
    }
});