/* eslint-disable no-debugger */
import { formApi } from '../../utils/formApi';

class UserService {
  async getUserLogin(formdata:FormData) {
    const res = await formApi('/auth/getUserLogin', formdata);
    return res.data;
  }
}
export default new UserService();
