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

module('Acceptance | edit household member', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    get(session, 'cookie').setCookie('token', 'token');
  });

  test('should fill in name in edit form', async function(assert) {
    await visit('/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7/edit');
    assert.equal(this.element.querySelector('#edit-household-member-name').value.trim(), 'Household Member 1');
    assert.equal(currentURL(), '/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7/edit');
  });

  test('should show name errors', async function(assert) {
    await visit('/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7/edit');
    await fillIn('#edit-household-member-name', '');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Name can\'t be blank');
    assert.equal(currentURL(), '/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7/edit');
  });

  test('should show error from api', async function(assert) {
    await visit('/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7/edit');
    await fillIn('#edit-household-member-name', 'Error Member');
    await click('#save-household-member-button');
    const errors = this.element.querySelectorAll('.alert');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Test error.');
    assert.equal(currentURL(), '/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7/edit');
  });

  test('should redirect to /household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7 on successful save', async function(assert) {
    await visit('/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7/edit');
    await fillIn('#edit-household-member-name', 'Updated Member');
    await click('#save-household-member-button');
    assert.equal(currentURL(), '/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7');
  });
});
