import Component from '@ember/component';
import {
  computed,
  get,
  set,
} from '@ember/object';

export default Component.extend({
  errors: null,
  householdMemberName: '',

  disableSubmit: computed('income.isInvalid', function() {
    return get(this, 'income.isInvalid');
  }),

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
        get(this, 'incomeSaved')();
      } catch (err) {
        let errors = ['Unable to save income.'];
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
