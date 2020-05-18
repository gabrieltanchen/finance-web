import { module, test } from 'qunit';
import {
  click,
  currentURL,
  fillIn,
  visit,
} from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | login', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /login', async function(assert) {
    await visit('/login');

    assert.equal(currentURL(), '/login');

    assert.dom('main h1').exists();
    assert.dom('main h1').containsText('Login');
    assert.dom('main #login-email').exists();
    assert.dom('main #login-password').exists();
    assert.dom('main #login-submit').exists();
    assert.dom('.callout.alert').doesNotExist();
  });

  test('should show error from api', async function(assert) {
    await visit('/login');

    await fillIn('#login-email', 'hello@error.com');
    await fillIn('#login-password', 'password');
    await click('#login-submit');

    assert.dom('.callout').exists();
    assert.dom('.callout.alert p').exists({ count: 2 });
    assert.dom('.callout.alert p:nth-of-type(1)').containsText('Test login error 1');
    assert.dom('.callout.alert p:nth-of-type(2)').containsText('Test login error 2');
  });

  test('should transition to dashboard after successful login', async function(assert) {
    await visit('/login');

    await fillIn('#login-email', 'hello@example.com');
    await fillIn('#login-password', 'password');
    await click('#login-submit');

    assert.equal(currentURL(), '/dashboard');
  });
});
