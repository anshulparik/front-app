import axios from 'axios';
import { LoginFormData, RegisterFormData } from './types';

const baseURL = `http://localhost:5000`;

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
});

export const userApis = {
  addUser: (user: Omit<RegisterFormData, 'confirmPassword'>): Promise<any> => {
    const url = `/auth/register`;
    return instance.post(url, user);
  },

  login: (user: LoginFormData): Promise<any> => {
    const url = `/auth/login`;
    return instance.post(url, user);
  },
};
