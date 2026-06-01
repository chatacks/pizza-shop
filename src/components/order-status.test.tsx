import { render, screen } from '@testing-library/react';

import { OrderStatus } from '@/pages/app/orders/order-status';

describe('Order Status', () => {
  it('should display the right text when order status is "pending"', () => {
    render(<OrderStatus status="pending" />);

    const statusText = screen.getByText('Pendente');
    const badgeElement = screen.getByTestId('badge');

    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('h-2 w-2 rounded-full bg-slate-400');
    expect(statusText).toBeInTheDocument();
  });

  it('should display the right text when order status is "canceled"', () => {
    render(<OrderStatus status="canceled" />);

    const statusText = screen.getByText('Cancelado');
    const badgeElement = screen.getByTestId('badge');

    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('h-2 w-2 rounded-full bg-red-500');
    expect(statusText).toBeInTheDocument();
  });

  it('should display the right text when order status is "delivered"', () => {
    render(<OrderStatus status="delivered" />);

    const statusText = screen.getByText('Entregue');
    const badgeElement = screen.getByTestId('badge');

    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('h-2 w-2 rounded-full bg-emerald-500');
    expect(statusText).toBeInTheDocument();
  });

  it('should display the right text when order status is "processing"', () => {
    render(<OrderStatus status="processing" />);

    const statusText = screen.getByText('Em preparo');
    const badgeElement = screen.getByTestId('badge');

    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('h-2 w-2 rounded-full bg-amber-500');
    expect(statusText).toBeInTheDocument();
  });

  it('should display the right text when order status is "delivering"', () => {
    render(<OrderStatus status="delivering" />);

    const statusText = screen.getByText('Em entrega');
    const badgeElement = screen.getByTestId('badge');

    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('h-2 w-2 rounded-full bg-amber-500');
    expect(statusText).toBeInTheDocument();
  });
});
