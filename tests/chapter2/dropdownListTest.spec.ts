import { test, expect } from "@playwright/test";

test("Dropdown List Handling", async ({ page }) => {
    await page.goto("https://www.facebook.com/");
    await page.getByRole("button", { name: "Create new account" }).click();
    await page.getByLabel("Month").selectOption("3");
    await page.getByLabel("Month").selectOption("Aug");
    await expect(page.locator("#month > option")).toHaveText([
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]);
}); 