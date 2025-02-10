import { test, expect } from "@playwright/test";

test("Drag and Dropt Testing", async ({ page }) => {
    await page.goto("https://jqueryui.com/droppable/");

    const iFrame = await page.frameLocator("[class='demo-frame']");
    const dragElement = await iFrame.locator("#draggable");
    const dropElement = await iFrame.locator("#droppable");

    await dragElement.dragTo(dropElement);
});