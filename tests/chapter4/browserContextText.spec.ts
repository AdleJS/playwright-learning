import { test, expect } from "@playwright/test";

test("Multiple Browser Tabs", async ({ page, browser }) => {
    await page.goto("https://tengrinews.kz/");

    const newContext = await browser.newContext();
    const anotherPage = await newContext.newPage();

    await anotherPage.goto("https://www.nur.kz/");

    const newTab = await newContext.newPage();
    await newTab.goto("https://www.dota2.ru/");
});