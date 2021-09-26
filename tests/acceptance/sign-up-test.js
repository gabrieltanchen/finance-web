import { module, test } from 'qunit';
import {
  click,
  currentURL,
  fillIn,
  visit,
} from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | sign up', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
  });

  test('visiting /sign-up', async function(assert) {
    await visit('/sign-up');

    assert.equal(currentURL(), '/sign-up');

    assert.dom('main h1').exists();
    assert.dom('main h1').containsText('Sign Up');
    assert.dom('main #user-email-input').exists();
    assert.dom('main #user-first-name-input').exists();
    assert.dom('main #user-last-name-input').exists();
    assert.dom('main #user-password-input').exists();
    assert.dom('main #user-submit').exists();
    assert.dom('.callout.alert').doesNotExist();
  });

  test('should show error from api', async function(assert) {
    await visit('/sign-up');

    await fillIn('#user-email-input', 'error@example.com');
    await fillIn('#user-first-name-input', 'Test');
    await fillIn('#user-last-name-input', 'User');
    await fillIn('#user-password-input', 'password');
    await click('#user-submit');

    assert.dom('.callout').exists();
    assert.dom('.callout.alert p').exists({ count: 2 });
    assert.dom('.callout.alert p:nth-of-type(1)').containsText('Test user post error 1');
    assert.dom('.callout.alert p:nth-of-type(2)').containsText('Test user post error 2');
  });

  test('should transition to dashboard after successful sign up', async function(assert) {
    await visit('/sign-up');

    await fillIn('#user-email-input', 'hello@example.com');
    await fillIn('#user-first-name-input', 'Test');
    await fillIn('#user-last-name-input', 'User');
    await fillIn('#user-password-input', 'password');
    await click('#user-submit');

    assert.equal(currentURL(), '/dashboard');
  });
});
