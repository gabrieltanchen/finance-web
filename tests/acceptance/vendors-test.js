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
});
