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

module('Acceptance | create vendor', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    get(session, 'cookie').setCookie('token', 'token');
  });

  test('should update create query param', async function(assert) {
    await visit('/vendors');
    await click('#show-create-vendor-form-button');
    assert.equal(currentURL(), '/vendors?create=true');
  });

  test('should show name errors', async function(assert) {
    await visit('/vendors');
    await click('#show-create-vendor-form-button');
    await triggerEvent('#create-vendor-name', 'blur');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Name can\'t be blank');
    assert.equal(currentURL(), '/vendors?create=true');
  });

  test('should show error from api', async function(assert) {
    await visit('/vendors');
    await click('#show-create-vendor-form-button');
    await fillIn('#create-vendor-name', 'Error Vendor');
    await click('#create-vendor-button');
    const errors = this.element.querySelectorAll('.alert');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Test error.');
    assert.equal(currentURL(), '/vendors?create=true');
  });

  test('should close create vendor form on successful creation', async function(assert) {
    await visit('/vendors');
    await click('#show-create-vendor-form-button');
    await fillIn('#create-vendor-name', 'New Vendor');
    await click('#create-vendor-button');
    assert.equal(currentURL(), '/vendors');
  });
});
