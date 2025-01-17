import { useAuth } from '@clerk/tanstack-start';
import { useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

export function useAuthGuard() {
  const { isLoaded, userId } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && userId == null) navigate({ to: '/signin' });
  }, [isLoaded]);
}
