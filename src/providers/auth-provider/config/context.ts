import { createContext } from 'react';

import { AuthContextType } from '../model';

const AuthContext = createContext<AuthContextType | null>(null);

export { AuthContext };
