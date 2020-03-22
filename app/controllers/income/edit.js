import Controller from '@ember/controller';
import { computed, get, set } from '@ember/object';
import { alias } from '@ember/object/computed';
import IncomeValidations from '../../validations/income';

export default Controller.extend({
  householdMember: alias('model.householdMember'),
  householdMembers: alias('model.householdMembers'),
  income: alias('model.income'),
  IncomeValidations,
  errors: null,

  householdMemberName: computed('householdMember.name', function() {
    return get(this, 'householdMember.name');
  }),

  actions: {
    async householdMemberSelected(householdMemberId) {
      const householdMember = await get(this, 'store').findRecord('household-member', householdMemberId);
      set(get(this, 'income'), 'household_member', householdMember);
    },
    incomeSaved() {
      const income = get(this, 'income');
      this.transitionToRoute('income.show', income.id);
    },
  },
});
