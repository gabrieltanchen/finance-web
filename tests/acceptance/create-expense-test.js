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

module('Acceptance | create expense', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    get(session, 'cookie').setCookie('token', 'token');
  });

  test('should update create query param', async function(assert) {
    await visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/expenses');
    await click('#show-create-expense-form-button');
    assert.equal(currentURL(), '/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/expenses?create=true');
  });

  test('should show all amount errors', async function(assert) {
    await visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/expenses');
    await click('#show-create-expense-form-button');
    await triggerEvent('#create-expense-amount', 'blur');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 2);
    assert.equal(errors[0].textContent.trim(), 'Amount must be a number');
    assert.equal(errors[1].textContent.trim(), 'Amount can\'t be blank');
    assert.equal(currentURL(), '/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/expenses?create=true');
  });

  test('should show amount greater than 0 error', async function(assert) {
    await visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/expenses');
    await click('#show-create-expense-form-button');
    await fillIn('#create-expense-amount', '-1');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Amount must be greater than or equal to 0');
    assert.equal(currentURL(), '/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/expenses?create=true');
  });

  test('should show all reimbursed amount errors', async function(assert) {
    await visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/expenses');
    await click('#show-create-expense-form-button');
    await triggerEvent('#create-expense-reimbursed-amount', 'blur');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 2);
    assert.equal(errors[0].textContent.trim(), 'Reimbursed amount must be a number');
    assert.equal(errors[1].textContent.trim(), 'Reimbursed amount can\'t be blank');
    assert.equal(currentURL(), '/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/expenses?create=true');
  });

  test('should show reimbursed amount greater than 0 error', async function(assert) {
    await visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/expenses');
    await click('#show-create-expense-form-button');
    await fillIn('#create-expense-reimbursed-amount', '-1');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Reimbursed amount must be greater than or equal to 0');
    assert.equal(currentURL(), '/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/expenses?create=true');
  });

  test('should show error from api', async function(assert) {
    await visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/expenses');
    await click('#show-create-expense-form-button');
    await fillIn('#create-expense-date', '2018-01-01');
    await fillIn('#create-expense-description', 'Error Expense');
    await triggerEvent('#create-expense-vendor-search', 'blur');
    await click('#select-vendor-7fdadf7a-9561-4950-aca6-438d554536db-button');
    await fillIn('#create-expense-amount', '2');
    await fillIn('#create-expense-reimbursed-amount', '1');
    await click('#create-expense-button');
    const errors = this.element.querySelectorAll('.alert');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Test error.');
    assert.equal(currentURL(), '/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/expenses?create=true');
  });

  test('should close create expense form on successful creation', async function(assert) {
    await visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/expenses');
    await click('#show-create-expense-form-button');
    await fillIn('#create-expense-date', '2018-01-01');
    await fillIn('#create-expense-description', 'New Expense');
    await triggerEvent('#create-expense-vendor-search', 'blur');
    await click('#select-vendor-7fdadf7a-9561-4950-aca6-438d554536db-button');
    await fillIn('#create-expense-amount', '2');
    await fillIn('#create-expense-reimbursed-amount', '1');
    await click('#create-expense-button');
    assert.equal(currentURL(), '/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/expenses');
  });
});
