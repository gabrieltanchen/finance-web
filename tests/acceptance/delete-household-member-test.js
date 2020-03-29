import { get } from '@ember/object';
import {
  click,
  currentURL,
  visit,
} from '@ember/test-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | delete household member', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    get(session, 'cookie').setCookie('token', 'token');
  });

  test('should not show the delete modal when landing on household member page', async function(assert) {
    await visit('/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7');
    assert.notOk(this.element.querySelector('#confirm-delete-household-member-button'));
    assert.notOk(this.element.querySelector('#cancel-delete-household-member-button'));
    assert.equal(currentURL(), '/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7');
  });

  test('should show delete modal', async function(assert) {
    await visit('/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7');
    await click('#delete-household-member-button');
    assert.equal(this.element.querySelector('#confirm-delete-household-member-button').textContent.trim(), 'Delete');
    assert.equal(this.element.querySelector('#cancel-delete-household-member-button').textContent.trim(), 'Cancel');
    assert.equal(currentURL(), '/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7');
  });

  test('should close the delete modal when the cancel button is pressed', async function(assert) {
    await visit('/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7');
    await click('#delete-household-member-button');
    await click('#cancel-delete-household-member-button');
    assert.notOk(this.element.querySelector('#confirm-delete-household-member-button'));
    assert.notOk(this.element.querySelector('#cancel-delete-household-member-button'));
    assert.equal(currentURL(), '/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7');
  });

  test('should show error from api', async function(assert) {
    await visit('/household-members/fa41378d-8c5a-4ff0-b61f-e7726cb13ddb');
    await click('#delete-household-member-button');
    await click('#confirm-delete-household-member-button');
    assert.notOk(this.element.querySelector('#confirm-delete-household-member-button'));
    assert.notOk(this.element.querySelector('#cancel-delete-household-member-button'));
    const errors = this.element.querySelectorAll('.alert p');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Test error.');
    assert.equal(currentURL(), '/household-members/fa41378d-8c5a-4ff0-b61f-e7726cb13ddb');
  });

  test('should redirect to /household-members on successful deletion', async function(assert) {
    await visit('/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7');
    await click('#delete-household-member-button');
    await click('#confirm-delete-household-member-button');
    assert.equal(currentURL(), '/household-members');
  });
});
