'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState, useMemo } from 'react';

import { useLogout, useLogin, useGetCurrentUser, User } from '~/api/auth';
import { Nullable } from '~/model';

import { AuthContext } from '../config';
import { AuthProviderProps } from '../model';

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const [user, setUser] = useState<Nullable<User>>(null);
  const [loading, setLoading] = useState(true);

  const { mutateAsync: login } = useLogin();
  const { mutateAsync: logout } = useLogout();
  const { data: currentUser, isError } = useGetCurrentUser();

  useEffect(() => {
    if (!currentUser) return;
    setUser(currentUser);
    setLoading(false);
  }, [currentUser]);

  useEffect(() => {
    if (!isError) return;
    setUser(null);
  }, [isError, router]);

  const contextValue = useMemo(
    () => ({
      user,
      loading,
      login,
      logout,
    }),
    [user, loading, login, logout]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
