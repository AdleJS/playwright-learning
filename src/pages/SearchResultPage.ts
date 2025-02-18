import { expect, Locator, Page } from '@playwright/test';

export class ResultPage {
    readonly page: Page;
    readonly searchinput: Locator;
    readonly paragraph: Locator

    constructor(page: Page) {
        this.page = page;
        this.searchinput = page.locator('.menu-opened_search_text').last();
        this.paragraph = page.locator('body > div.my-app > main > section > div.search-head > p');
    }

    async clearInput() {
        await this.searchinput.click();
        await this.searchinput.press('Control+A');
        await this.searchinput.press('Delete');
    }

    async validateParagraph() {
        await this.searchinput.press('Enter');
        await expect(this.paragraph).toContainText('Найдено результатов 10000 результатов');
    }
}