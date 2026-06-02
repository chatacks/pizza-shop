import { http, HttpResponse } from 'msw';

import type { GetProfileReponse } from '../get-profile';

const date = new Date('2026-01-01T00:00:00.000Z');

export const getProfileMock = http.get<never, never, GetProfileReponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'askodakoowk4d4as8q5',
      name: 'Pizza Shop',
      email: 'johndoe@email.com',
      createdAt: date,
      phone: '21966344069',
      role: 'manager',
      updatedAt: date,
    });
  },
);
