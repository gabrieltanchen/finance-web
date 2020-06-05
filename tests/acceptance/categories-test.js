import { module, test } from 'qunit';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';
import { v4 as uuidv4 } from 'uuid';

module('Acceptance | categories', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    session.authToken = 'token';
  });

  test('visiting /categories', async function(assert) {
    await visit('/categories');

    assert.equal(currentURL(), '/categories');
    assert.dom('.container-lg').exists();
    assert.dom('.title-with-buttons').exists();
    assert.dom('.title-with-buttons h1').exists();
    assert.dom('.title-with-buttons h1').containsText('Categories');
    assert.dom('.title-with-buttons .buttons').exists();
    assert.dom('.title-with-buttons .buttons a').exists({ count: 1 });
    assert.dom('.title-with-buttons .buttons a').containsText('New');
    assert.dom('nav.pagination').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 25 });

    await click('.pagination-next button');

    assert.equal(currentURL(), '/categories?page=2');
    assert.dom('table tbody tr').exists({ count: 1 });

    await click('.pagination-previous button');

    assert.equal(currentURL(), '/categories?page=1');
    assert.dom('table tbody tr').exists({ count: 25 });
  });

  test('visiting /categories/:id', async function(assert) {
    const id = uuidv4();
    await visit(`/categories/${id}`);

    assert.equal(currentURL(), `/categories/${id}`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Category - Test Category');
    assert.dom('nav.secondary').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 8 });
    assert.dom('table tbody tr:nth-of-type(1) td:nth-of-type(1)').containsText('ID');
    assert.dom('table tbody tr:nth-of-type(2) td:nth-of-type(1)').containsText('Name');
    assert.dom('table tbody tr:nth-of-type(3) td:nth-of-type(1)').containsText('Created At');
    assert.dom('table tbody tr:nth-of-type(4) td:nth-of-type(1)').containsText('Number of subcategories');
    assert.dom('table tbody tr:nth-of-type(5) td:nth-of-type(1)').containsText('Number of expenses');
    assert.dom('table tbody tr:nth-of-type(6) td:nth-of-type(1)').containsText('Cumulative Expense Amount');
    assert.dom('table tbody tr:nth-of-type(7) td:nth-of-type(1)').containsText('Cumulative Expense Reimbursed');
    assert.dom('table tbody tr:nth-of-type(8) td:nth-of-type(1)').containsText('Cumulative Expense Total');
  });

  test('visiting /categories/:id/settings', async function(assert) {
    const id = uuidv4();
    await visit(`/categories/${id}/settings`);

    assert.equal(currentURL(), `/categories/${id}/settings`);
    assert.dom('.container-lg').exists();
    assert.dom('.container-lg h1').exists();
    assert.dom('.container-lg h1').containsText('Category - Test Category');
    assert.dom('.container-lg nav.secondary').exists();
    assert.dom('.container-sm').exists();
    assert.dom('.container-sm a').exists();
    assert.dom('.container-sm a').hasClass('button');
    assert.dom('.container-sm a').containsText('Edit');
    assert.dom('.container-sm button').exists();
    assert.dom('.container-sm button').hasClass('button');
    assert.dom('.container-sm button').hasClass('alert');
    assert.dom('.container-sm button').containsText('Delete');
    assert.dom('.overlay').doesNotExist();

    await click('.container-sm button.button.alert');

    assert.dom('.overlay').exists();
    assert.dom('.overlay .modal').exists();
    assert.dom('.overlay .modal .callout').doesNotExist();
    assert.dom('.overlay .modal > p').exists();
    assert.dom('.overlay .modal > p').containsText('Are you sure you want to delete category Test Category?');
    assert.dom('.overlay .modal button.button.alert').exists();
    assert.dom('.overlay .modal button.button.alert').containsText('Delete');
    assert.dom('.overlay .modal button.button.cancel').exists();
    assert.dom('.overlay .modal button.button.cancel').containsText('Cancel');

    await click('.overlay .modal button.button.cancel');

    assert.dom('.overlay').doesNotExist();

    // await click('.container-sm a');
    //
    // assert.equal(currentURL(), `/vendors/${id}/edit`);
  });

  test('renders callout when deleting category returns errors', async function(assert) {
    await visit('/categories/fa418da1-c598-41f5-a5e7-192d023e74ed/settings');

    assert.equal(currentURL(), '/categories/fa418da1-c598-41f5-a5e7-192d023e74ed/settings');
    assert.dom('.container-sm button.button.alert').exists();

    await click('.container-sm button.button.alert');

    assert.dom('.overlay .modal button.button.alert').exists();

    await click('.overlay .modal button.button.alert');

    assert.equal(currentURL(), '/categories/fa418da1-c598-41f5-a5e7-192d023e74ed/settings');

    assert.dom('.overlay .modal .callout').exists();
    assert.dom('.overlay .modal .callout').hasClass('alert');
    assert.dom('.overlay .modal .callout p').exists({ count: 2 });
    assert.dom('.overlay .modal .callout p:nth-of-type(1)').containsText('Test category delete error 1.');
    assert.dom('.overlay .modal .callout p:nth-of-type(2)').containsText('Test category delete error 2.');

    await click('.overlay .modal button.button.cancel');

    assert.dom('.overlay').doesNotExist();

    // Verify the error callout is cleared when opening the modal again.
    await click('.container-sm button.button.alert');

    assert.dom('.overlay').exists();
    assert.dom('.overlay .modal .callout').doesNotExist();
  });

  test('transitions to /categories on successful category deletion', async function(assert) {
    const id = uuidv4();
    await visit(`/categories/${id}/settings`);

    assert.equal(currentURL(), `/categories/${id}/settings`);
    assert.dom('.container-sm button.button.alert').exists();

    await click('.container-sm button.button.alert');

    assert.dom('.overlay .modal button.button.alert').exists();

    await click('.overlay .modal button.button.alert');

    assert.equal(currentURL(), '/categories');
  });

  test('visiting /categories/:id/subcategories', async function(assert) {
    const id = uuidv4();
    await visit(`/categories/${id}/subcategories`);

    assert.equal(currentURL(), `/categories/${id}/subcategories`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Category - Test Category');
    assert.dom('nav.secondary').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 25 });

    await click('.pagination-next button');

    assert.equal(currentURL(), `/categories/${id}/subcategories?page=2`);
    assert.dom('table tbody tr').exists({ count: 1 });

    await click('.pagination-previous button');

    assert.equal(currentURL(), `/categories/${id}/subcategories?page=1`);
    assert.dom('table tbody tr').exists({ count: 25 });
  });
});
