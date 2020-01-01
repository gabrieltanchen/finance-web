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

module('Acceptance | edit category', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    get(session, 'cookie').setCookie('token', 'token');
  });

  test('should fill in name in edit form', async function(assert) {
    await visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/edit');
    assert.equal(this.element.querySelector('#edit-category-name').value.trim(), 'Hello world');
    assert.equal(currentURL(), '/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/edit');
  });

  test('should show name errors', async function(assert) {
    await visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/edit');
    await fillIn('#edit-category-name', '');
    const errors = this.element.querySelectorAll('p.validated-input-error');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Name can\'t be blank');
    assert.equal(currentURL(), '/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/edit');
  });

  test('should show error from api', async function(assert) {
    await visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/edit');
    await fillIn('#edit-category-name', 'Error Category');
    await click('#save-category-button');
    const errors = this.element.querySelectorAll('.alert');
    assert.equal(errors.length, 1);
    assert.equal(errors[0].textContent.trim(), 'Test error.');
    assert.equal(currentURL(), '/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/edit');
  });

  test('should redirect to /categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee on successful save', async function(assert) {
    await visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/edit');
    await fillIn('#edit-category-name', 'Updated Category');
    await click('#save-category-button');
    assert.equal(currentURL(), '/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee');
  });
});
