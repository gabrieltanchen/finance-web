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

  it('should redirect away from /categories/:uuid', function() {
    visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee');
    return andThen(() => {
      expect(currentURL()).to.equal('/login');
    });
  });

  it('should redirect away from /categories/:uuid/expenses', function() {
    visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/expenses');
    return andThen(() => {
      expect(currentURL()).to.equal('/login');
    });
  });

  it('should redirect away from /categories/:uuid/subcategories', function() {
    visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/subcategories');
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
