import { test, expect } from '@playwright/test';
import { getPostAPIRequestBody } from '../../src/utils/ApiHelper';
import tokenApiRequest from '../../test-data/api/TOKEN_REQUEST.json';

test.use({ baseURL: process.env.BASE_API_URL! });

test('Delete Request', async ({ request }) => {
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

    const bookingId = jsonPostApiResponse.bookingid;

    const getApiResponse = await request.get(`/booking/${bookingId}`);

    expect(getApiResponse.status()).toBe(200);
    expect(getApiResponse.statusText()).toBe('OK');

    const tokenApiResponse = await request.post(`/auth`, { data: tokenApiRequest });

    expect(tokenApiResponse.status()).toBe(200);
    expect(tokenApiResponse.statusText()).toBe('OK');

    const tokenApiResponseJSON = await tokenApiResponse.json();
    const token = tokenApiResponseJSON.token;

    const deleteApiResponse = await request.delete(`/booking/${bookingId}`, {
        headers: {
            'Content-Type': 'application/json',
            'Cookie': `token=${token}`
        },
    })

    expect(deleteApiResponse.status()).toBe(201)
    expect(deleteApiResponse.statusText()).toBe('Created');
});