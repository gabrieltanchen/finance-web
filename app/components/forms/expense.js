import { A } from '@ember/array';
import { action, set } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import ENV from 'finance-web/config/environment';

export default class FormsExpenseComponent extends Component {
  @service session;
  @service store;
  @tracked errors = [];
  attachments = A([]);

  @action
  attachmentSelected(index, file) {
    this.attachments[index].file = file;
  }

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
    this.attachments.pushObject({
      attachment: newAttachment,
      file: null,
    });
  }

  @action
  async save(e) {
    e.preventDefault();
    try {
      await this.args.expense.save();
      for (const attachment of this.attachments) {
        await attachment.attachment.save();
        await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          const fd = new FormData();
          xhr.open('POST', `${ENV.apiURL}/attachments/${attachment.attachment.id}/upload`);
          xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 204) {
              resolve();
            } else if (xhr.readyState === 4) {
              reject(new Error(xhr.responseText));
            }
          };
          xhr.setRequestHeader('Authorization', `Bearer ${this.session.authToken}`);
          fd.append('file', attachment.file);
          xhr.send(fd);
        });
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
