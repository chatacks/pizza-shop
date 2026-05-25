import { api } from '@/lib/axios';

interface ResgisterRestaurant {
  restaurantName: string;
  managerName: string;
  phone: string;
  email: string;
}

export async function registerRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: ResgisterRestaurant) {
  await api.post('/restaurants', {
    restaurantName,
    managerName,
    email,
    phone,
  });
}
