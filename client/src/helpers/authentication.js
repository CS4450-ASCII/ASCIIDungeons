import { AUTH_TOKEN } from '../constants';

function setAccessToken(token) {
  localStorage.setItem(AUTH_TOKEN, token);
  window.location = '/';
}

function logout() {
  localStorage.removeItem(AUTH_TOKEN);
  window.location = '/';
}

const authHelper = {
  setAccessToken,
  logout
};
export default authHelper;
