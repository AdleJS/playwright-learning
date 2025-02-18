import { test } from '../../src/fixture/TestFixture';
import { HomePage } from '../../src/pages/HomePage';
import { ResultPage } from '../../src/pages/SearchResultPage';

test('Page Object Model Testing', async ({ page }) => {
    const homepage = new HomePage(page);
    const resultPage = new ResultPage(page);

    await homepage.goToUrl();
    await homepage.searchTopic('Бензин');

    await resultPage.clearInput();
    await resultPage.validateParagraph();
});