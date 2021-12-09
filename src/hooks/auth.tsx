import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { gql, useLazyQuery, useMutation } from '@apollo/client';
import client from '../clients/apollo';

interface User {
  name: string;
}

interface AuthContextData {
  token: string;
  login: (email: string, password: string) => Promise<void>;
  signUp: (
    email: string,
    password: string,
    name: string,
    cpf: string
  ) => Promise<void>;
  logout: () => void;
  user?: User;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState('');

  const [loginQuery] = useMutation(gql`
    mutation login($user: LoginInput) {
      login(user: $user) {
        token
      }
    }
  `);
  const [signUpQuery] = useMutation(gql`
    mutation signup($user: UserInput) {
      signup(user: $user) {
        token
      }
    }
  `);
  const [getUser, { data, refetch }] = useLazyQuery(gql`
    {
      self {
        name
      }
    }
  `);

  const login = useCallback(
    async (email, password) => {
      const r = await loginQuery({
        variables: {
          user: {
            email,
            password,
          },
        },
      });
      setToken(r.data.login.token);
      localStorage.setItem('token', r.data.login.token);
    },
    [loginQuery]
  );

  const signUp = useCallback(
    async (email, password, name, cpf) => {
      const r = await signUpQuery({
        variables: {
          user: {
            email,
            password,
            name,
            cpf,
          },
        },
      });
      setToken(r.data.signup.token);
      localStorage.setItem('token', r.data.signup.token);
    },
    [signUpQuery]
  );

  const logout = useCallback(() => {
    setToken('');
    client.resetStore();
    localStorage.removeItem('token');
  }, []);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const getToken = async () => {
      const localToken = await localStorage.getItem('token');
      if (localToken) {
        setToken(localToken);
      }
    };
    getToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ token, login, user: data?.self, logout, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};

export { useAuth, AuthProvider };
