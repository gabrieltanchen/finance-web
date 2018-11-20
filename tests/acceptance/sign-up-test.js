import { module, test } from 'qunit';
import {
  click,
  currentURL,
  fillIn,
  triggerEvent,
  visit,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | sign up', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
  });

  test('should show all email errors', async function(assert) {
    await visit('/sign-up');
    await triggerEvent('#sign-up-email', 'blur');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 2);
    assert.equal(errors[0].textContent.trim(), 'Email must be a valid email address');
    assert.equal(errors[1].textContent.trim(), 'Email can\'t be blank');
  });

  test('should show valid email error', async function(assert) {
    await visit('/sign-up');
    await fillIn('#sign-up-email', 'hello');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Email must be a valid email address');
  });

  test('should show first name errors', async function(assert) {
    await visit('/sign-up');
    await triggerEvent('#sign-up-first-name', 'blur');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'First name can\'t be blank');
  });

  test('should show last name errors', async function(assert) {
    await visit('/sign-up');
    await triggerEvent('#sign-up-last-name', 'blur');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Last name can\'t be blank');
  });

  test('should show all password errors', async function(assert) {
    await visit('/sign-up');
    await triggerEvent('#sign-up-password', 'blur');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 2);
    assert.equal(errors[0].textContent.trim(), 'Password is too short (minimum is 8 characters)');
    assert.equal(errors[1].textContent.trim(), 'Password can\'t be blank');
  });

  test('should show password length error', async function(assert) {
    await visit('/sign-up');
    await fillIn('#sign-up-password', 'a');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Password is too short (minimum is 8 characters)');
  });

  test('should show error from api', async function(assert) {
    await visit('/sign-up');
    await fillIn('#sign-up-email', 'hello@error.com');
    await fillIn('#sign-up-first-name', 'John');
    await fillIn('#sign-up-last-name', 'Smith');
    await fillIn('#sign-up-password', 'password');
    await click('#sign-up-button');
    const errors = this.element.querySelectorAll('.alert');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Test error.');
  });

  test('should go to dashboard on successful sign up', async function(assert) {
    await visit('/sign-up');
    await fillIn('#sign-up-email', 'hello@mail.com');
    await fillIn('#sign-up-first-name', 'John');
    await fillIn('#sign-up-last-name', 'Smith');
    await fillIn('#sign-up-password', 'password');
    await click('#sign-up-button');
    assert.equal(currentURL(), '/dashboard');
  });
});
