import { module, test } from 'qunit';
import {
  currentURL,
  visit,
} from '@ember/test-helpers';
import { get } from '@ember/object';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | logged in redirects', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    get(session, 'cookie').setCookie('token', 'token');
  });

  test('should redirect away from /', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/dashboard');
  });

  test('can visit /categories', async function(assert) {
    await visit('/categories');
    assert.equal(currentURL(), '/categories');
  });

  test('can visit /categories/:uuid', async function(assert) {
    await visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee');
    assert.equal(currentURL(), '/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee');
  });

  test('can visit /categories/:uuid/subcategories', async function(assert) {
    await visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/subcategories');
    assert.equal(currentURL(), '/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/subcategories');
  });

  test('can visit /dashboard', async function(assert) {
    await visit('/dashboard');
    assert.equal(currentURL(), '/dashboard');
  });

  test('should redirect away from /login', async function(assert) {
    await visit('/login');
    assert.equal(currentURL(), '/dashboard');
  });

  test('should redirect away from /sign-up', async function(assert) {
    await visit('/sign-up');
    assert.equal(currentURL(), '/dashboard');
  });

  test('can visit /subcategories/:uuid', async function(assert) {
    await visit('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e');
    assert.equal(currentURL(), '/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e');
  });

  test('can visit /subcategories/:uuid/budgets', async function(assert) {
    await visit('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/budgets');
    assert.equal(currentURL(), '/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/budgets');
  });

  test('can visit /subcategories/:uuid/expenses', async function(assert) {
    await visit('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/expenses');
    assert.equal(currentURL(), '/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/expenses');
  });

  test('can visit /vendors', async function(assert) {
    await visit('/vendors');
    assert.equal(currentURL(), '/vendors');
  });

  test('can visit /vendors/:uuid', async function(assert) {
    await visit('/vendors/b6f0441e-bdee-4172-a646-4d8c9191db57');
    assert.equal(currentURL(), '/vendors/b6f0441e-bdee-4172-a646-4d8c9191db57');
  });

  test('can visit /vendors/:uuid/expenses', async function(assert) {
    await visit('/vendors/b6f0441e-bdee-4172-a646-4d8c9191db57/expenses');
    assert.equal(currentURL(), '/vendors/b6f0441e-bdee-4172-a646-4d8c9191db57/expenses');
  });
});
