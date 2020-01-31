import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import IncomeValidations from '../../validations/income';

export default Controller.extend({
  queryParams: ['create', 'limit', 'page'],
  meta: null,
  tableColumns: [{
    isLink: true,
    linkParam: 'id',
    linkTo: 'income.show',
    name: 'Date',
    propertyName: 'date',
  }, {
    name: 'Member',
    propertyName: 'household_member.name',
  }, {
    name: 'Description',
    propertyName: 'description',
  }, {
    name: 'Amount',
    propertyName: 'amount_str',
  }],
  householdMembers: alias('model.householdMembers'),
  incomes: alias('model.incomes'),
  newIncome: alias('model.newIncome'),
  IncomeValidations,

  actions: {
    closeCreateForm() {
      set(this, 'create', null);
    },
    async householdMemberSelected(householdMemberId) {
      const householdMember = await get(this, 'store').findRecord('household-member', householdMemberId);
      set(get(this, 'newIncome'), 'household_member', householdMember);
    },
    showCreateForm() {
      set(this, 'create', true);
    },
  },
});
