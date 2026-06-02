import { http, HttpResponse } from 'msw';

import type { GetOrderDetailsResponse } from '../get-order-details';

const date = new Date('2026-01-01T00:00:00.000Z').toISOString();

interface GerOrderDetailsMockParams {
  orderId: string;
}

export const getOrderDetailsMock = http.get<
  GerOrderDetailsMockParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@email.com',
      phone: '21965974166',
    },
    status: 'pending',
    createdAt: date,
    totalInCents: 2000,
    orderItems: [
      {
        id: 'order-1',
        priceInCents: 2000,
        product: {
          name: 'Produto-1',
        },
        quantity: 10,
      },
    ],
  });
});
