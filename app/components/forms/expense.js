import { action, set } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import ENV from 'finance-web/config/environment';

export default class FormsExpenseComponent extends Component {
  @service session;
  @service store;
  @tracked errors = [];

  @action
  selectFund(fund) {
    set(this, 'args.expense.fund', fund);
  }

  @action
  selectHouseholdMember(householdMember) {
    set(this, 'args.expense.householdMember', householdMember);
  }

  @action
  selectSubcategory(subcategory) {
    set(this, 'args.expense.subcategory', subcategory);
  }

  @action
  selectVendor(vendor) {
    set(this, 'args.expense.vendor', vendor);
  }

  @action
  updateFundSearch(searchTerm) {
    return this.store.query('fund', {
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
  updateSubcategorySearch(searchTerm) {
    return this.store.query('subcategory', {
      search: searchTerm,
    });
  }

  @action
  updateVendorSearch(searchTerm) {
    return this.store.query('vendor', {
      search: searchTerm,
    });
  }

  @action
  dateSelected(date) {
    set(this, 'args.expense.date', date.toISOString());
  }

  @action
  async save(e) {
    e.preventDefault();
    try {
      await this.args.expense.save();
      const newAttachment = this.store.createRecord('attachment', {
        expense: this.args.expense,
      });
      newAttachment.name = 'hello';
      await newAttachment.save();
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

  @action
  async uploadPhoto(file) {
    try {
      const response = await file.upload({
        headers: {
          'Authorization': `Bearer ${this.session.authToken}`,
        },
        url: `${ENV.apiURL}/attachments/upload`,
      });
      console.log(response);
    } catch (err) {
      file.state = 'aborted';
      console.log(err);
    }
  }
}
