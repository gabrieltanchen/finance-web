import { module, test } from 'qunit';
import {
  click,
  currentURL,
  fillIn,
  triggerEvent,
  visit,
} from '@ember/test-helpers';
import { get } from '@ember/object';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | create income', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    get(session, 'cookie').setCookie('token', 'token');
  });

  test('should update create query param', async function(assert) {
    await visit('/income');
    await click('#show-create-income-form-button');
    assert.equal(currentURL(), '/income?create=true');
  });

  test('should show all amount errors', async function(assert) {
    await visit('/income');
    await click('#show-create-income-form-button');
    await triggerEvent('#create-income-amount', 'blur');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 2);
    assert.equal(errors[0].textContent.trim(), 'Amount must be a number');
    assert.equal(errors[1].textContent.trim(), 'Amount can\'t be blank');
    assert.equal(currentURL(), '/income?create=true');
  });

  test('should show amount greater than 0 error', async function(assert) {
    await visit('/income');
    await click('#show-create-income-form-button');
    await fillIn('#create-income-amount', '-1');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Amount must be greater than or equal to 0');
    assert.equal(currentURL(), '/income?create=true');
  });

  test('should show error from api', async function(assert) {
    await visit('/income');
    await click('#show-create-income-form-button');
    await fillIn('#create-income-date', '2018-01-01');
    await fillIn('#create-income-description', 'Error Income');
    await fillIn('#create-income-amount', '1');
    await click('#create-income-button');
    const errors = this.element.querySelectorAll('.alert');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Test error.');
    assert.equal(currentURL(), '/income?create=true');
  });

  test('should close create income form on successful creation', async function(assert) {
    await visit('/income');
    await click('#show-create-income-form-button');
    await fillIn('#create-income-date', '2018-01-01');
    await fillIn('#create-income-description', 'New Income');
    await fillIn('#create-income-amount', '1');
    await click('#create-income-button');
    assert.equal(currentURL(), '/income');
  });
});
