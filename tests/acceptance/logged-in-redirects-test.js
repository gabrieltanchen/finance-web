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

  test('can visit /budgets/:uuid', async function(assert) {
    await visit('/budgets/af805297-150c-4c66-adc1-a457d62160a4');
    assert.equal(currentURL(), '/budgets/af805297-150c-4c66-adc1-a457d62160a4');
  });

  test('can visit /budgets/:uuid/edit', async function(assert) {
    await visit('/budgets/af805297-150c-4c66-adc1-a457d62160a4/edit');
    assert.equal(currentURL(), '/budgets/af805297-150c-4c66-adc1-a457d62160a4/edit');
  });

  test('can visit /categories', async function(assert) {
    await visit('/categories');
    assert.equal(currentURL(), '/categories');
  });

  test('can visit /categories/:uuid', async function(assert) {
    await visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee');
    assert.equal(currentURL(), '/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee');
  });

  test('can visit /categories/:uuid/edit', async function(assert) {
    await visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/edit');
    assert.equal(currentURL(), '/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/edit');
  });

  test('can visit /categories/:uuid/subcategories', async function(assert) {
    await visit('/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/subcategories');
    assert.equal(currentURL(), '/categories/14aa3ef4-193f-45c4-8e33-ad7b79a3e6ee/subcategories');
  });

  test('can visit /dashboard', async function(assert) {
    await visit('/dashboard');
    assert.equal(currentURL(), '/dashboard');
  });

  test('can visit /expenses/:uuid', async function(assert) {
    await visit('/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d');
    assert.equal(currentURL(), '/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d');
  });

  test('can visit /expenses/:uuid/edit', async function(assert) {
    await visit('/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d/edit');
    assert.equal(currentURL(), '/expenses/ba03c363-0670-43cf-bef7-07cd6bb6694d/edit');
  });

  test('can visit /household-members', async function(assert) {
    await visit('/household-members');
    assert.equal(currentURL(), '/household-members');
  });

  test('can visit /household-members/:uuid', async function(assert) {
    await visit('/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7');
    assert.equal(currentURL(), '/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7');
  });

  test('can visit /household-members/:uuid/edit', async function(assert) {
    await visit('/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7/edit');
    assert.equal(currentURL(), '/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7/edit');
  });

  test('can visit /household-members/:uuid/expenses', async function(assert) {
    await visit('/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7/expenses');
    assert.equal(currentURL(), '/household-members/6c8e8279-1d98-47ad-aa9a-bf41d57e1db7/expenses');
  });

  test('can visit /income', async function(assert) {
    await visit('/income');
    assert.equal(currentURL(), '/income');
  });

  test('can visit /income/:uuid', async function(assert) {
    await visit('/income/f347b74e-5980-4324-b629-98490f74ed53');
    assert.equal(currentURL(), '/income/f347b74e-5980-4324-b629-98490f74ed53');
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

  test('can visit /subcategories/:uuid/edit', async function(assert) {
    await visit('/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/edit');
    assert.equal(currentURL(), '/subcategories/6948ad4c-f78b-4ce5-b7d5-0b552234fc4e/edit');
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

  test('can visit /vendors/:uuid/edit', async function(assert) {
    await visit('/vendors/b6f0441e-bdee-4172-a646-4d8c9191db57/edit');
    assert.equal(currentURL(), '/vendors/b6f0441e-bdee-4172-a646-4d8c9191db57/edit');
  });

  test('can visit /vendors/:uuid/expenses', async function(assert) {
    await visit('/vendors/b6f0441e-bdee-4172-a646-4d8c9191db57/expenses');
    assert.equal(currentURL(), '/vendors/b6f0441e-bdee-4172-a646-4d8c9191db57/expenses');
  });
});
