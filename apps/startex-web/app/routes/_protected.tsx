import { createFileRoute, Outlet } from '@tanstack/react-router';
import { useAuthGuard } from 'hooks/use-auth-guard';

export const Route = createFileRoute('/_protected')({
  component: RouteComponent,
});

function RouteComponent() {
  useAuthGuard();
  return <Outlet />;
}
