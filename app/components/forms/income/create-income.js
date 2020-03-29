import Component from '@ember/component';
import {
  computed,
  get,
  set,
} from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  ajax: service(),
  errors: null,
  householdMemberName: '',

  disableSubmit: computed(
    'income.{isDirty,isInvalid}',
    function() {
      return !get(this, 'income.isDirty')
        || get(this, 'income.isInvalid');
    },
  ),

  actions: {
    async selectHouseholdMember(householdMember) {
      get(this, 'householdMemberSelected')(householdMember.id);
      set(this, 'householdMemberName', householdMember.name);
    },

    async submit() {
      set(this, 'errors', null);
      const income = get(this, 'income');
      try {
        await income.save();
        get(this, 'incomeCreated')();
      } catch (err) {
        let errors = 'Unable to create income.';
        if (err && err.errors) {
          errors = err.errors.map((error) => {
            return error.detail;
          });
        }
        set(this, 'errors', errors);
      }
    },
  },
});
