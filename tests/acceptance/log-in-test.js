import { module, test } from 'qunit';
import {
  click,
  currentURL,
  fillIn,
  triggerEvent,
  visit,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | log in', function(hooks) {
  setupApplicationTest(hooks);

  test('should show all email errors', async function(assert) {
    await visit('/login');
    await triggerEvent('#log-in-email', 'blur');
    assert.equal(currentURL(), '/login');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 2);
    assert.equal(errors[0].textContent.trim(), 'Email must be a valid email address');
    assert.equal(errors[1].textContent.trim(), 'Email can\'t be blank');
  });

  test('should show valid email error', async function(assert) {
    await visit('/login');
    await fillIn('#log-in-email', 'hello');
    assert.equal(currentURL(), '/login');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Email must be a valid email address');
  });

  test('should show all password errors', async function(assert) {
    await visit('/login');
    await triggerEvent('#log-in-password', 'blur');
    assert.equal(currentURL(), '/login');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 2);
    assert.equal(errors[0].textContent.trim(), 'Password is too short (minimum is 8 characters)');
    assert.equal(errors[1].textContent.trim(), 'Password can\'t be blank');
  });

  test('should show password length error', async function(assert) {
    await visit('/login');
    await fillIn('#log-in-password', 'a');
    assert.equal(currentURL(), '/login');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Password is too short (minimum is 8 characters)');
  });

  test('should show error from api', async function(assert) {
    await visit('/login');
    await fillIn('#log-in-email', 'hello@error.com');
    await fillIn('#log-in-password', 'password');
    await click('#log-in-button');
    assert.equal(currentURL(), '/login');
    const errors = this.element.querySelectorAll('.alert');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Test error.');
  });

  test('should go to dashboard on successful log in', async function(assert) {
    await visit('/login');
    await fillIn('#log-in-email', 'hello@mail.com');
    await fillIn('#log-in-password', 'password');
    await click('#log-in-button');
    assert.equal(currentURL(), '/dashboard');
  });
});
