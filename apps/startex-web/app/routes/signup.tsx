import { SignUp } from '@clerk/tanstack-start';
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <SignUp signInUrl="/signin" />
    </div>
  );
}
