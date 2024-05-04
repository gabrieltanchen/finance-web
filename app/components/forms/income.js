import { action, set } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class FormsIncomeComponent extends Component {
  @service store;
  @tracked errors = [];

  @action
  selectEmployer(employer) {
    set(this, 'args.income.employer', employer);
  }

  @action
  selectHouseholdMember(householdMember) {
    set(this, 'args.income.householdMember', householdMember);
  }

  @action
  updateEmployerSearch(searchTerm) {
    return this.store.query('employer', {
      search: searchTerm,
    });
  }

  @action
  updateHouseholdMemberSearch(searchTerm) {
    return this.store.query('household-member', {
      search: searchTerm,
    });
  }

  @action
  dateSelected(date) {
    set(this, 'args.income.date', date.toISOString());
  }

  @action
  async save(e) {
    e.preventDefault();
    try {
      await this.args.income.save();
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
