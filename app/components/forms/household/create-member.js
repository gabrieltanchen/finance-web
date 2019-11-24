import Component from '@ember/component';
import { computed, get, set } from '@ember/object';

export default Component.extend({
  errors: null,

  disableSubmit: computed(
    'householdMember.{isDirty,isInvalid}',
    function() {
      return !get(this, 'householdMember.isDirty')
        || get(this, 'householdMember.isInvalid');
    },
  ),

  actions: {
    async submit() {
      set(this, 'errors', null);
      const householdMember = get(this, 'householdMember');
      try {
        await householdMember.save();
        get(this, 'householdMemberCreated')();
      } catch (err) {
        let errors = 'Unable to create household member.';
        if (err && errors) {
          errors = err.errors.map((error) => {
            return error.detail;
          });
        }
        set(this, 'errors', errors);
      }
    },
  },
});
