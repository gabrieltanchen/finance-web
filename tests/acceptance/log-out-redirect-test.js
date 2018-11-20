import { module, test } from 'qunit';
import {
  click,
  currentURL,
  visit,
} from '@ember/test-helpers';
import { get } from '@ember/object';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | log out redirect', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    get(session, 'cookie').setCookie('token', 'token');
  });

  test('should redirect when logging out', async function(assert) {
    await visit('/dashboard');
    await click('#menu-logout');
    assert.equal(currentURL(), '/');
  });
});
