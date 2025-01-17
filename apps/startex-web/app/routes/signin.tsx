import { SignIn } from '@clerk/tanstack-start';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/signin')({
  component: RouteComponent,
});

export function RouteComponent() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <SignIn signUpUrl="/signup" />
    </div>
  );
}
