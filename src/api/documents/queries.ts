import { useQuery } from '@tanstack/react-query';

import { getDocuments } from './documents';

export const useDocuments = () =>
  useQuery({
    queryKey: ['documents'],
    queryFn: getDocuments,
    staleTime: 1000 * 60 * 5,
  });
