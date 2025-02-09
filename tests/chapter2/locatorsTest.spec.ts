import { test, expect } from "@playwright/test";

test("Locators Test", async ({ page }) => {
    await page.goto("https://github.com/BakkappaN");
    // await page.getByRole("link", { name: "Sign in" });
    // await page.getByLabel("Homepage", { exact: true }).first().click();
    // await page.getByAltText("View BakkappaN's full-sized avatar", { exact: true }).click();
    await page.getByTestId("repositories").first().click();
});