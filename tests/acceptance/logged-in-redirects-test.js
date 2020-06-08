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

  test('can visit /categories', async function(assert) {
    await visit('/categories');

    assert.equal(currentURL(), '/categories');
  });

  test('can visit /categories/new', async function(assert) {
    await visit('/categories/new');

    assert.equal(currentURL(), '/categories/new');
  });

  test('can visit /categories/:id', async function(assert) {
    const id = uuidv4();
    await visit(`/categories/${id}`);

    assert.equal(currentURL(), `/categories/${id}`);
  });

  test('can visit /categories/:id/edit', async function(assert) {
    const id = uuidv4();
    await visit(`/categories/${id}/edit`);

    assert.equal(currentURL(), `/categories/${id}/edit`);
  });

  test('can visit /categories/:id/settings', async function(assert) {
    const id = uuidv4();
    await visit(`/categories/${id}/settings`);

    assert.equal(currentURL(), `/categories/${id}/settings`);
  });

  test('can visit /categories/:id/subcategories', async function(assert) {
    const id = uuidv4();
    await visit(`/categories/${id}/subcategories`);

    assert.equal(currentURL(), `/categories/${id}/subcategories`);
  });

  test('can visit /dashboard', async function(assert) {
    await visit('/dashboard');

    assert.equal(currentURL(), '/dashboard');
  });

  test('can visit /household-members', async function(assert) {
    await visit('/household-members');

    assert.equal(currentURL(), '/household-members');
  });

  test('can visit /household-members/new', async function(assert) {
    await visit('/household-members/new');

    assert.equal(currentURL(), '/household-members/new');
  });

  test('can visit /household-members/:id', async function(assert) {
    const id = uuidv4();
    await visit(`/household-members/${id}`);

    assert.equal(currentURL(), `/household-members/${id}`);
  });

  test('can visit /household-members/:id/edit', async function(assert) {
    const id = uuidv4();
    await visit(`/household-members/${id}/edit`);

    assert.equal(currentURL(), `/household-members/${id}/edit`);
  });

  test('can visit /household-members/:id/expenses', async function(assert) {
    const id = uuidv4();
    await visit(`/household-members/${id}/expenses`);

    assert.equal(currentURL(), `/household-members/${id}/expenses`);
  });

  test('can visit /household-members/:id/income', async function(assert) {
    const id = uuidv4();
    await visit(`/household-members/${id}/income`);

    assert.equal(currentURL(), `/household-members/${id}/income`);
  });

  test('can visit /household-members/:id/settings', async function(assert) {
    const id = uuidv4();
    await visit(`/household-members/${id}/settings`);

    assert.equal(currentURL(), `/household-members/${id}/settings`);
  });

  test('can visit /income', async function(assert) {
    await visit('/income');

    assert.equal(currentURL(), '/income');
  });

  test('can visit /income/new', async function(assert) {
    await visit('/income/new');

    assert.equal(currentURL(), '/income/new');
  });

  test('can visit /income/:id', async function(assert) {
    const id = uuidv4();
    await visit(`/income/${id}`);

    assert.equal(currentURL(), `/income/${id}`);
  });

  test('can visit /income/:id/edit', async function(assert) {
    const id = uuidv4();
    await visit(`/income/${id}/edit`);

    assert.equal(currentURL(), `/income/${id}/edit`);
  });

  test('can visit /income/:id/settings', async function(assert) {
    const id = uuidv4();
    await visit(`/income/${id}/settings`);

    assert.equal(currentURL(), `/income/${id}/settings`);
  });

  test('should redirect away from /login', async function(assert) {
    await visit('/login');

    assert.equal(currentURL(), '/dashboard');
  });

  test('can visit /subcategories/:id', async function(assert) {
    const id = uuidv4();
    await visit(`/subcategories/${id}`);

    assert.equal(currentURL(), `/subcategories/${id}`);
  });

  test('can visit /subcategories/:id/expenses', async function(assert) {
    const id = uuidv4();
    await visit(`/subcategories/${id}/expenses`);

    assert.equal(currentURL(), `/subcategories/${id}/expenses`);
  });

  test('can visit /vendors', async function(assert) {
    await visit('/vendors');

    assert.equal(currentURL(), '/vendors');
  });

  test('can visit /vendors/new', async function(assert) {
    await visit('/vendors/new');

    assert.equal(currentURL(), '/vendors/new');
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
