import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { gql, useLazyQuery, useMutation } from '@apollo/client';

interface User {
  name: string;
}

interface AuthContextData {
  token: string;
  login: (email: any, password: any) => Promise<void>;
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
  const [getUser, { data }] = useLazyQuery(gql`
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

  const logout = useCallback(() => {
    setToken('');
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
    <AuthContext.Provider value={{ token, login, user: data?.self, logout }}>
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
