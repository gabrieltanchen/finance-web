import Controller from '@ember/controller';
import { get } from '@ember/object';
import { alias } from '@ember/object/computed';
import HouseholdMemberValidations from '../../validations/household-member';

export default Controller.extend({
  householdMember: alias('model.householdMember'),
  HouseholdMemberValidations,
  errors: null,

  actions: {
    householdMemberSaved() {
      const householdMember = get(this, 'householdMember');
      this.transitionToRoute('household-members.show', householdMember.id);
    },
  },
});
