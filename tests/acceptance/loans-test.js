import { module, test } from 'qunit';
import {
  click,
  currentURL,
  visit,
} from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | loans', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    session.authToken = 'token';
  });

  test('visiting /loans', async function(assert) {
    await visit('/loans');

    assert.strictEqual(currentURL(), '/loans');
    assert.dom('.container-lg').exists();
    assert.dom('.title-with-buttons').exists();
    assert.dom('.title-with-buttons h1').exists();
    assert.dom('.title-with-buttons h1').containsText('Loans');
    // @todo add new button test
    assert.dom('nav.pagination').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 25 });

    await click('.pagination-next button');

    assert.equal(currentURL(), '/loans?page=2');
    assert.dom('table tbody tr').exists({ count: 1 });
    await click('.pagination-previous button');

    assert.equal(currentURL(), '/loans?page=1');
    assert.dom('table tbody tr').exists({ count: 25 });
  });
});
