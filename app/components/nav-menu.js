import Component from '@ember/component';
import { computed, get, set } from '@ember/object';
import { inject as service } from '@ember/service';
import $ from 'jquery';

export default Component.extend({
  session: service(),

  responsiveMenu: null,
  responsiveToggle: null,

  menuItems: computed('session.loggedIn', function() {
    if (get(this, 'session.loggedIn')) {
      return [{
        label: 'Categories',
        linkTo: 'categories.index',
      }, {
        label: 'Vendors',
        linkTo: 'vendors.index',
      }, {
        label: 'Members',
        linkTo: 'household-members.index',
      }, {
        action: 'logout',
        isAction: true,
        label: 'Logout',
        propertyId: 'menu-logout',
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

  actions: {
    logout() {
      get(this, 'logout')();
    },
  },
});
