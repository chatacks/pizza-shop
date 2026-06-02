import { http, HttpResponse } from 'msw';

import type { GetManagedRestaurantResponse } from '../get-managed-restaurant';

const date = new Date('2026-01-01T00:00:00.000Z');

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'askodakoowk4d4as8q5',
    managerId: 'a55w9w5q212ds54d',
    name: 'Pizza Shop',
    description: 'Pizza doideira',
    createdAt: date,
    updatedAt: date,
  });
});
