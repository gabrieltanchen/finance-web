import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | dashboard', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    session.authToken = 'token';
  });

  test('visiting /dashboard', async function(assert) {
    await visit('/dashboard');

    assert.equal(currentURL(), '/dashboard');
    assert.dom('.container-md').exists();
    assert.dom('.dashboard-month-selector').exists();
    assert.dom('.budget-table').exists();
    assert.dom('.budget-table table').exists();
    assert.dom('.budget-table table thead tr').exists({ count: 1 });
    assert.dom('.budget-table table thead tr th').exists({ count: 3 });
    assert.dom('.budget-table table thead tr th:nth-of-type(1)').containsText('Budget');
    assert.dom('.budget-table table thead tr th:nth-of-type(2)').containsText('Actual');
    assert.dom('.budget-table table thead tr th:nth-of-type(3)').containsText('+ / -');
    assert.dom('.budget-table table tbody tr').exists({ count: 1 });
    assert.dom('.budget-table table tbody tr td').exists({ count: 3 });
    assert.dom('.income-table').exists();
    assert.dom('.income-table table').exists();
    assert.dom('.income-table table thead tr').exists({ count: 1 });
    assert.dom('.income-table table thead tr th').exists({ count: 3 });
    assert.dom('.income-table table thead tr th:nth-of-type(1)').containsText('Income');
    assert.dom('.income-table table thead tr th:nth-of-type(2)').containsText('Budget + / -');
    assert.dom('.income-table table thead tr th:nth-of-type(3)').containsText('Actual + / -');
    assert.dom('.income-table table tbody tr').exists({ count: 1 });
    assert.dom('.income-table table tbody tr td').exists({ count: 3 });
    assert.dom('.budget-report-table').exists();
    assert.dom('.budget-report-table table').exists();
    assert.dom('.budget-report-table table thead tr').exists({ count: 1 });
    assert.dom('.budget-report-table table thead tr th').exists({ count: 4 });
    assert.dom('.budget-report-table table thead tr th:nth-of-type(1)').containsText('Name');
    assert.dom('.budget-report-table table thead tr th:nth-of-type(2)').containsText('Budget');
    assert.dom('.budget-report-table table thead tr th:nth-of-type(3)').containsText('Actual');
    assert.dom('.budget-report-table table thead tr th:nth-of-type(4)').containsText('+ / -');
  });
});
