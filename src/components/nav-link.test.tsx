import { render, screen } from '@testing-library/react';
import { createRoutesStub } from 'react-router';

import { NavLink } from './nav-link';

describe('NavLink', () => {
  it('should highlight the nav link when the is the current page link', () => {
    const Stub = createRoutesStub([
      {
        path: '/orders',
        Component: () => (
          <>
            <NavLink to="/orders" />
          </>
        ),
      },
    ]);

    render(<Stub initialEntries={['/orders']} />);

    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('data-current', 'true');
    expect(link).toHaveAttribute('href', '/orders');
  });
});
