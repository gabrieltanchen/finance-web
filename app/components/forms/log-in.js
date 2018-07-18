import Component from '@ember/component';
import { computed, get, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  errors: null,
  session: service(),

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
        await get(this, 'session').login(get(user, 'email'), get(user, 'password'));
        get(this, 'loggedIn')();
      } catch (err) {
        let errors = ['Sign up failed.'];
        if (err && err.message) {
          errors = [err.message];
        }
        set(this, 'errors', errors);
      }
    },
  },
});
