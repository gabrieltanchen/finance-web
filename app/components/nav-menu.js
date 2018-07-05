import Component from '@ember/component';
import { computed, set } from '@ember/object';
import jQuery from 'jquery';

export default Component.extend({
  responsiveMenu: null,
  responsiveToggle: null,

  menuItems: computed(function() {
    return [{
      label: 'Sign Up',
    }, {
      label: 'Login',
    }];
  }),

  didInsertElement() {
    const responsiveMenu = new Foundation.ResponsiveMenu(jQuery('.top-bar'));
    const responsiveToggle = new Foundation.ResponsiveToggle(jQuery('.title-bar'), {
      hideFor: 'large',
    });
    set(this, 'responsiveMenu', responsiveMenu);
    set(this, 'responsiveToggle', responsiveToggle);
  },
});
