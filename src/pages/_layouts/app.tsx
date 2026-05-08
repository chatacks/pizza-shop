import { Outlet } from 'react-router';

export function AppLayout() {
  return (
    <div>
      <h1>cabeçalho doideira</h1>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
