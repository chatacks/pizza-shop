import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router';

import { ThemeProvider } from './components/theme/theme-provider';
import { Toaster } from './components/ui/sonner';
import { router } from './routes';

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
      <Toaster richColors />
    </HelmetProvider>
  );
}
