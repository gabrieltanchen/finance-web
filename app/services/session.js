import $ from 'jquery';
import { computed } from '@ember/object';
import Service, { inject as service } from '@ember/service';

export default Service.extend({
  ajax: service(),
  userId: null,

  loggedIn: computed('userId', function() {
    return !!this.get('userId');
  }),

  logout() {
    this.set('userId', null);
    this.get('cookie').removeCookie('token');
    $.ajaxSetup({
      headers: {
        'Authorization': '',
      },
    });
  },

  setToken(userId, token) {
    this.set('userId', userId);
    this.get('cookie').setCookie('token', token);
    $.ajaxSetup({
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  },
});
