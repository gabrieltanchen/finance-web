import { module, test } from 'qunit';
import { currentURL, visit } from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';
import { v4 as uuidv4 } from 'uuid';

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

  test('should redirect away from /budgets/new', async function(assert) {
    await visit('/budgets/new');

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /budgets/:id', async function(assert) {
    await visit(`/budgets/${uuidv4()}`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /budgets/:id/edit', async function(assert) {
    await visit(`/budgets/${uuidv4()}/edit`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /budgets/:id/settings', async function(assert) {
    await visit(`/budgets/${uuidv4()}/settings`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /categories', async function(assert) {
    await visit('/categories');

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /categories/new', async function(assert) {
    await visit('/categories/new');

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /categories/:id', async function(assert) {
    await visit(`/categories/${uuidv4()}`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /categories/:id/edit', async function(assert) {
    await visit(`/categories/${uuidv4()}/edit`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /categories/:id/settings', async function(assert) {
    await visit(`/categories/${uuidv4()}/settings`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /categories/:id/subcategories', async function(assert) {
    await visit(`/categories/${uuidv4()}/subcategories`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /dashboard', async function(assert) {
    await visit('/dashboard');

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /expenses/new', async function(assert) {
    await visit('/expenses/new');

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /expenses/:id', async function(assert) {
    await visit(`/expenses/${uuidv4()}`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /expenses/:id/edit', async function(assert) {
    await visit(`/expenses/${uuidv4()}/edit`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /expenses/:id/settings', async function(assert) {
    await visit(`/expenses/${uuidv4()}/settings`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away fund /funds', async function(assert) {
    await visit('/funds');

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /funds/new', async function(assert) {
    await visit('/funds/new');

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /funds/:id', async function(assert) {
    await visit(`/funds/${uuidv4()}`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /household-members', async function(assert) {
    await visit('/household-members');

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /household-members/new', async function(assert) {
    await visit('/household-members/new');

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /household-members/:id', async function(assert) {
    await visit(`/household-members/${uuidv4()}`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /household-members/:id/edit', async function(assert) {
    await visit(`/household-members/${uuidv4()}/edit`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /household-members/:id/expenses', async function(assert) {
    await visit(`/household-members/${uuidv4()}/expenses`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /household-members/:id/income', async function(assert) {
    await visit(`/household-members/${uuidv4()}/income`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /household-members/:id/settings', async function(assert) {
    await visit(`/household-members/${uuidv4()}/settings`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /income', async function(assert) {
    await visit('/income');

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /income/new', async function(assert) {
    await visit('/income/new');

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /income/:id', async function(assert) {
    await visit(`/income/${uuidv4()}`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /income/:id/edit', async function(assert) {
    await visit(`/income/${uuidv4()}`);

    assert.equal(currentURL(), '/login');
  });

  test('/should redirect away from /income/:id/settings', async function(assert) {
    await visit(`/income/${uuidv4()}`);

    assert.equal(currentURL(), '/login');
  });

  test('can visit /login', async function(assert) {
    await visit('/login');

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /subcategories/new', async function(assert) {
    await visit(`/subcategories/new?categoryId=${uuidv4()}`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /subcategories/:id', async function(assert) {
    await visit(`/subcategories/${uuidv4()}`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /subcategories/:id/annual-report', async function(assert) {
    await visit(`/subcategories/${uuidv4()}/annual-report`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /subcategories/:id/budgets', async function(assert) {
    await visit(`/subcategories/${uuidv4()}`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /subcategories/:id/edit', async function(assert) {
    await visit(`/subcategories/${uuidv4()}/edit`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /subcategories/:id/expenses', async function(assert) {
    await visit(`/subcategories/${uuidv4()}/expenses`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /subcategories/:id/settings', async function(assert) {
    await visit(`/subcategories/${uuidv4()}/settings`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /vendors', async function(assert) {
    await visit('/vendors');

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /vendors/new', async function(assert) {
    await visit('/vendors/new');

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /vendors/:id', async function(assert) {
    await visit(`/vendors/${uuidv4()}`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /vendors/:id/edit', async function(assert) {
    await visit(`/vendors/${uuidv4()}/edit`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /vendors/:id/expenses', async function(assert) {
    await visit(`/vendors/${uuidv4()}/expenses`);

    assert.equal(currentURL(), '/login');
  });

  test('should redirect away from /vendors/:id/settings', async function(assert) {
    await visit(`/vendors/${uuidv4()}/settings`);

    assert.equal(currentURL(), '/login');
  });
});
