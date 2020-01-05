import { get } from '@ember/object';
import {
  click,
  currentURL,
  visit,
} from '@ember/test-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | delete budget', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    get(session, 'cookie').setCookie('token', 'token');
  });

  test('should not show the delete modal when landing on the budget page', async function(assert) {
    await visit('/budgets/af805297-150c-4c66-adc1-a457d62160a4');
    assert.notOk(this.element.querySelector('#confirm-delete-budget-button'));
    assert.notOk(this.element.querySelector('#cancel-delete-budget-button'));
    assert.equal(currentURL(), '/budgets/af805297-150c-4c66-adc1-a457d62160a4');
  });

  test('should show delete modal', async function(assert) {
    await visit('/budgets/af805297-150c-4c66-adc1-a457d62160a4');
    await click('#delete-budget-button');
    assert.equal(this.element.querySelector('#confirm-delete-budget-button').textContent.trim(), 'Delete');
    assert.equal(this.element.querySelector('#cancel-delete-budget-button').textContent.trim(), 'Cancel');
    assert.equal(currentURL(), '/budgets/af805297-150c-4c66-adc1-a457d62160a4');
  });

  test('should close the delete modal when the cancel button is pressed', async function(assert) {
    await visit('/budgets/af805297-150c-4c66-adc1-a457d62160a4');
    await click('#delete-budget-button');
    await click('#cancel-delete-budget-button');
    assert.notOk(this.element.querySelector('#confirm-delete-budget-button'));
    assert.notOk(this.element.querySelector('#cancel-delete-budget-button'));
    assert.equal(currentURL(), '/budgets/af805297-150c-4c66-adc1-a457d62160a4');
  });

  test('should show error from api', async function(assert) {
    await visit('/budgets/acf1d59c-3d7d-4fc1-939b-5566e3d35685');
    await click('#delete-budget-button');
    await click('#confirm-delete-budget-button');
    assert.notOk(this.element.querySelector('#confirm-delete-budget-button'));
    assert.notOk(this.element.querySelector('#cancel-delete-budget-button'));
    const errors = this.element.querySelectorAll('.alert p');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Test error.');
    assert.equal(currentURL(), '/budgets/acf1d59c-3d7d-4fc1-939b-5566e3d35685');
  });

  test('should redirect to /subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/budgets on successful deletion', async function(assert) {
    await visit('/budgets/af805297-150c-4c66-adc1-a457d62160a4');
    await click('#delete-budget-button');
    await click('#confirm-delete-budget-button');
    assert.equal(currentURL(), '/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/budgets');
  });
});
