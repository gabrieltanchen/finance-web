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

module('Acceptance | edit vendor', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    get(session, 'cookie').setCookie('token', 'token');
  });

  test('should fill in name in edit form', async function(assert) {
    await visit('/vendors/7fdadf7a-9561-4950-aca6-438d554536db/edit');
    assert.equal(this.element.querySelector('#edit-vendor-name').value.trim(), 'Vendor 1');
    assert.equal(currentURL(), '/vendors/7fdadf7a-9561-4950-aca6-438d554536db/edit');
  });

  test('should show name errors', async function(assert) {
    await visit('/vendors/7fdadf7a-9561-4950-aca6-438d554536db/edit');
    await fillIn('#edit-vendor-name', '');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Name can\'t be blank');
    assert.equal(currentURL(), '/vendors/7fdadf7a-9561-4950-aca6-438d554536db/edit');
  });

  test('should show error from api', async function(assert) {
    await visit('/vendors/7fdadf7a-9561-4950-aca6-438d554536db/edit');
    await fillIn('#edit-vendor-name', 'Error Vendor');
    await click('#save-vendor-button');
    const errors = this.element.querySelectorAll('.alert');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Test error.');
    assert.equal(currentURL(), '/vendors/7fdadf7a-9561-4950-aca6-438d554536db/edit');
  });

  test('should redirect to /vendors/7fdadf7a-9561-4950-aca6-438d554536db on successful save', async function(assert) {
    await visit('/vendors/7fdadf7a-9561-4950-aca6-438d554536db/edit');
    await fillIn('#edit-vendor-name', 'Updated Vendor');
    await click('#save-vendor-button');
    assert.equal(currentURL(), '/vendors/7fdadf7a-9561-4950-aca6-438d554536db');
  });
});
