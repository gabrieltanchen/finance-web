import { get } from '@ember/object';
import {
  click,
  currentURL,
  visit,
} from '@ember/test-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | delete expense', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    get(session, 'cookie').setCookie('token', 'token');
  });

  test('should not show the delete modal when landing on the expense page', async function(assert) {
    await visit('/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d');
    assert.notOk(this.element.querySelector('#confirm-delete-expense-button'));
    assert.notOk(this.element.querySelector('#cancel-delete-expense-button'));
    assert.equal(currentURL(), '/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d');
  });

  test('should show delete modal', async function(assert) {
    await visit('/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d');
    await click('#delete-expense-button');
    assert.equal(this.element.querySelector('#confirm-delete-expense-button').textContent.trim(), 'Delete');
    assert.equal(this.element.querySelector('#cancel-delete-expense-button').textContent.trim(), 'Cancel');
    assert.equal(currentURL(), '/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d');
  });

  test('should close the delete modal when the cancel button is pressed', async function(assert) {
    await visit('/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d');
    await click('#delete-expense-button');
    await click('#cancel-delete-expense-button');
    assert.notOk(this.element.querySelector('#confirm-delete-expense-button'));
    assert.notOk(this.element.querySelector('#cancel-delete-expense-button'));
    assert.equal(currentURL(), '/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d');
  });

  test('should show error fro api', async function(assert) {
    await visit('/expenses/b60b0cd4-db77-4da9-a5f0-acf78bd90003');
    await click('#delete-expense-button');
    await click('#confirm-delete-expense-button');
    assert.notOk(this.element.querySelector('#confirm-delete-expense-button'));
    assert.notOk(this.element.querySelector('#cancel-delete-expense-button'));
    const errors = this.element.querySelectorAll('.alert p');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Test error.');
    assert.equal(currentURL(), '/expenses/b60b0cd4-db77-4da9-a5f0-acf78bd90003');
  });

  test('should redirect to /subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/expenses on successful deletion', async function(assert) {
    await visit('/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d');
    await click('#delete-expense-button');
    await click('#confirm-delete-expense-button');
    assert.equal(currentURL(), '/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/expenses');
  });
});
