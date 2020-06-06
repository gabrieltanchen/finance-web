import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
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
});
