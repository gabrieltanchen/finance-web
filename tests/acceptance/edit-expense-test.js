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

module('Acceptance | edit expense', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    get(session, 'cookie').setCookie('token', 'token');
  });

  test('should fill in attributes in edit form', async function(assert) {
    await visit('/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d/edit');
    assert.equal(this.element.querySelector('#edit-expense-vendor-search').value.trim(), 'Vendor 1');
    assert.equal(this.element.querySelector('#edit-expense-household-member').value.trim(), 'Household Member 1');
    assert.equal(this.element.querySelector('#edit-expense-date').value.trim(), '2019-01-01');
    assert.equal(this.element.querySelector('#edit-expense-description').value.trim(), 'Hello world');
    assert.equal(this.element.querySelector('#edit-expense-amount').value.trim(), '12.34');
    assert.equal(this.element.querySelector('#edit-expense-reimbursed-amount').value.trim(), '43.21');
    assert.equal(currentURL(), '/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d/edit');
  });

  test('should show all amount errors', async function(assert) {
    await visit('/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d/edit');
    await fillIn('#edit-expense-amount', '');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 2);
    assert.equal(errors[0].textContent.trim(), 'Amount must be a number');
    assert.equal(errors[1].textContent.trim(), 'Amount can\'t be blank');
    assert.equal(currentURL(), '/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d/edit');
  });

  test('should show amount greater than 0 error', async function(assert) {
    await visit('/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d/edit');
    await fillIn('#edit-expense-amount', '-1');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Amount must be greater than or equal to 0');
    assert.equal(currentURL(), '/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d/edit');
  });

  test('should show all reimbursed amount errors', async function(assert) {
    await visit('/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d/edit');
    await fillIn('#edit-expense-reimbursed-amount', '');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 2);
    assert.equal(errors[0].textContent.trim(), 'Reimbursed amount must be a number');
    assert.equal(errors[1].textContent.trim(), 'Reimbursed amount can\'t be blank');
    assert.equal(currentURL(), '/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d/edit');
  });

  test('should show reimbursed amount greater than 0 error', async function(assert) {
    await visit('/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d/edit');
    await fillIn('#edit-expense-reimbursed-amount', '-1');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Reimbursed amount must be greater than or equal to 0');
    assert.equal(currentURL(), '/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d/edit');
  });

  test('should show error from api', async function(assert) {
    await visit('/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d/edit');
    await fillIn('#edit-expense-date', '2019-01-02');
    await fillIn('#edit-expense-description', 'Error Expense');
    await fillIn('#edit-expense-amount', '23.45');
    await fillIn('#edit-expense-reimbursed-amount', '54.32');
    await click('#save-expense-button');
    const errors = this.element.querySelectorAll('.alert');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Test error.');
    assert.equal(currentURL(), '/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d/edit');
  });

  test('should redirect to /expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d on successful save', async function(assert) {
    await visit('/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d/edit');
    await fillIn('#edit-expense-date', '2019-01-02');
    await fillIn('#edit-expense-description', 'Updated Expense');
    await fillIn('#edit-expense-amount', '23.45');
    await fillIn('#edit-expense-reimbursed-amount', '54.32');
    await click('#save-expense-button');
    assert.equal(currentURL(), '/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d');
  });
});
