import Component from '@ember/component';
import { computed, get, set } from '@ember/object';

export default Component.extend({
  errors: null,

  disableSubmit: computed('householdMember.isInvalid', function() {
    return get(this, 'householdMember.isInvalid');
  }),

  actions: {
    async submit() {
      set(this, 'errors', null);
      const householdMember = get(this, 'householdMember');
      try {
        await householdMember.save();
        get(this, 'householdMemberSaved')();
      } catch (err) {
        let errors = ['Unable to save member.'];
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
