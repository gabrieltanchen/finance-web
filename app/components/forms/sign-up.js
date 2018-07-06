import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  errors: null,

  actions: {
    async submit() {
      this.set('errors', null);
      const user = this.get('user');
      try {
        await user.save();
        this.get('userCreated')(user.get('id'), user.get('token'));
      } catch (err) {
        let errors = ['Sign up failed.'];
        if (err && err.errors) {
          errors = err.errors.map((error) => {
            return error.detail;
          });
        }
        this.set('errors', errors);
      }
    },
  },

  disableSubmit: computed(
    'user.{isDirty,isInvalid}',
    function() {
      return !this.get('user.isDirty')
        || this.get('user.isInvalid');
    },
  ),
});
