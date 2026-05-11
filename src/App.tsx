import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router';

import { Toaster } from './components/ui/sonner';
import { router } from './routes';

export function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
      <Toaster richColors />
    </HelmetProvider>
  );
}
