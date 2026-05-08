import { Outlet } from 'react-router';

export function AuthLayout() {
  return (
    <div>
      <h1>cabeçalho doideira auth</h1>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
