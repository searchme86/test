import { createContext, ReactElement, SetStateAction, useState } from 'react';

interface AuthProviderInterface {
  children: ReactElement;
}

interface AuthTokenShape {
  pwd: string;
  roles: number[];
  accessToken: string;
  user: string;
}

interface ContextAuthType {
  auth: AuthTokenShape;
  setAuth: React.Dispatch<SetStateAction<AuthTokenShape>>;
}

const ContextInitialValue: AuthTokenShape = {
  pwd: '',
  roles: [],
  accessToken: '',
  user: '',
};

const AuthContext = createContext<ContextAuthType>({
  auth: ContextInitialValue,
  setAuth: () => null,
});

export const AuthProvider = ({ children }: AuthProviderInterface) => {
  const [auth, setAuth] =
    useState<ContextAuthType['auth']>(ContextInitialValue);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
