import { module, test } from 'qunit';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | employers', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    session.authToken = 'token';
  });

  test('visiting /employers', async function(assert) {
    await visit('/employers');

    assert.strictEqual(currentURL(), '/employers');
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Employers');
    // assert.dom('.pagination-header').exists();
    // assert.dom('.pagination-header .buttons').exists();
    // assert.dom('.pagination-header .buttons a').exists({ count: 1 });
    // assert.dom('.pagination-header .buttons a').containsText('New');
    // assert.dom('.pagination-header nav.pagination').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 25 });

    await click('.pagination-next button');

    assert.equal(currentURL(), '/employers?page=2');
    assert.dom('table tbody tr').exists({ count: 1 });

    await click('.pagination-previous button');

    assert.equal(currentURL(), '/employers?page=1');
    assert.dom('table tbody tr').exists({ count: 25 });

    // await click('.pagination-header .buttons a');

    // assert.equal(currentURL(), '/employers/new');
  });
});
