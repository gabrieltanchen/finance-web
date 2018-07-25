import {
  describe,
  it,
  beforeEach,
  afterEach,
} from 'mocha';
import { expect } from 'chai';
import startApp from 'finance-web/tests/helpers/start-app';
import destroyApp from 'finance-web/tests/helpers/destroy-app';

describe('Acceptance | logged out redirects', function() {
  let application;

  beforeEach(function() {
    application = startApp();
    const container = application.__container__;
    const session = container.lookup('service:session');
    session.logout();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('can visit /', function() {
    visit('/');
    return andThen(() => {
      expect(currentURL()).to.equal('/');
    });
  });

  it('should redirect away from /categories', function() {
    visit('/categories');
    return andThen(() => {
      expect(currentURL()).to.equal('/login');
    });
  });

  it('should redirect away from /dashboard', function() {
    visit('/dashboard');
    return andThen(() => {
      expect(currentURL()).to.equal('/login');
    });
  });

  it('can visit /login', function() {
    visit('/login');
    return andThen(() => {
      expect(currentURL()).to.equal('/login');
    });
  });

  it('can visit /sign-up', function() {
    visit('/sign-up');
    return andThen(() => {
      expect(currentURL()).to.equal('/sign-up');
    });
  });
});
