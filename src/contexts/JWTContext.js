import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import { isValidToken, setSession } from '../utils/jwt';
import { axiosApi, axiosGet, axiosPost } from '../axios/config';
import { apiRoutes } from '../axios/apiRoutes';

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  LOGIN: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
  REGISTER: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const AuthContext = createContext({
  ...initialState,
  method: 'jwt',
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
});

AuthProvider.propTypes = {
  children: PropTypes.node,
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);

          const user = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));

          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const login = async (email, password, isStudent) => {
    const response = await axiosPost(isStudent ? apiRoutes.AUTH.USER_LOGIN : apiRoutes.AUTH.ADMIN_LOGIN, {
      email,
      password,
    });
    const { token, user } = response.data;
    localStorage.setItem('user', JSON.stringify(user));

    setSession(token);
    dispatch({
      type: 'LOGIN',
      payload: {
        user,
      },
    });
  };

  const logout = async () => {
    setSession(null);
    localStorage.removeItem('user');
    dispatch({ type: 'LOGOUT' });
  };

  const register = async (email, password, name) => {
    const response = await axiosPost(apiRoutes.AUTH.ADMIN_REGISTER, {
      email,
      password,
      name,
    });
    const { token, user } = response.data;

    window.localStorage.setItem('accessToken', token);
    dispatch({
      type: 'REGISTER',
      payload: {
        user,
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
