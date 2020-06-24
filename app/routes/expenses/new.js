import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class ExpensesNewRoute extends Route {
  @service session;
  queryParams = {
    householdMemberId: {
      refreshModel: true,
    },
    subcategoryId: {
      refreshModel: true,
    },
    vendorId: {
      refreshModel: true,
    },
  };

  async beforeModel() {
    if (!(await this.session.isLoggedIn())) {
      this.transitionTo('login');
    }
  }

  async model(params) {
    const expense = this.store.createRecord('expense');
    if (params.subcategoryId) {
      const subcategory = await this.store.findRecord('subcategory', params.subcategoryId);
      expense.subcategory = subcategory;
    }
    if (params.householdMemberId) {
      const householdMember = await this.store.findRecord('household-member', params.householdMemberId);
      expense.householdMember = householdMember;
    }
    if (params.vendorId) {
      const vendor = await this.store.findRecord('vendor', params.vendorId);
      expense.vendor = vendor;
    }
    return RSVP.hash({
      expense,
      householdMembers: this.store.findAll('household-member'),
      subcategories: this.store.findAll('subcategory'),
      vendors: this.store.findAll('vendor'),
    });
  }

  resetController(controller) {
    if (controller.expense && controller.expense.hasDirtyAttributes) {
      controller.expense.rollbackAttributes();
    }
  }
}
