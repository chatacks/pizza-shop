import { http, HttpResponse } from 'msw';

import type { GetPopularProductsResponse } from '../get-popular-products';

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza Frango c/Catupiry', amount: 100 },
    { product: 'Pizza Calabresa Familia', amount: 90 },
    { product: 'Pizza Frango c/Queijo', amount: 80 },
    { product: 'Pizza Doce Banana Nevada', amount: 70 },
    { product: 'Pizza Doce Abacaxi com Chocolate', amount: 40 },
  ]);
});
