import { module, test } from 'qunit';
import { currentURL, visit } from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | logged in redirects', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    session.authToken = 'token';
  });

  test('should redirect away from /', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/dashboard');
  });

  test('can visit /dashboard', async function(assert) {
    await visit('/dashboard');

    assert.equal(currentURL(), '/dashboard');
  });

  test('should redirect away from /login', async function(assert) {
    await visit('/login');

    assert.equal(currentURL(), '/dashboard');
  });

  test('can visit /vendors', async function(assert) {
    await visit('/vendors');

    assert.equal(currentURL(), '/vendors');
  });

  test('can visit /vendors/:id', async function(assert) {
    await visit('/vendors/045be361-1f46-4875-9c57-d51be631f27f');

    assert.equal(currentURL(), '/vendors/045be361-1f46-4875-9c57-d51be631f27f');
  });

  test('can visit /vendors/:id/expenses', async function(assert) {
    await visit('/vendors/045be361-1f46-4875-9c57-d51be631f27f/expenses');

    assert.equal(currentURL(), '/vendors/045be361-1f46-4875-9c57-d51be631f27f/expenses');
  });

  test('can visit /vendors/:id/settings', async function(assert) {
    await visit('/vendors/045be361-1f46-4875-9c57-d51be631f27f/settings');

    assert.equal(currentURL(), '/vendors/045be361-1f46-4875-9c57-d51be631f27f/settings');
  });
});
