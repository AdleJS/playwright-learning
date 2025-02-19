import { test, expect } from '@playwright/test';
import postApiRequest from '../../test-data/api/POST_REQUEST.json';

test.use({ baseURL: process.env.BASE_API_URL! });

test('Static Post Request', async ({ request }) => {
    const postApiResponse = await request.post(`/booking`, { data: postApiRequest });

    const jsonPostApiResponse = await postApiResponse.json();
    console.log(jsonPostApiResponse);

    expect(postApiResponse.status()).toBe(200);
    expect(postApiResponse.statusText()).toBe('OK');
    expect(postApiResponse.headers()['content-type']).toContain('application/json');

    expect(jsonPostApiResponse['booking']).toHaveProperty('firstname');
    expect(jsonPostApiResponse['booking']).toHaveProperty('lastname');
    expect(jsonPostApiResponse['booking']['bookingdates']).toHaveProperty('checkin');
    expect(jsonPostApiResponse['booking']['bookingdates']).toHaveProperty('checkout');

    expect(jsonPostApiResponse['bookingid']).toBeGreaterThan(0);
    expect(jsonPostApiResponse['booking']['firstname']).toBe('Adilet');
    expect(jsonPostApiResponse['booking']['lastname']).toBe('Askar');
});