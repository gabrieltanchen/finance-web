import { module, test } from 'qunit';
import { currentURL, visit } from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';
import { v4 as uuidv4 } from 'uuid';

module('Acceptance | expenses', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    session.authToken = 'token';
  });

  test('visiting /expenses/:id', async function(assert) {
    const id = uuidv4();
    await visit(`/expenses/${id}`);

    assert.equal(currentURL(), `/expenses/${id}`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('View Expense');
    assert.dom('nav.secondary').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 9 });
    assert.dom('table tbody tr:nth-of-type(1) td:nth-of-type(1)').containsText('ID');
    assert.dom('table tbody tr:nth-of-type(2) td:nth-of-type(1)').containsText('Date');
    assert.dom('table tbody tr:nth-of-type(3) td:nth-of-type(1)').containsText('Description');
    assert.dom('table tbody tr:nth-of-type(4) td:nth-of-type(1)').containsText('Amount');
    assert.dom('table tbody tr:nth-of-type(5) td:nth-of-type(1)').containsText('Reimbursed Amount');
    assert.dom('table tbody tr:nth-of-type(6) td:nth-of-type(1)').containsText('Subcategory');
    assert.dom('table tbody tr:nth-of-type(7) td:nth-of-type(1)').containsText('Household Member');
    assert.dom('table tbody tr:nth-of-type(8) td:nth-of-type(1)').containsText('Vendor');
    assert.dom('table tbody tr:nth-of-type(9) td:nth-of-type(1)').containsText('Created At');
  });
});
