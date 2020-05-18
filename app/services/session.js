import Service, { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SessionService extends Service {
  @service store;
  @tracked authToken;

  async isLoggedIn() {
    if (this.authToken) {
      return true;
    }
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)authToken\s*\=\s*([^;]*).*$)|^.*$/, '$1');
    if (!token) {
      return false;
    }
    try {
      const loginToken = this.store.createRecord('login-token', {
        token,
      });
      await loginToken.save();
      this.authToken = loginToken.token;
      return true;
    } catch {
      return false;
    }
  }

  async login(email, password) {
    const result = {
      errors: [],
      success: false,
    };
    try {
      const loginUser = this.store.createRecord('login-user', {
        email,
        password,
      });
      await loginUser.save();
      this.authToken = loginUser.token;
      document.cookie = `authToken=${loginUser.token}; expires=${new Date((new Date()).getTime() + 60 * 60 * 1000).toUTCString()}`;
      result.success = true;
    } catch (err) {
      if (err && err.errors) {
        for (const error of err.errors) {
          result.errors.push(error.detail);
        }
      } else {
        throw err;
      }
    }

    return result;
  }
}
