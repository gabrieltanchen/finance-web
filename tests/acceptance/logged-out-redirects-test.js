import { module, test } from 'qunit';
import {
  currentURL,
  visit,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | logged out redirects', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
  });

  test('can visit /', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
  });

  test('should redirect away from /categories', async function(assert) {
    await visit('/categories');
    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /categories/:uuid', async function(assert) {
    await visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee');
    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /categories/:uuid/edit', async function(assert) {
    await visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/edit');
    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /categories/:uuid/subcategories', async function(assert) {
    await visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/subcategories');
    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /dashboard', async function(assert) {
    await visit('/dashboard');
    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /expenses/:uuid', async function(assert) {
    await visit('/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d');
    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /household-members', async function(assert) {
    await visit('/household-members');
    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /household-members/:uuid', async function(assert) {
    await visit('/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7');
    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /household-members/:uuid/edit', async function(assert) {
    await visit('/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7/edit');
    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /household-members/:uuid/expenses', async function(assert) {
    await visit('/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7/expenses');
    assert.equal(currentURL(), '/login');
  });

  test('can visit /login', async function(assert) {
    await visit('/login');
    assert.equal(currentURL(), '/login');
  });

  test('can visit /sign-up', async function(assert) {
    await visit('/sign-up');
    assert.equal(currentURL(), '/sign-up');
  });

  test('should redirect away from /subcategories/:uuid', async function(assert) {
    await visit('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e');
    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /subcategories/:uuid/budgets', async function(assert) {
    await visit('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/budgets');
    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /subcategories/:uuid/edit', async function(assert) {
    await visit('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/edit');
    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /subcategories/:uuid/expenses', async function(assert) {
    await visit('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/expenses');
    assert.equal(currentURL(), '/login');
  });

  test('should reirect away from /vendors', async function(assert) {
    await visit('/vendors');
    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /vendors/:uuid', async function(assert) {
    await visit('/vendors/b6f0441e-bdee-4172-a646-4d8c9191db57');
    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /vendors/:uuid/edit', async function(assert) {
    await visit('/vendors/b6f0441e-bdee-4172-a646-4d8c9191db57/edit');
    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /vendors/:uuid/expenses', async function(assert) {
    await visit('/vendors/b6f0441e-bdee-4172-a646-4d8c9191db57/expenses');
    assert.equal(currentURL(), '/login');
  });
});
