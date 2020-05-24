import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { inject as service } from '@ember/service';

import ENV from '../config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  @service session;

  host = ENV.apiURL;
  namespace = '';

  get headers() {
    const headers = {};
    if (this.session.authToken) {
      headers.Authorization = `Bearer ${this.session.authToken}`;
    }
    return headers;
  }
}
