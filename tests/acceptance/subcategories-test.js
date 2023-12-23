import { module, test } from 'qunit';
import {
  click,
  currentURL,
  fillIn,
  visit,
} from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';
import { v4 as uuidv4 } from 'uuid';

module('Acceptance | subcategories', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    session.authToken = 'token';
  });

  test('visiting /subcategories/new', async function(assert) {
    const id = uuidv4();
    await visit(`/subcategories/new?categoryId=${id}`);

    assert.equal(currentURL(), `/subcategories/new?categoryId=${id}`);
    assert.dom('.container-sm').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('New Subcategory');
    assert.dom('form').exists();
    assert.dom('#subcategory-name-input').exists();
    assert.dom('#subcategory-submit').exists();
    assert.dom('.callout.alert').doesNotExist();
  });

  test('should render errors from api when creating subcategory', async function(assert) {
    const id = uuidv4();
    await visit(`/subcategories/new?categoryId=${id}`);

    assert.equal(currentURL(), `/subcategories/new?categoryId=${id}`);

    await fillIn('#subcategory-name-input', 'Error Subcategory');
    await click('#subcategory-submit');

    assert.dom('.callout.alert').exists();
    assert.dom('.callout.alert p').exists({ count: 2 });
    assert.dom('.callout.alert p:nth-of-type(1)').containsText('Test subcategory post error 1.');
    assert.dom('.callout.alert p:nth-of-type(2)').containsText('Test subcategory post error 2.');
  });

  test('should transition to subcategory details after creating subcategory', async function(assert) {
    const id = uuidv4();
    await visit(`/subcategories/new?categoryId=${id}`);

    assert.equal(currentURL(), `/subcategories/new?categoryId=${id}`);

    await fillIn('#subcategory-name-input', 'New Subcategory');
    await click('#subcategory-submit');

    assert.equal(currentURL(), '/subcategories/e79685f1-9419-4f88-b2d6-6b5c1f75758b');
  });

  test('visiting /subcategories/:id', async function(assert) {
    const id = uuidv4();
    await visit(`/subcategories/${id}`);

    assert.equal(currentURL(), `/subcategories/${id}`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Subcategory - Test Subcategory');
    assert.dom('nav.secondary').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 8 });
    assert.dom('table tbody tr:nth-of-type(1) td:nth-of-type(1)').containsText('ID');
    assert.dom('table tbody tr:nth-of-type(2) td:nth-of-type(1)').containsText('Name');
    assert.dom('table tbody tr:nth-of-type(3) td:nth-of-type(1)').containsText('Created At');
    assert.dom('table tbody tr:nth-of-type(4) td:nth-of-type(1)').containsText('Parent Category');
    assert.dom('table tbody tr:nth-of-type(5) td:nth-of-type(1)').containsText('Number of expenses');
    assert.dom('table tbody tr:nth-of-type(6) td:nth-of-type(1)').containsText('Cumulative Expense Amount');
    assert.dom('table tbody tr:nth-of-type(7) td:nth-of-type(1)').containsText('Cumulative Expense Reimbursed');
    assert.dom('table tbody tr:nth-of-type(8) td:nth-of-type(1)').containsText('Cumulative Expense Total');
  });

  test('visiting /subcategories/:id/annual-report', async function(assert) {
    const id = uuidv4();
    await visit(`/subcategories/${id}/annual-report`);

    assert.equal(currentURL(), `/subcategories/${id}/annual-report`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Subcategory - Test Subcategory');
    assert.dom('nav.secondary').exists();
    assert.dom('canvas').exists();
    assert.dom('nav.report-pagination').exists();
  });

  test('visiting /subcategories/:id/budgets', async function(assert) {
    const id = uuidv4();
    await visit(`/subcategories/${id}/budgets`);

    assert.equal(currentURL(), `/subcategories/${id}/budgets`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Subcategory - Test Subcategory');
    assert.dom('nav.secondary').exists();
    assert.dom('.pagination-header').exists();
    assert.dom('.pagination-header .buttons').exists();
    assert.dom('.pagination-header .buttons a').exists({ count: 1 });
    assert.dom('.pagination-header .buttons a').containsText('New');
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 25 });

    await click('.pagination-next button');

    assert.equal(currentURL(), `/subcategories/${id}/budgets?page=2`);
    assert.dom('table tbody tr').exists({ count: 1 });

    await click('.pagination-previous button');

    assert.equal(currentURL(), `/subcategories/${id}/budgets?page=1`);
    assert.dom('table tbody tr').exists({ count: 25 });

    await click('.pagination-header .buttons a');

    assert.equal(currentURL(), `/budgets/new?subcategoryId=${id}`);
  });

  test('visiting /subcategories/:id/edit', async function(assert) {
    const id = uuidv4();
    await visit(`/subcategories/${id}/edit`);

    assert.equal(currentURL(), `/subcategories/${id}/edit`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Edit Subcategory - Test Subcategory');
    assert.dom('nav.secondary').exists();
    assert.dom('form').exists();
    assert.dom('#subcategory-name-input').exists();
    assert.dom('#subcategory-submit').exists();
    assert.dom('.callout.alert').doesNotExist();
  });

  test('should render errors from api when editing subcategory', async function(assert) {
    await visit('/subcategories/1e89e24d-82bc-4f8b-a4e9-d0d2550bd0dd/edit');

    assert.equal(currentURL(), '/subcategories/1e89e24d-82bc-4f8b-a4e9-d0d2550bd0dd/edit');

    await fillIn('#subcategory-name-input', 'Updated Subcategory');
    await click('#subcategory-submit');

    assert.dom('.callout.alert').exists();
    assert.dom('.callout.alert p').exists({ count: 2 });
    assert.dom('.callout.alert p:nth-of-type(1)').containsText('Test subcategory patch error 1.');
    assert.dom('.callout.alert p:nth-of-type(2)').containsText('Test subcategory patch error 2.');

    // Test that the subcategory name gets reset after navigating away from edit
    // page.
    await click('nav.secondary ul li:nth-of-type(1) a');

    assert.equal(currentURL(), '/subcategories/1e89e24d-82bc-4f8b-a4e9-d0d2550bd0dd');
    assert.dom('h1').containsText('Subcategory - Test Subcategory');
  });

  test('should transition to subcategory details after editing subcategory', async function(assert) {
    const id = uuidv4();
    await visit(`/subcategories/${id}/edit`);

    assert.equal(currentURL(), `/subcategories/${id}/edit`);

    await fillIn('#subcategory-name-input', 'Updated Subcategory');
    await click('#subcategory-submit');

    assert.equal(currentURL(), `/subcategories/${id}`);
  });

  test('visiting /subcategories/:id/expenses', async function(assert) {
    const id = uuidv4();
    await visit(`/subcategories/${id}/expenses`);

    assert.equal(currentURL(), `/subcategories/${id}/expenses`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Subcategory - Test Subcategory');
    assert.dom('nav.secondary').exists();
    assert.dom('.pagination-header').exists();
    assert.dom('.pagination-header .buttons').exists();
    assert.dom('.pagination-header .buttons a').exists({ count: 1 });
    assert.dom('.pagination-header .buttons a').containsText('New');
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 25 });

    await click('.pagination-next button');

    assert.equal(currentURL(), `/subcategories/${id}/expenses?page=2`);
    assert.dom('table tbody tr').exists({ count: 1 });

    await click('.pagination-previous button');

    assert.equal(currentURL(), `/subcategories/${id}/expenses?page=1`);
    assert.dom('table tbody tr').exists({ count: 25 });

    await click('.pagination-header .buttons a');

    assert.equal(currentURL(), `/expenses/new?subcategoryId=${id}`);
  });

  test('visiting /subcategories/:id/settings', async function(assert) {
    const id = uuidv4();
    await visit(`/subcategories/${id}/settings`);

    assert.equal(currentURL(), `/subcategories/${id}/settings`);
    assert.dom('.container-lg').exists();
    assert.dom('.container-lg h1').exists();
    assert.dom('.container-lg h1').containsText('Subcategory - Test Subcategory');
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
    assert.dom('.overlay .modal > p').containsText('Are you sure you want to delete subcategory Test Subcategory?');
    assert.dom('.overlay .modal button.button.alert').exists();
    assert.dom('.overlay .modal button.button.alert').containsText('Delete');
    assert.dom('.overlay .modal button.button.cancel').exists();
    assert.dom('.overlay .modal button.button.cancel').containsText('Cancel');

    await click('.overlay .modal button.button.cancel');

    assert.dom('.overlay').doesNotExist();

    await click('.container-sm a');

    assert.equal(currentURL(), `/subcategories/${id}/edit`);
  });

  test('renders callout when deleting subcategory returns errors', async function(assert) {
    await visit('/subcategories/1187060b-8321-4cfb-b3bf-f2d7a8b501b3/settings');

    assert.equal(currentURL(), '/subcategories/1187060b-8321-4cfb-b3bf-f2d7a8b501b3/settings');

    assert.dom('.container-sm button.button.alert').exists();

    await click('.container-sm button.button.alert');

    assert.dom('.overlay .modal button.button.alert').exists();

    await click('.overlay .modal button.button.alert');

    assert.equal(currentURL(), '/subcategories/1187060b-8321-4cfb-b3bf-f2d7a8b501b3/settings');

    assert.dom('.overlay .modal .callout').exists();
    assert.dom('.overlay .modal .callout').hasClass('alert');
    assert.dom('.overlay .modal .callout p').exists({ count: 2 });
    assert.dom('.overlay .modal .callout p:nth-of-type(1)').containsText('Test subcategory delete error 1.');
    assert.dom('.overlay .modal .callout p:nth-of-type(2)').containsText('Test subcategory delete error 2.');

    await click('.overlay .modal button.button.cancel');

    assert.dom('.overlay').doesNotExist();

    // Verify the error callout is cleared when opening the modal again.
    await click('.container-sm button.button.alert');

    assert.dom('.overlay').exists();
    assert.dom('.overlay .modal .callout').doesNotExist();
  });

  test('transitions to category subcategories page on successful subcategory deletion', async function(assert) {
    const id = uuidv4();
    await visit(`/subcategories/${id}/settings`);

    assert.equal(currentURL(), `/subcategories/${id}/settings`);
    assert.dom('.container-sm button.button.alert').exists();

    await click('.container-sm button.button.alert');

    assert.dom('.overlay .modal button.button.alert').exists();

    await click('.overlay .modal button.button.alert');

    assert.equal(currentURL(), '/categories/d44a4e6e-90d7-4574-b5c8-eb5c0772e1a1/subcategories');
  });
});
