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

describe('Acceptance | logged in redirects', function() {
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

  it('should redirect away from /', function() {
    visit('/');
    return andThen(() => {
      expect(currentURL()).to.equal('/dashboard');
    });
  });

  it('can visit /dashboard', function() {
    visit('/dashboard');
    return andThen(() => {
      expect(currentURL()).to.equal('/dashboard');
    });
  });

  it('should redirect away from /login', function() {
    visit('/login');
    return andThen(() => {
      expect(currentURL()).to.equal('/dashboard');
    });
  });

  it('should redirect away from /sign-up', function() {
    visit('/sign-up');
    return andThen(() => {
      expect(currentURL()).to.equal('/dashboard');
    });
  });
});
