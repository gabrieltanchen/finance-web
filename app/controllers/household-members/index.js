import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';
import { set } from '@ember/object';
import HouseholdMemberValidations from '../../validations/household-member';

export default Controller.extend({
  queryParams: ['create', 'limit', 'page'],
  meta: null,
  tableColumns: [{
    isLink: true,
    linkParam: 'id',
    linkTo: 'household-members.show',
    name: 'Name',
    propertyName: 'name',
  }, {
    name: 'Created At',
    propertyName: 'created_at',
  }],
  householdMembers: alias('model.householdMembers'),
  HouseholdMemberValidations,
  newHouseholdMember: alias('model.newHouseholdMember'),

  actions: {
    closeCreateForm() {
      set(this, 'create', null);
    },
    showCreateForm() {
      set(this, 'create', true);
    },
  },
});
