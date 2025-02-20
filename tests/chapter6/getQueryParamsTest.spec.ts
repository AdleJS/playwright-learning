import { test, expect } from '@playwright/test';
import { getPostAPIRequestBody } from '../../src/utils/ApiHelper';

test.use({ baseURL: process.env.BASE_API_URL! });

test('Get Request with Query Parameters', async ({ request }) => {
    const firstname = 'Adilet';
    const lastname = 'Askar';
    const totalPrice = 1000;

    const postApiRequest = await getPostAPIRequestBody(firstname, lastname, totalPrice, true, 'breakfast', '2025-03-13', '2025-03-15');
    const postApiResponse = await request.post(`/booking`, { data: postApiRequest });
    const jsonPostApiResponse = await postApiResponse.json();

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

    const getApiResponse = await request.get(`/booking/`, {
        params: {
            firstname: 'Adilet',
            lastname: 'Askar'
        }
    });

    expect(getApiResponse.status()).toBe(200);
    expect(getApiResponse.statusText()).toBe('OK');
});