import { A } from '@ember/array';
import { action, set } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class FormsExpenseComponent extends Component {
  @service store;
  @tracked errors = [];
  attachments = A([]);

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
  addAttachment() {
    const newAttachment = this.store.createRecord('attachment', {
      expense: this.args.expense,
    });
    this.attachments.pushObject(newAttachment);
  }

  @action
  async save(e) {
    e.preventDefault();
    try {
      await this.args.expense.save();
      for (const attachment of this.attachments) {
        await attachment.save();
      }
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
