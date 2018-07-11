import $ from 'jquery';
import { computed, get, set } from '@ember/object';
import Service, { inject as service } from '@ember/service';
import ENV from '../config/environment';

export default Service.extend({
  ajax: service(),
  userId: null,

  loggedIn: computed('userId', function() {
    return !!get(this, 'userId');
  }),

  async isLoggedIn() {
    const token = get(this, 'cookie').getCookie('token');
    if (get(this, 'userId')) {
      return true;
    }
    if (!token) {
      return false;
    }

    const res = await get(this, 'ajax').raw(`${ENV.apiURL}/users/login/token`, {
      data: {
        data: {
          attributes: {
            token,
          },
        },
      },
      method: 'POST',
    });
    if (res.jqXHR
          && res.jqXHR.status === 200
          && res.jqXHR.responseJSON
          && res.jqXHR.responseJSON.data
          && res.jqXHR.responseJSON.data.id) {
      this.setToken(res.jqXHR.responseJSON.data.id, token);
      return true;
    }

    return false;
  },

  logout() {
    set(this, 'userId', null);
    get(this, 'cookie').removeCookie('token');
    $.ajaxSetup({
      headers: {
        'Authorization': '',
      },
    });
  },

  setToken(userId, token) {
    set(this, 'userId', userId);
    get(this, 'cookie').setCookie('token', token);
    $.ajaxSetup({
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  },
});
