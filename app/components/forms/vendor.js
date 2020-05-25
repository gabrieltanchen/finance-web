import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class FormsVendorComponent extends Component {
  @tracked errors = [];

  @action
  async save(e) {
    e.preventDefault();
    try {
      await this.args.vendor.save();
      this.args.saveSuccessful(this.args.vendor.id);
    } catch (err) {
      let errors = ['An error occurred. Please try again later.'];
      if (err && err.errors) {
        errors = err.errors.map((error) => {
          return error.detail;
        });
      }
      this.errors = errors;
    }
  }
}
