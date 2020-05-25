import { module, test } from 'qunit';
import { currentURL, visit } from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';

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

  test('should redirect away from /dashboard', async function(assert) {
    await visit('/dashboard');

    assert.equal(currentURL(), '/login');
  });

  test('can visit /login', async function(assert) {
    await visit('/login');

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /vendors', async function(assert) {
    await visit('/vendors');

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /vendors/:id', async function(assert) {
    await visit('/vendors/045be361-1f46-4875-9c57-d51be631f27f');

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /vendors/:id/expenses', async function(assert) {
    await visit('/vendors/045be361-1f46-4875-9c57-d51be631f27f/expenses');

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /vendors/:id/settings', async function(assert) {
    await visit('/vendors/045be361-1f46-4875-9c57-d51be631f27f/settings');

    assert.equal(currentURL(), '/login');
  });
});
