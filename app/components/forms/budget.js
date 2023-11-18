import { action, set } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class FormsBudgetComponent extends Component {
  @service store;
  @tracked errors = [];

  monthOptions = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  yearOptions = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];

  get selectedMonth() {
    return this.monthOptions[this.args.budget.month];
  }

  @action setMonth(month) {
    set(this, 'args.budget.month', this.monthOptions.indexOf(month));
  }

  @action
  setYear(year) {
    set(this, 'args.budget.year', year);
  }

  @action
  selectSubcategory(subcategory) {
    set(this, 'args.budget.subcategory', subcategory);
  }

  @action updateSubcategorySearch(searchTerm) {
    return this.store.query('subcategory', {
      search: searchTerm,
    });
  }

  @action
  async save(e) {
    e.preventDefault();
    try {
      await this.args.budget.save();
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
