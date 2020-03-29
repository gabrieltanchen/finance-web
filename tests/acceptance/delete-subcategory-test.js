import { get } from '@ember/object';
import {
  click,
  currentURL,
  visit,
} from '@ember/test-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | delete subcategory', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    get(session, 'cookie').setCookie('token', 'token');
  });

  test('should not show the delete modal when landing on the subcategory page', async function(assert) {
    await visit('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e');
    assert.notOk(this.element.querySelector('#confirm-delete-subcategory-button'));
    assert.notOk(this.element.querySelector('#cancel-delete-subcategory-button'));
    assert.equal(currentURL(), '/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e');
  });

  test('should show delete modal', async function(assert) {
    await visit('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e');
    await click('#delete-subcategory-button');
    assert.equal(this.element.querySelector('#confirm-delete-subcategory-button').textContent.trim(), 'Delete');
    assert.equal(this.element.querySelector('#cancel-delete-subcategory-button').textContent.trim(), 'Cancel');
    assert.equal(currentURL(), '/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e');
  });

  test('should close the delete modal when the cancel button is pressed', async function(assert) {
    await visit('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e');
    await click('#delete-subcategory-button');
    await click('#cancel-delete-subcategory-button');
    assert.notOk(this.element.querySelector('#confirm-delete-subcategory-button'));
    assert.notOk(this.element.querySelector('#cancel-delete-subcategory-button'));
    assert.equal(currentURL(), '/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e');
  });

  test('should show error from api', async function(assert) {
    await visit('/subcategories/dfa36b20-55cb-466e-ab55-ff3ffd48388f');
    await click('#delete-subcategory-button');
    await click('#confirm-delete-subcategory-button');
    assert.notOk(this.element.querySelector('#confirm-delete-subcategory-button'));
    assert.notOk(this.element.querySelector('#cancel-delete-subcategory-button'));
    const errors = this.element.querySelectorAll('.alert p');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Test error.');
    assert.equal(currentURL(), '/subcategories/dfa36b20-55cb-466e-ab55-ff3ffd48388f');
  });

  test('should redirect to /categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/subcategories on successful deletion', async function(assert) {
    await visit('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e');
    await click('#delete-subcategory-button');
    await click('#confirm-delete-subcategory-button');
    assert.equal(currentURL(), '/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/subcategories');
  });
});
