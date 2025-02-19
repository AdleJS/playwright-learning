import { test, expect } from '@playwright/test';
import { formatAPIRequest } from '../../src/utils/ApiHelper';
import path from 'path';
import fs from 'fs';

test.use({ baseURL: process.env.BASE_API_URL! });

test('Dynamic Post Request', async ({ request }) => {
    const filepath = path.join(__dirname, '../../test-data/api/POST_REQUEST_DYNAMIC.json');
    const jsonTemplate = fs.readFileSync(filepath, 'utf-8');
    const values = ['Adilet', 'Askar', 1000];

    const postApiRequest = await formatAPIRequest(jsonTemplate, values);
    const postApiResponse = await request.post(`/booking`, { data: JSON.parse(postApiRequest) });
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