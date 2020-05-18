import Service, { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SessionService extends Service {
  @service store;
  @tracked authToken;

  async login(email, password) {
    let loginUser;
    const result = {
      errors: [],
      success: false,
    };
    try {
      loginUser = this.store.createRecord('login-user', {
        email,
        password,
      });
      await loginUser.save();
      this.authToken = loginUser.token;
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
