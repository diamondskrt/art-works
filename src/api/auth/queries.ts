import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getCurrentUser, loginUser, logoutUser } from './auth';
import { LoginPayload } from './model';

const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: LoginPayload) => loginUser(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUser'] });
    },
  });
};

const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUser'] });
    },
    onError: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUser'] });
    },
  });
};

const useGetCurrentUser = () => {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: getCurrentUser,
    retry: false,
  });
};

export { useLogin, useLogout, useGetCurrentUser };
