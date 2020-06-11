import { module, test } from 'qunit';
import { click, currentURL, visit } from '@ember/test-helpers';
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

  test('visiting /subcategories/:id/annual-report', async function(assert) {
    const id = uuidv4();
    await visit(`/subcategories/${id}/annual-report`);

    assert.equal(currentURL(), `/subcategories/${id}/annual-report`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Subcategory - Test Subcategory');
    assert.dom('nav.secondary').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 39 });
    assert.dom('table tbody tr:nth-of-type(1) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(1) td:nth-of-type(1)').containsText('January Budget');
    assert.dom('table tbody tr:nth-of-type(2) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(2) td:nth-of-type(1)').containsText('January Actual');
    assert.dom('table tbody tr:nth-of-type(3) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(3) td:nth-of-type(1)').containsText('January Balance');
    assert.dom('table tbody tr:nth-of-type(4) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(4) td:nth-of-type(1)').containsText('February Budget');
    assert.dom('table tbody tr:nth-of-type(5) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(5) td:nth-of-type(1)').containsText('February Actual');
    assert.dom('table tbody tr:nth-of-type(6) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(6) td:nth-of-type(1)').containsText('February Balance');
    assert.dom('table tbody tr:nth-of-type(7) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(7) td:nth-of-type(1)').containsText('March Budget');
    assert.dom('table tbody tr:nth-of-type(8) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(8) td:nth-of-type(1)').containsText('March Actual');
    assert.dom('table tbody tr:nth-of-type(9) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(9) td:nth-of-type(1)').containsText('March Balance');
    assert.dom('table tbody tr:nth-of-type(10) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(10) td:nth-of-type(1)').containsText('April Budget');
    assert.dom('table tbody tr:nth-of-type(11) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(11) td:nth-of-type(1)').containsText('April Actual');
    assert.dom('table tbody tr:nth-of-type(12) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(12) td:nth-of-type(1)').containsText('April Balance');
    assert.dom('table tbody tr:nth-of-type(13) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(13) td:nth-of-type(1)').containsText('May Budget');
    assert.dom('table tbody tr:nth-of-type(14) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(14) td:nth-of-type(1)').containsText('May Actual');
    assert.dom('table tbody tr:nth-of-type(15) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(15) td:nth-of-type(1)').containsText('May Balance');
    assert.dom('table tbody tr:nth-of-type(16) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(16) td:nth-of-type(1)').containsText('June Budget');
    assert.dom('table tbody tr:nth-of-type(17) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(17) td:nth-of-type(1)').containsText('June Actual');
    assert.dom('table tbody tr:nth-of-type(18) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(18) td:nth-of-type(1)').containsText('June Balance');
    assert.dom('table tbody tr:nth-of-type(19) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(19) td:nth-of-type(1)').containsText('July Budget');
    assert.dom('table tbody tr:nth-of-type(20) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(20) td:nth-of-type(1)').containsText('July Actual');
    assert.dom('table tbody tr:nth-of-type(21) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(21) td:nth-of-type(1)').containsText('July Balance');
    assert.dom('table tbody tr:nth-of-type(22) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(22) td:nth-of-type(1)').containsText('August Budget');
    assert.dom('table tbody tr:nth-of-type(23) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(23) td:nth-of-type(1)').containsText('August Actual');
    assert.dom('table tbody tr:nth-of-type(24) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(24) td:nth-of-type(1)').containsText('August Balance');
    assert.dom('table tbody tr:nth-of-type(25) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(25) td:nth-of-type(1)').containsText('September Budget');
    assert.dom('table tbody tr:nth-of-type(26) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(26) td:nth-of-type(1)').containsText('September Actual');
    assert.dom('table tbody tr:nth-of-type(27) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(27) td:nth-of-type(1)').containsText('September Balance');
    assert.dom('table tbody tr:nth-of-type(28) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(28) td:nth-of-type(1)').containsText('October Budget');
    assert.dom('table tbody tr:nth-of-type(29) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(29) td:nth-of-type(1)').containsText('October Actual');
    assert.dom('table tbody tr:nth-of-type(30) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(30) td:nth-of-type(1)').containsText('October Balance');
    assert.dom('table tbody tr:nth-of-type(31) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(31) td:nth-of-type(1)').containsText('November Budget');
    assert.dom('table tbody tr:nth-of-type(32) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(32) td:nth-of-type(1)').containsText('November Actual');
    assert.dom('table tbody tr:nth-of-type(33) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(33) td:nth-of-type(1)').containsText('November Balance');
    assert.dom('table tbody tr:nth-of-type(34) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(34) td:nth-of-type(1)').containsText('December Budget');
    assert.dom('table tbody tr:nth-of-type(35) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(35) td:nth-of-type(1)').containsText('December Actual');
    assert.dom('table tbody tr:nth-of-type(36) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(36) td:nth-of-type(1)').containsText('December Balance');
    assert.dom('table tbody tr:nth-of-type(37) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(37) td:nth-of-type(1)').containsText('Total Annual Budget');
    assert.dom('table tbody tr:nth-of-type(38) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(38) td:nth-of-type(1)').containsText('Total Annual Actual');
    assert.dom('table tbody tr:nth-of-type(39) td').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(39) td:nth-of-type(1)').containsText('Total Annual Balance');
  });

  test('visiting /subcategories/:id/budgets', async function(assert) {
    const id = uuidv4();
    await visit(`/subcategories/${id}/budgets`);

    assert.equal(currentURL(), `/subcategories/${id}/budgets`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Subcategory - Test Subcategory');
    assert.dom('nav.secondary').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 25 });

    await click('.pagination-next button');

    assert.equal(currentURL(), `/subcategories/${id}/budgets?page=2`);
    assert.dom('table tbody tr').exists({ count: 1 });

    await click('.pagination-previous button');

    assert.equal(currentURL(), `/subcategories/${id}/budgets?page=1`);
    assert.dom('table tbody tr').exists({ count: 25 });
  });

  test('visiting /subcategories/:id/expenses', async function(assert) {
    const id = uuidv4();
    await visit(`/subcategories/${id}/expenses`);

    assert.equal(currentURL(), `/subcategories/${id}/expenses`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Subcategory - Test Subcategory');
    assert.dom('nav.secondary').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 25 });

    await click('.pagination-next button');

    assert.equal(currentURL(), `/subcategories/${id}/expenses?page=2`);
    assert.dom('table tbody tr').exists({ count: 1 });

    await click('.pagination-previous button');

    assert.equal(currentURL(), `/subcategories/${id}/expenses?page=1`);
    assert.dom('table tbody tr').exists({ count: 25 });
  });
});
