import { test, expect } from "@playwright/test";

test("Alerts and Popups", async ({ page }) => {
    await page.goto("https://www.selenium.dev/documentation/webdriver/interactions/alerts/");

    page.once("dialog", (dialog) => {
        dialog.accept();
    });

    await page.getByText("See an example alert", { exact: true }).click();
    await page.getByText("See a sample confirm", { exact: true }).click();
});