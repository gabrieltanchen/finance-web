import {
  describe,
  it,
  beforeEach,
  afterEach,
} from 'mocha';
import { assert, expect } from 'chai';
import startApp from 'finance-web/tests/helpers/start-app';
import destroyApp from 'finance-web/tests/helpers/destroy-app';

describe('Acceptance | log in', function() {
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

  it('should show all email errors', function() {
    visit('/login');
    triggerEvent('#log-in-email', 'blur');
    return andThen(() => {
      expect(currentURL()).to.equal('/login');
      assert.include(find('p.validated-input-error').text(), 'Email must be a valid email address');
      assert.include(find('p.validated-input-error').text(), 'Email can\'t be blank');
    });
  });

  it('should show valid email error', function() {
    visit('/login');
    fillIn('#log-in-email', 'hello');
    return andThen(() => {
      expect(currentURL()).to.equal('/login');
      assert.include(find('p.validated-input-error').text(), 'Email must be a valid email address');
      assert.notInclude(find('p.validated-input-error').text(), 'Email can\'t be blank');
    });
  });

  it('should show all password errors', function() {
    visit('/login');
    triggerEvent('#log-in-password', 'blur');
    return andThen(() => {
      expect(currentURL()).to.equal('/login');
      assert.include(find('p.validated-input-error').text(), 'Password is too short (minimum is 8 characters)');
      assert.include(find('p.validated-input-error').text(), 'Password can\'t be blank');
    });
  });

  it('should show password length error', function() {
    visit('/login');
    fillIn('#log-in-password', 'a');
    return andThen(() => {
      expect(currentURL()).to.equal('/login');
      assert.include(find('p.validated-input-error').text(), 'Password is too short (minimum is 8 characters)');
      assert.notInclude(find('p.validated-input-error').text(), 'Password can\'t be blank');
    });
  });

  it('should show error from api', function() {
    visit('/login');
    fillIn('#log-in-email', 'hello@error.com');
    fillIn('#log-in-password', 'password');
    click('#log-in-button');
    return andThen(() => {
      expect(currentURL()).to.equal('/login');
      assert.include(find('.alert').text(), 'Test error.');
    });
  });

  it('should go to dashboard on successful log in', function() {
    visit('/login');
    fillIn('#log-in-email', 'hello@mail.com');
    fillIn('#log-in-password', 'password');
    click('#log-in-button');
    return andThen(() => {
      expect(currentURL()).to.equal('/dashboard');
    });
  });
});
