import {
  describe,
  it,
  beforeEach,
  afterEach,
} from 'mocha';
import { expect } from 'chai';
import startApp from 'finance-web/tests/helpers/start-app';
import destroyApp from 'finance-web/tests/helpers/destroy-app';
import { get } from '@ember/object';

describe('Acceptance | log out redirect', function() {
  let application;

  beforeEach(function() {
    application = startApp();
    const container = application.__container__;
    const session = container.lookup('service:session');
    session.logout();
    get(session, 'cookie').setCookie('token', 'token');
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('should redirect when logging out', function() {
    visit('/dashboard');
    click('#menu-logout');
    return andThen(() => {
      expect(currentURL()).to.equal('/');
    });
  });
});
