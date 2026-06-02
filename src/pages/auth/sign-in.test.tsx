import { QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { createRoutesStub } from 'react-router';

import { queryClient } from '@/lib/react-query';

import { SignIn } from './sign-in';

describe('Sign In', () => {
  it('should set default email input if email is present on search params', () => {
    const Stub = createRoutesStub([
      {
        path: '/sign-in',
        Component: () => (
          <QueryClientProvider client={queryClient}>
            <SignIn />
          </QueryClientProvider>
        ),
      },
    ]);

    render(<Stub initialEntries={['/sign-in?email=johndoe@email.com']} />);

    const emailInput = screen.getByRole('textbox') as HTMLInputElement;

    expect(emailInput.value).toEqual('johndoe@email.com');
  });
});
