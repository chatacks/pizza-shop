import { api } from '@/lib/axios';

export interface Order {
  orderId: string;
  createdAt: Date;
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered';
  customerName: string;
  total: number;
}

interface GetOrdersResponse {
  orders: Order[];
  meta: {
    pageIndex: number;
    perPage: number;
    totalCount: number;
  };
}

export async function getOrders() {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex: 0,
    },
  });

  return response.data;
}
