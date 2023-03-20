/* eslint-disable no-debugger */
class TokenService {
  setToken(key: string) { // string
    sessionStorage.setItem('token', key);
  }
  getToken() {
    return sessionStorage.getItem('token');
  }
  removeToken() {
    sessionStorage.removeItem('token');
  }
}
export default new TokenService();
