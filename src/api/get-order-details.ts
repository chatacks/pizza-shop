import { api } from '@/lib/axios';

interface OrderItems {
  id: string;
  priceInCents: number;
  quantity: number;
  product: {
    name: string;
  };
}
export interface GetOrderDetailsResponse {
  id: string;
  createdAt: string;
  status: 'pending' | 'processing' | 'delivered' | 'canceled';
  totalInCents: number;
  customer: {
    name: string;
    phone: string | null;
    email: string;
  };
  orderItems: OrderItems[];
}

export async function getOrderDetails(orderId: string) {
  const response = await api.get<GetOrderDetailsResponse>(`/orders/${orderId}`);

  return response.data;
}
