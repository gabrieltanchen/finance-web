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

module('Acceptance | create budget', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    get(session, 'cookie').setCookie('token', 'token');
  });

  test('should update create query param', async function(assert) {
    await visit('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/budgets');
    await click('#show-create-budget-form-button');
    assert.equal(currentURL(), '/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/budgets?create=true');
  });

  test('should show all budget errors', async function(assert) {
    await visit('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/budgets');
    await click('#show-create-budget-form-button');
    await triggerEvent('#create-budget-budget', 'blur');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 2);
    assert.equal(errors[0].textContent.trim(), 'Budget must be a number');
    assert.equal(errors[1].textContent.trim(), 'Budget can\'t be blank');
    assert.equal(currentURL(), '/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/budgets?create=true');
  });

  test('should show budget greater than 0 error', async function(assert) {
    await visit('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/budgets');
    await click('#show-create-budget-form-button');
    await fillIn('#create-budget-budget', '-1');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Budget must be greater than or equal to 0');
    assert.equal(currentURL(), '/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/budgets?create=true');
  });

  test('should show all year errors', async function(assert) {
    await visit('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/budgets');
    await click('#show-create-budget-form-button');
    await triggerEvent('#create-budget-year', 'blur');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 2);
    assert.equal(errors[0].textContent.trim(), 'Year must be a number');
    assert.equal(errors[1].textContent.trim(), 'Year can\'t be blank');
    assert.equal(currentURL(), '/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/budgets?create=true');
  });

  test('should show year greater than or equal to 2000 error', async function(assert) {
    await visit('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/budgets');
    await click('#show-create-budget-form-button');
    await fillIn('#create-budget-year', '1999');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Year must be greater than or equal to 2000');
    assert.equal(currentURL(), '/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/budgets?create=true');
  });

  test('should show year less than or equal to 2050 error', async function(assert) {
    await visit('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/budgets');
    await click('#show-create-budget-form-button');
    await fillIn('#create-budget-year', '2051');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Year must be less than or equal to 2050');
    assert.equal(currentURL(), '/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/budgets?create=true');
  });

  test('should show error from api', async function(assert) {
    await visit('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/budgets');
    await click('#show-create-budget-form-button');
    await fillIn('#create-budget-budget', '4');
    await fillIn('#create-budget-year', '2010');
    await click('#create-budget-month');
    await click('#select-month-0-option');
    await click('#create-budget-button');
    const errors = this.element.querySelectorAll('.alert');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Test error.');
    assert.equal(currentURL(), '/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/budgets?create=true');
  });

  test('should close create budget form on successful creation', async function(assert) {
    await visit('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/budgets');
    await click('#show-create-budget-form-button');
    await fillIn('#create-budget-budget', '1');
    await fillIn('#create-budget-year', '2010');
    await click('#create-budget-month');
    await click('#select-month-0-option');
    await click('#create-budget-button');
    assert.equal(currentURL(), '/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/budgets');
  });
});
