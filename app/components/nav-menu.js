import Component from '@ember/component';
import { computed } from '@ember/object';
import jQuery from 'jquery';

export default Component.extend({
  responsiveMenu: null,
  responsiveToggle: null,
  didInsertElement() {
    const responsiveMenu = new Foundation.ResponsiveMenu(jQuery('.top-bar'));
    const responsiveToggle = new Foundation.ResponsiveToggle(jQuery('.title-bar'), {
      hideFor: 'large',
    });
    this.set('responsiveMenu', responsiveMenu);
    this.set('responsiveToggle', responsiveToggle);
  },

  menuItems: computed(function() {
    return [{
      label: 'Sign Up',
    }, {
      label: 'Login',
    }];
  }),
});
