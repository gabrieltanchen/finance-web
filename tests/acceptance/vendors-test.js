import { module, test } from 'qunit';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | vendors', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    session.authToken = 'token';
  });

  test('visiting /vendors', async function(assert) {
    await visit('/vendors');

    assert.equal(currentURL(), '/vendors');
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Vendors');
    assert.dom('nav.pagination').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 25 });

    await click('.pagination-next button');

    assert.equal(currentURL(), '/vendors?page=2');
    assert.dom('table tbody tr').exists({ count: 1 });

    await click('.pagination-previous button');

    assert.equal(currentURL(), '/vendors?page=1');
    assert.dom('table tbody tr').exists({ count: 25 });
  });

  test('visiting /vendors/:id', async function(assert) {
    await visit('/vendors/42b96703-cd77-422e-b40c-3b99e7d7f12c');

    assert.equal(currentURL(), '/vendors/42b96703-cd77-422e-b40c-3b99e7d7f12c');
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Vendor - Test Vendor');
    assert.dom('nav.secondary').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 7 });
    assert.dom('table tbody tr:nth-of-type(1) td:nth-of-type(1)').containsText('ID');
    assert.dom('table tbody tr:nth-of-type(2) td:nth-of-type(1)').containsText('Name');
    assert.dom('table tbody tr:nth-of-type(3) td:nth-of-type(1)').containsText('Created At');
    assert.dom('table tbody tr:nth-of-type(4) td:nth-of-type(1)').containsText('Number of expenses');
    assert.dom('table tbody tr:nth-of-type(5) td:nth-of-type(1)').containsText('Cumulative Amount');
    assert.dom('table tbody tr:nth-of-type(6) td:nth-of-type(1)').containsText('Cumulative Reimbursed');
    assert.dom('table tbody tr:nth-of-type(7) td:nth-of-type(1)').containsText('Cumulative Total');
  });

  test('visiting /vendors/:id/expenses', async function(assert) {
    await visit('/vendors/42b96703-cd77-422e-b40c-3b99e7d7f12c/expenses');

    assert.equal(currentURL(), '/vendors/42b96703-cd77-422e-b40c-3b99e7d7f12c/expenses');
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Vendor - Test Vendor');
    assert.dom('nav.secondary').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 25 });

    await click('.pagination-next button');

    assert.equal(currentURL(), '/vendors/42b96703-cd77-422e-b40c-3b99e7d7f12c/expenses?page=2');
    assert.dom('table tbody tr').exists({ count: 1 });

    await click('.pagination-previous button');

    assert.equal(currentURL(), '/vendors/42b96703-cd77-422e-b40c-3b99e7d7f12c/expenses?page=1');
    assert.dom('table tbody tr').exists({ count: 25 });
  });

  test('visiting /vendors/:id/settings', async function(assert) {
    await visit('/vendors/42b96703-cd77-422e-b40c-3b99e7d7f12c/settings');

    assert.equal(currentURL(), '/vendors/42b96703-cd77-422e-b40c-3b99e7d7f12c/settings');
    assert.dom('.container-lg').exists();
    assert.dom('.container-lg h1').exists();
    assert.dom('.container-lg h1').containsText('Vendor - Test Vendor');
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
    assert.dom('.overlay .modal > p').containsText('Are you sure you want to delete vendor Test Vendor?');
    assert.dom('.overlay .modal button.button.alert').exists();
    assert.dom('.overlay .modal button.button.alert').containsText('Delete');
    assert.dom('.overlay .modal button.button.cancel').exists();
    assert.dom('.overlay .modal button.button.cancel').containsText('Cancel');

    await click('.overlay .modal button.button.cancel');

    assert.dom('.overlay').doesNotExist();
  });

  test('renders callout when deleting vendor returns errors', async function(assert) {
    await visit('/vendors/b6f0441e-bdee-4172-a646-4d8c9191db57/settings');

    assert.equal(currentURL(), '/vendors/b6f0441e-bdee-4172-a646-4d8c9191db57/settings');
    assert.dom('.container-sm button.button.alert').exists();

    await click('.container-sm button.button.alert');

    assert.dom('.overlay .modal button.button.alert').exists();

    await click('.overlay .modal button.button.alert');

    assert.equal(currentURL(), '/vendors/b6f0441e-bdee-4172-a646-4d8c9191db57/settings');
    assert.dom('.overlay .modal .callout').exists();
    assert.dom('.overlay .modal .callout').hasClass('alert');
    assert.dom('.overlay .modal .callout p').exists({ count: 1 });
    assert.dom('.overlay .modal .callout p').containsText('Test error.');

    await click('.overlay .modal button.button.cancel');

    assert.dom('.overlay').doesNotExist();

    // Verify the error callout is cleared when opening the modal again.
    await click('.container-sm button.button.alert');

    assert.dom('.overlay').exists();
    assert.dom('.overlay .modal .callout').doesNotExist();
  });

  test('transitions to vendors.index on successful vendor deletion', async function(assert) {
    await visit('/vendors/42b96703-cd77-422e-b40c-3b99e7d7f12c/settings');

    assert.equal(currentURL(), '/vendors/42b96703-cd77-422e-b40c-3b99e7d7f12c/settings');
    assert.dom('.container-sm button.button.alert').exists();

    await click('.container-sm button.button.alert');

    assert.dom('.overlay .modal button.button.alert').exists();

    await click('.overlay .modal button.button.alert');

    assert.equal(currentURL(), '/vendors');
  });
});
