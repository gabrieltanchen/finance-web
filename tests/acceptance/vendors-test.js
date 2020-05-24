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
  });

  test('navigating pagination', async function(assert) {
    await visit('/vendors');

    assert.equal(currentURL(), '/vendors');
    assert.dom('table tbody tr').exists({ count: 25 });

    await click('.pagination-next button');

    assert.equal(currentURL(), '/vendors?page=2');
    assert.dom('table tbody tr').exists({ count: 1 });

    await click('.pagination-previous button');

    assert.equal(currentURL(), '/vendors?page=1');
    assert.dom('table tbody tr').exists({ count: 25 });
  });
});
