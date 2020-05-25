import { module, test } from 'qunit';
import { currentURL, visit } from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';
import { v4 as uuidv4 } from 'uuid';

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
    const id = uuidv4();
    await visit(`/vendors/${id}`);

    assert.equal(currentURL(), `/vendors/${id}`);
  });

  test('can visit /vendors/:id/edit', async function(assert) {
    const id = uuidv4();
    await visit(`/vendors/${id}/edit`);

    assert.equal(currentURL(), `/vendors/${id}/edit`);
  });

  test('can visit /vendors/:id/expenses', async function(assert) {
    const id = uuidv4();
    await visit(`/vendors/${id}/expenses`);

    assert.equal(currentURL(), `/vendors/${id}/expenses`);
  });

  test('can visit /vendors/:id/settings', async function(assert) {
    const id = uuidv4();
    await visit(`/vendors/${id}/settings`);

    assert.equal(currentURL(), `/vendors/${id}/settings`);
  });
});
