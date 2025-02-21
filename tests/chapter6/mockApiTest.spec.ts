import { test, expect } from '@playwright/test';

test('Mock API Request', async ({ page }) => {
    await page.route('*/**/api/v1/fruits', async route => {
        const json = [
            {
                name: 'playwright by testers talk',
                id: 12
            },
            {
                name: 'cypress by testers talk',
                id: 13
            },
            {
                name: 'api testing by testers talk',
                id: 14
            },
        ];

        await route.fulfill({ json });
    });

    await page.goto('https://demo.playwright.dev/api-mocking');

    await expect(page.getByText('playwright by testers talk')).toBeVisible();
    await expect(page.getByText('cypress by testers talk')).toBeVisible();
    await expect(page.getByText('api testing by testers talk')).toBeVisible();
});

test('Gets the json from api and adds a new string value', async ({ page }) => {

    // Get the response and add to it
    await page.route('*/**/api/v1/fruits', async route => {
        const response = await route.fetch();
        const json = await response.json();
        json.push({ name: 'playwright by testers talk', id: 100 });
        json.push({ name: 'cypress by testers talk', id: 101 });
        json.push({ name: 'api testing by testers talk', id: 102 });
        json.push({ name: 'postman by testers talk', id: 103 });
        json.push({ name: 'rest assured by testers talk', id: 104 });

        // Fulfill using the original response, while patching the response body
        // with the given JSON object.
        await route.fulfill({ response, json });
    });

    // Go to the page
    await page.goto('https://demo.playwright.dev/api-mocking');

    // Assert that the new fruit is visible
    await expect(page.getByText('playwright by testers talk')).toBeVisible();
    await expect(page.getByText('cypress by testers talk')).toBeVisible();
    await expect(page.getByText('api testing by testers talk')).toBeVisible();
    await expect(page.getByText('postman by testers talk')).toBeVisible();
    await expect(page.getByText('rest assured by testers talk')).toBeVisible();
});

test('Record the HAR file', async ({ page }) => {

    // Get the response from the HAR file
    await page.routeFromHAR('./hars/fruit.har', {
        url: '*/**/api/v1/fruits',
        update: true,
    });

    // Go to the page
    await page.goto('https://demo.playwright.dev/api-mocking');

    // Assert that the fruit is visible
    await expect(page.getByText('Strawberry')).toBeVisible();
    await expect(page.getByText('Tomato')).toBeVisible();
});