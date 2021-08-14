import { action, set } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class FormsDepositComponent extends Component {
  @service store;
  @tracked errors = [];

  @action
  selectFund(fund) {
    set(this, 'args.deposit.fund', fund);
  }

  @action
  updateFundSearch(searchTerm) {
    return this.store.query('fund', {
      search: searchTerm,
    });
  }

  @action
  dateSelected(date) {
    set(this, 'args.deposit.date', date.toISOString());
  }

  @action
  async save(e) {
    e.preventDefault();
    try {
      await this.args.deposit.save();
      this.args.saveSuccessful();
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
