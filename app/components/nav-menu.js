import Component from '@ember/component';
import { computed, set } from '@ember/object';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Component.extend({
  responsiveMenu: null,
  responsiveToggle: null,
  session: service(),

  actions: {
    logout() {
      this.get('logout')();
    },
  },

  menuItems: computed('session.loggedIn', function() {
    if (this.get('session.loggedIn')) {
      return [{
        action: 'logout',
        isAction: true,
        label: 'Logout',
      }];
    }
    return [{
      label: 'Sign Up',
      linkTo: 'sign-up',
    }, {
      label: 'Login',
      linkTo: 'login',
    }];
  }),

  didInsertElement() {
    const responsiveMenu = new Foundation.ResponsiveMenu($('.top-bar'));
    const responsiveToggle = new Foundation.ResponsiveToggle($('.title-bar'), {
      hideFor: 'large',
    });
    set(this, 'responsiveMenu', responsiveMenu);
    set(this, 'responsiveToggle', responsiveToggle);
  },
});
