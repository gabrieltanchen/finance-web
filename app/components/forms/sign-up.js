import Component from '@ember/component';
import { computed, get, set } from '@ember/object';

export default Component.extend({
  errors: null,

  disableSubmit: computed(
    'user.{isDirty,isInvalid}',
    function() {
      return !get(this, 'user.isDirty')
        || get(this, 'user.isInvalid');
    },
  ),

  actions: {
    async submit() {
      set(this, 'errors', null);
      const user = get(this, 'user');
      try {
        await user.save();
        get(this, 'userCreated')(get(user, 'id'), get(user, 'token'));
      } catch (err) {
        let errors = ['Sign up failed.'];
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
