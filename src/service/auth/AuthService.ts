/* eslint-disable no-debugger */
import TokenService from './TokenService';

class AuthService {
  logout() {
    this.removeUser();
    TokenService.removeToken();
  }
  setUser(data: { id: string; email: string; name: string; phoneNumber: string; }) {
    let userInfo = {
      id: data.id,
      email: data.email,
      name: data.name,
      phoneNumber: data.phoneNumber
    };
    sessionStorage.setItem('user', JSON.stringify(userInfo) || '{}');
  }
  getUser() {
    if(!TokenService.getToken()) {
      return null;
    }
    return JSON.parse(sessionStorage.getItem('user') || '{}');
  }
  removeUser() {
    sessionStorage.removeItem('user');
  }
}

export default new AuthService();
