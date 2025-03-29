import { User } from '~/api/auth';
import { Nullable } from '~/model';

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthContextType = {
  user: Nullable<User>;
  loading: boolean;
  login: (data: { email: string; password: string }) => void;
  logout: () => void;
};

export type { AuthContextType, AuthProviderProps };
