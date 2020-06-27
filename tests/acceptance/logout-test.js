import { module, test } from 'qunit';
import { click, currentURL, visit } from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | logout', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    session.authToken = 'token';
  });

  test('visiting /logout', async function(assert) {
    await visit('/dashboard');

    assert.dom('#logout-button').exists();
    await click('#logout-button');

    assert.equal(currentURL(), '/');
  });
});
