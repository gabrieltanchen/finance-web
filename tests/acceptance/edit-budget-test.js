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

module('Acceptance | edit budget', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    get(session, 'cookie').setCookie('token', 'token');
  });

  test('should fill in attributes in edit form', async function(assert) {
    await visit('/budgets/af805297-150c-4c66-adc1-a457d62160a4/edit');
    assert.equal(this.element.querySelector('#edit-budget-year').value.trim(), '2019');
    assert.equal(this.element.querySelector('#edit-budget-month').value.trim(), '3');
    assert.equal(this.element.querySelector('#edit-budget-budget').value.trim(), '5.64');
    assert.equal(currentURL(), '/budgets/af805297-150c-4c66-adc1-a457d62160a4/edit');
  });

  test('should show all budget errors', async function(assert) {
    await visit('/budgets/af805297-150c-4c66-adc1-a457d62160a4/edit');
    await fillIn('#edit-budget-budget', '');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 2);
    assert.equal(errors[0].textContent.trim(), 'Budget must be a number');
    assert.equal(errors[1].textContent.trim(), 'Budget can\'t be blank');
    assert.equal(currentURL(), '/budgets/af805297-150c-4c66-adc1-a457d62160a4/edit');
  });

  test('should show budget greater than 0 error', async function(assert) {
    await visit('/budgets/af805297-150c-4c66-adc1-a457d62160a4/edit');
    await fillIn('#edit-budget-budget', '-1');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Budget must be greater than or equal to 0');
    assert.equal(currentURL(), '/budgets/af805297-150c-4c66-adc1-a457d62160a4/edit');
  });

  test('should show all year errors', async function(assert) {
    await visit('/budgets/af805297-150c-4c66-adc1-a457d62160a4/edit');
    await fillIn('#edit-budget-year', '');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 2);
    assert.equal(errors[0].textContent.trim(), 'Year must be a number');
    assert.equal(errors[1].textContent.trim(), 'Year can\'t be blank');
    assert.equal(currentURL(), '/budgets/af805297-150c-4c66-adc1-a457d62160a4/edit');
  });

  test('should show year greater than or equal to 2000 error', async function(assert) {
    await visit('/budgets/af805297-150c-4c66-adc1-a457d62160a4/edit');
    await fillIn('#edit-budget-year', '1999');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Year must be greater than or equal to 2000');
    assert.equal(currentURL(), '/budgets/af805297-150c-4c66-adc1-a457d62160a4/edit');
  });

  test('should show year less than or equal to 2050 error', async function(assert) {
    await visit('/budgets/af805297-150c-4c66-adc1-a457d62160a4/edit');
    await fillIn('#edit-budget-year', '2051');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Year must be less than or equal to 2050');
    assert.equal(currentURL(), '/budgets/af805297-150c-4c66-adc1-a457d62160a4/edit');
  });

  test('should show error from api', async function(assert) {
    await visit('/budgets/af805297-150c-4c66-adc1-a457d62160a4/edit');
    await fillIn('#edit-budget-budget', '4');
    await fillIn('#edit-budget-year', '2020');
    await click('#save-budget-button');
    const errors = this.element.querySelectorAll('.alert');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Test error.');
    assert.equal(currentURL(), '/budgets/af805297-150c-4c66-adc1-a457d62160a4/edit');
  });

  test('should redirect to /expenses/af805297-150c-4c66-adc1-a457d62160a4 on successful save', async function(assert) {
    await visit('/budgets/af805297-150c-4c66-adc1-a457d62160a4/edit');
    await fillIn('#edit-budget-budget', '800');
    await fillIn('#edit-budget-year', '2020');
    await click('#save-budget-button');
    assert.equal(currentURL(), '/budgets/af805297-150c-4c66-adc1-a457d62160a4');
  });
});
