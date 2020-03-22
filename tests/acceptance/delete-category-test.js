import { get } from '@ember/object';
import {
  click,
  currentURL,
  visit,
} from '@ember/test-helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | delete category', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    get(session, 'cookie').setCookie('token', 'token');
  });

  test('should not show the delete modal when landing on category page', async function(assert) {
    await visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee');
    assert.notOk(this.element.querySelector('#confirm-delete-category-button'));
    assert.notOk(this.element.querySelector('#cancel-delete-category-button'));
    assert.equal(currentURL(), '/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee');
  });

  test('should show delete modal', async function(assert) {
    await visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee');
    await click('#delete-category-button');
    assert.equal(this.element.querySelector('#confirm-delete-category-button').textContent.trim(), 'Delete');
    assert.equal(this.element.querySelector('#cancel-delete-category-button').textContent.trim(), 'Cancel');
    assert.equal(currentURL(), '/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee');
  });

  test('should close the delete modal when the cancel button is pressed', async function(assert) {
    await visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee');
    await click('#delete-category-button');
    await click('#cancel-delete-category-button');
    assert.notOk(this.element.querySelector('#confirm-delete-category-button'));
    assert.notOk(this.element.querySelector('#cancel-delete-category-button'));
    assert.equal(currentURL(), '/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee');
  });

  test('should show error from api', async function(assert) {
    await visit('/categories/ad16b2f5-1dbc-4716-bb0a-96f78add961c');
    await click('#delete-category-button');
    await click('#confirm-delete-category-button');
    assert.notOk(this.element.querySelector('#confirm-delete-category-button'));
    assert.notOk(this.element.querySelector('#cancel-delete-category-button'));
    const errors = this.element.querySelectorAll('.alert p');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Test error.');
    assert.equal(currentURL(), '/categories/ad16b2f5-1dbc-4716-bb0a-96f78add961c');
  });

  test('should redirect to categories on successful deletion', async function(assert) {
    await visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee');
    await click('#delete-category-button');
    await click('#confirm-delete-category-button');
    assert.equal(currentURL(), '/categories');
  });
});
