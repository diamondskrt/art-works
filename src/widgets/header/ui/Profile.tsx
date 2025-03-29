'use client';

import { UserIcon } from 'lucide-react';
import Link from 'next/link';

import { Button } from '~/components/button';
import { useAuth } from '~/providers/auth-provider';

import { UserMenu } from './UserMenu';

function Profile() {
  const { user } = useAuth();

  return user ? (
    <UserMenu />
  ) : (
    <Link href="/auth/sign-in">
      <Button variant="outline">
        <UserIcon />
      </Button>
    </Link>
  );
}

export { Profile };
