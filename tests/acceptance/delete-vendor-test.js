import { get } from '@ember/object';
import {
  click,
  currentURL,
  visit,
} from '@ember/test-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | delete vendor', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    get(session, 'cookie').setCookie('token', 'token');
  });

  test('should not show the delete modal when landing on the vendor page', async function(assert) {
    await visit('/vendors/7fdadf7a-9561-4950-aca6-438d554536db');
    assert.notOk(this.element.querySelector('#confirm-delete-vendor-button'));
    assert.notOk(this.element.querySelector('#cancel-delete-vendor-button'));
    assert.equal(currentURL(), '/vendors/7fdadf7a-9561-4950-aca6-438d554536db');
  });

  test('should show delete modal', async function(assert) {
    await visit('/vendors/7fdadf7a-9561-4950-aca6-438d554536db');
    await click('#delete-vendor-button');
    assert.equal(this.element.querySelector('#confirm-delete-vendor-button').textContent.trim(), 'Delete');
    assert.equal(this.element.querySelector('#cancel-delete-vendor-button').textContent.trim(), 'Cancel');
    assert.equal(currentURL(), '/vendors/7fdadf7a-9561-4950-aca6-438d554536db');
  });

  test('should close the delete modal when the cancel button is pressed', async function(assert) {
    await visit('/vendors/7fdadf7a-9561-4950-aca6-438d554536db');
    await click('#delete-vendor-button');
    await click('#cancel-delete-vendor-button');
    assert.notOk(this.element.querySelector('#confirm-delete-vendor-button'));
    assert.notOk(this.element.querySelector('#cancel-delete-vendor-button'));
    assert.equal(currentURL(), '/vendors/7fdadf7a-9561-4950-aca6-438d554536db');
  });

  test('should show error from api', async function(assert) {
    await visit('/vendors/b6f0441e-bdee-4172-a646-4d8c9191db57');
    await click('#delete-vendor-button');
    await click('#confirm-delete-vendor-button');
    assert.notOk(this.element.querySelector('#confirm-delete-vendor-button'));
    assert.notOk(this.element.querySelector('#cancel-delete-vendor-button'));
    const errors = this.element.querySelectorAll('.alert p');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Test error.');
    assert.equal(currentURL(), '/vendors/b6f0441e-bdee-4172-a646-4d8c9191db57');
  });

  test('should redirect to /vendors on successful deletion', async function(assert) {
    await visit('/vendors/7fdadf7a-9561-4950-aca6-438d554536db');
    await click('#delete-vendor-button');
    await click('#confirm-delete-vendor-button');
    assert.equal(currentURL(), '/vendors');
  });
});
