import { createContext, ReactElement, useState } from 'react';

interface AuthProviderInterface {
  children: ReactElement;
}

interface AuthProps {
  auth: {
    user: string;
    pwd: string;
    roles: number[];
    accessToken: string;
  };
}

const AuthContext = createContext({} as AuthProps);

interface Something {
  auth: AuthProps['auth'];
  setAuth: (auth: AuthProps) => void;
}

export const AuthProvider = ({ children }: AuthProviderInterface) => {
  const [auth, setAuth] = useState<Something>({} as Something);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
