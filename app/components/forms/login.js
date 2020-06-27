import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class LoginFormComponent extends Component {
  @service session;
  @tracked email;
  @tracked errors = [];
  @tracked password;

  @action
  async login(e) {
    e.preventDefault();
    try {
      const loginResult = await this.session.login(this.email, this.password);
      if (loginResult.success) {
        this.args.loginSuccessful();
      } else {
        this.errors = loginResult.errors;
      }
    } catch (err) {
      this.errors = [
        'An error occurred. Please try again later.',
      ];
    }
  }
}
