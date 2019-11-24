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

module('Acceptance | create household member', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    get(session, 'cookie').setCookie('token', 'token');
  });

  test('should update create query param', async function(assert) {
    await visit('/household-members');
    await click('#show-create-household-member-form-button');
    assert.equal(currentURL(), '/household-members?create=true');
  });

  test('should show name errors', async function(assert) {
    await visit('/household-members');
    await click('#show-create-household-member-form-button');
    await triggerEvent('#create-household-member-name', 'blur');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Name can\'t be blank');
    assert.equal(currentURL(), '/household-members?create=true');
  });

  test('should show error from api', async function(assert) {
    await visit('/household-members');
    await click('#show-create-household-member-form-button');
    await fillIn('#create-household-member-name', 'Error Member');
    await click('#create-household-member-button');
    const errors = this.element.querySelectorAll('.alert');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Test error.');
    assert.equal(currentURL(), '/household-members?create=true');
  });

  test('should close create household member form on successful creation', async function(assert) {
    await visit('/household-members');
    await click('#show-create-household-member-form-button');
    await fillIn('#create-household-member-name', 'New Member');
    await click('#create-household-member-button');
    assert.equal(currentURL(), '/household-members');
  });
});
