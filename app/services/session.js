import $ from 'jquery';
import { computed } from '@ember/object';
import ENV from '../config/environment';
import Service, { inject as service } from '@ember/service';

export default Service.extend({
  ajax: service(),
  userId: null,

  loggedIn: computed('userId', function() {
    return !!this.get('userId');
  }),

  async isLoggedIn() {
    const token = this.get('cookie').getCookie('token');
    if (this.get('userId')) {
      return true;
    }
    if (!token) {
      return false;
    }

    const res = await this.get('ajax').raw(`${ENV.apiURL}/users/login/token`, {
      data: {
        data: {
          attributes: {
            token,
          },
        },
      },
      method: 'POST',
    });
    console.log(res);
  },

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
