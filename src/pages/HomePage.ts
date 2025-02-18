import { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly searchIcon: Locator;
    readonly searchInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchIcon = page.locator('.menu_links_search');
        this.searchInput = page.locator('.menu-opened_search_text');
    }

    async goToUrl() {
        await this.page.goto(process.env.SITE_URL!);
    }

    async searchTopic(topic: string) {
        await this.searchIcon.click();
        await this.searchInput.fill(topic);
        await this.searchInput.press('Enter');
    }
}