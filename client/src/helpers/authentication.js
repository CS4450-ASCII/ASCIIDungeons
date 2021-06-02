import { AUTH_TOKEN } from '../constants';

export const setAccessToken = token => {
  localStorage.setItem(AUTH_TOKEN, token);
  window.location = '/';
};
