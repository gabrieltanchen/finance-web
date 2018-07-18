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

    let res;
    try {
      res = await get(this, 'ajax').raw(`${ENV.apiURL}/users/login/token`, {
        data: {
          data: {
            attributes: {
              token,
            },
          },
        },
        method: 'POST',
      });
    } catch (err) {
      return false;
    }

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

  async login(email, password) {
    let userId;
    let userToken;
    try {
      const res = await get(this, 'ajax').raw(`${ENV.apiURL}/users/login`, {
        data: {
          data: {
            attributes: {
              email,
              password,
            },
          },
        },
        method: 'POST',
      });

      if (res.jqXHR
            && res.jqXHR.status === 200
            && res.jqXHR.responseJSON
            && res.jqXHR.responseJSON.data
            && res.jqXHR.responseJSON.data.attributes) {
        userId = res.jqXHR.responseJSON.data.id;
        userToken = res.jqXHR.responseJSON.data.attributes.token;
      }

      if (!userId
            || !userToken) {
        throw new Error('ID or token not returned.');
      }

      this.setToken(userId, userToken);
    } catch (err) {
      throw new Error('Invalid email/password combination.');
    }
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
