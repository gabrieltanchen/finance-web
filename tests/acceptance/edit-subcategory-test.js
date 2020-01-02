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

module('Acceptance | edit subcategory', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    get(session, 'cookie').setCookie('token', 'token');
  });

  test('should fill in name in edit form', async function(assert) {
    await visit('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/edit');
    assert.equal(this.element.querySelector('#edit-subcategory-name').value.trim(), 'Hello world');
    assert.equal(currentURL(), '/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/edit');
  });

  test('should show name errors', async function(assert) {
    await visit('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/edit');
    await fillIn('#edit-subcategory-name', '');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Name can\'t be blank');
    assert.equal(currentURL(), '/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/edit');
  });

  test('should show error from api', async function(assert) {
    await visit('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/edit');
    await fillIn('#edit-subcategory-name', 'Error Category');
    await click('#save-subcategory-button');
    const errors = this.element.querySelectorAll('.alert');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Test error.');
    assert.equal(currentURL(), '/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/edit');
  });

  test('should redirect to /subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e on successful save', async function(assert) {
    await visit('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/edit');
    await fillIn('#edit-subcategory-name', 'Updated Category');
    await click('#save-subcategory-button');
    assert.equal(currentURL(), '/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e');
  });
});
