import { get } from '@ember/object';
import {
  click,
  currentURL,
  visit,
} from '@ember/test-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | delete income', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    get(session, 'cookie').setCookie('token', 'token');
  });

  test('should not show the delete modal when landing on the income page', async function(assert) {
    await visit('/income/f347b74e-5980-4324-b629-98490f74ed53');
    assert.notOk(this.element.querySelector('#confirm-delete-income-button'));
    assert.notOk(this.element.querySelector('#cancel-delete-income-button'));
    assert.equal(currentURL(), '/income/f347b74e-5980-4324-b629-98490f74ed53');
  });

  test('should show delete modal', async function(assert) {
    await visit('/income/f347b74e-5980-4324-b629-98490f74ed53');
    await click('#delete-income-button');
    assert.equal(this.element.querySelector('#confirm-delete-income-button').textContent.trim(), 'Delete');
    assert.equal(this.element.querySelector('#cancel-delete-income-button').textContent.trim(), 'Cancel');
    assert.equal(currentURL(), '/income/f347b74e-5980-4324-b629-98490f74ed53');
  });

  test('should close the delete modal when the cancel button is pressed', async function(assert) {
    await visit('/income/f347b74e-5980-4324-b629-98490f74ed53');
    await click('#delete-income-button');
    await click('#cancel-delete-income-button');
    assert.notOk(this.element.querySelector('#confirm-delete-income-button'));
    assert.notOk(this.element.querySelector('#cancel-delete-income-button'));
    assert.equal(currentURL(), '/income/f347b74e-5980-4324-b629-98490f74ed53');
  });

  test('should show error from api', async function(assert) {
    await visit('/income/b1c89087-1da8-40d5-a43d-e391f8e6b68a');
    await click('#delete-income-button');
    await click('#confirm-delete-income-button');
    assert.notOk(this.element.querySelector('#confirm-delete-income-button'));
    assert.notOk(this.element.querySelector('#cancel-delete-income-button'));
    const errors = this.element.querySelectorAll('.alert p');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Test error.');
    assert.equal(currentURL(), '/income/b1c89087-1da8-40d5-a43d-e391f8e6b68a');
  });

  test('should redirect to /income on successful deletion', async function(assert) {
    await visit('/income/f347b74e-5980-4324-b629-98490f74ed53');
    await click('#delete-income-button');
    await click('#confirm-delete-income-button');
    assert.equal(currentURL(), '/income');
  });
});
