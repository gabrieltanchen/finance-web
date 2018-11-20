import { module, test } from 'qunit';
import {
  currentURL,
  visit,
} from '@ember/test-helpers';
import { get } from '@ember/object';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | invalid token redirect', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    get(session, 'cookie').setCookie('token', 'invalidtoken');
  });

  test('should redirect with an invalid token', async function(assert) {
    await visit('/dashboard');
    assert.equal(currentURL(), '/login');
  });
});
