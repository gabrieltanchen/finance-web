import { get } from '@ember/object';
import {
  click,
  currentURL,
  fillIn,
  visit,
} from '@ember/test-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | edit income', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    get(session, 'cookie').setCookie('token', 'token');
  });

  test('should fill in attributes in edit form', async function(assert) {
    await visit('/income/f347b74e-5980-4324-b629-98490f74ed53/edit');
    assert.equal(this.element.querySelector('#edit-income-household-member').value.trim(), 'Household Member 1');
    assert.equal(this.element.querySelector('#edit-income-date').value.trim(), '2020-01-01');
    assert.equal(this.element.querySelector('#edit-income-description').value.trim(), 'Hello world');
    assert.equal(this.element.querySelector('#edit-income-amount').value.trim(), '12.34');
    assert.equal(currentURL(), '/income/f347b74e-5980-4324-b629-98490f74ed53/edit');
  });

  test('should show all amount errors', async function(assert) {
    await visit('/income/f347b74e-5980-4324-b629-98490f74ed53/edit');
    await fillIn('#edit-income-amount', '');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 2);
    assert.equal(errors[0].textContent.trim(), 'Amount must be a number');
    assert.equal(errors[1].textContent.trim(), 'Amount can\'t be blank');
    assert.equal(currentURL(), '/income/f347b74e-5980-4324-b629-98490f74ed53/edit');
  });

  test('should show amount greater than 0 error', async function(assert) {
    await visit('/income/f347b74e-5980-4324-b629-98490f74ed53/edit');
    await fillIn('#edit-income-amount', '-1');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Amount must be greater than or equal to 0');
    assert.equal(currentURL(), '/income/f347b74e-5980-4324-b629-98490f74ed53/edit');
  });

  test('should show error from api', async function(assert) {
    await visit('/income/f347b74e-5980-4324-b629-98490f74ed53/edit');
    await fillIn('#edit-income-date', '2020-01-02');
    await fillIn('#edit-income-description', 'Error Income');
    await fillIn('#edit-income-amount', '23.45');
    await click('#save-income-button');
    const errors = this.element.querySelectorAll('.alert');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Test error.');
    assert.equal(currentURL(), '/income/f347b74e-5980-4324-b629-98490f74ed53/edit');
  });

  test('should redirect to /income/:uuid on successful save', async function(assert) {
    await visit('/income/f347b74e-5980-4324-b629-98490f74ed53/edit');
    await fillIn('#edit-income-date', '2020-01-02');
    await fillIn('#edit-income-description', 'Updated Income');
    await fillIn('#edit-income-amount', '23.45');
    await click('#save-income-button');
    assert.equal(currentURL(), '/income/f347b74e-5980-4324-b629-98490f74ed53');
  });
});
