import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';
import { v4 as uuidv4 } from 'uuid';

module('Acceptance | budgets', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    session.authToken = 'token';
  });

  test('visiting /budgets/:id', async function(assert) {
    const id = uuidv4();
    await visit(`/budgets/${id}`);

    assert.equal(currentURL(), `/budgets/${id}`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('View Budget');
    assert.dom('nav.secondary').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(1) td:nth-of-type(1)').containsText('ID');
    assert.dom('table tbody tr:nth-of-type(2) td:nth-of-type(1)').containsText('Subcategory');
    assert.dom('table tbody tr:nth-of-type(3) td:nth-of-type(1)').containsText('Year');
    assert.dom('table tbody tr:nth-of-type(4) td:nth-of-type(1)').containsText('Month');
    assert.dom('table tbody tr:nth-of-type(5) td:nth-of-type(1)').containsText('Amount');
    assert.dom('table tbody tr:nth-of-type(6) td:nth-of-type(1)').containsText('Created At');
  });
});
