import { api } from '@/lib/axios';

export interface Order {
  orderId: string;
  createdAt: Date;
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered';
  customerName: string;
  total: number;
}

interface GetOrdersQuery {
  pageIndex?: number | null;
}

interface GetOrdersResponse {
  orders: Order[];
  meta: {
    pageIndex: number;
    perPage: number;
    totalCount: number;
  };
}

export async function getOrders({ pageIndex }: GetOrdersQuery) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
    },
  });

  return response.data;
}
