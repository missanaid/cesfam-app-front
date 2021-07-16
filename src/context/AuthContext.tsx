import React, {createContext, useEffect, useReducer} from 'react';
import {LoginData, LoginResponse, Usuario} from '../interfaces/appInterfaces';
import {authReducer, AuthState} from './AuthReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import cesfamApi from '../api/cesfamApi';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: Usuario | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signIn: (loginData: LoginData) => void;
  logOut: () => void;
  removeError: () => void;
};

const authInicialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(authReducer, authInicialState);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');

    // No token, no autenticado
    if (!token) {
      return dispatch({type: 'notAuthenticated'});
    }

    // Hay token
    const resp = await cesfamApi.get('/');
    if (resp.status !== 200) {
      return dispatch({type: 'notAuthenticated'});
    }

    await AsyncStorage.setItem('token', resp.data.token);
    dispatch({
      type: 'signIn',
      payload: {
        token: resp.data.token,
        user: resp.data.usuario,
      },
    });
  };
  const signIn = async ({user, password}: LoginData) => {
    try {
      const {data} = await cesfamApi.post<LoginResponse>('/login', {
        user,
        password,
      });
      console.log(data);
      dispatch({
        type: 'signIn',
        payload: {
          token: data.token,
          user: data.usuario,
        },
      });

      await AsyncStorage.setItem('token', data.token);
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: 'addError',
        payload: error.response.data.msg || 'Usuario o Contraseña incorrectos',
      });
    }
  };

  const logOut = async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'logout'});
  };

  const removeError = () => {
    dispatch({type: 'removeError'});
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        logOut,
        removeError,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
