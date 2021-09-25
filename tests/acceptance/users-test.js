import { module, test } from 'qunit';
import {
  click,
  currentURL,
  fillIn,
  visit,
} from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';
import { v4 as uuidv4 } from 'uuid';

module('Acceptance | users', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    session.authToken = 'token';
  });

  test('visiting /users', async function(assert) {
    await visit('/users');

    assert.equal(currentURL(), '/users');
    assert.dom('.container-lg').exists();
    assert.dom('.title-with-buttons').exists();
    assert.dom('.title-with-buttons h1').exists();
    assert.dom('.title-with-buttons h1').containsText('Users');
    assert.dom('.title-with-buttons .buttons').exists();
    assert.dom('nav.pagination').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 25 });

    await click('.pagination-next button');

    assert.equal(currentURL(), '/users?page=2');
    assert.dom('table tbody tr').exists({ count: 1 });

    await click('.pagination-previous button');

    assert.equal(currentURL(), '/users?page=1');
    assert.dom('table tbody tr').exists({ count: 25 });
  });

  test('visiting /users/new', async function(assert) {
    await visit('/users/new');

    assert.equal(currentURL(), '/users/new');
    assert.dom('.container-sm').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('New User');
    assert.dom('form').exists();
    assert.dom('#user-email-input').exists();
    assert.dom('#user-first-name-input').exists();
    assert.dom('#user-last-name-input').exists();
    assert.dom('#user-password-input').exists();
    assert.dom('#user-submit').exists();
    assert.dom('.callout.alert').doesNotExist();
  });

  test('should render errors from api when creating user', async function(assert) {
    await visit('/users/new');

    assert.equal(currentURL(), '/users/new');

    await fillIn('#user-email-input', 'error@example.com');
    await fillIn('#user-first-name-input', 'Test');
    await fillIn('#user-last-name-input', 'User');
    await fillIn('#user-password-input', 'password123');
    await click('#user-submit');

    assert.dom('.callout.alert').exists();
    assert.dom('.callout.alert p').exists({ count: 2 });
    assert.dom('.callout.alert p:nth-of-type(1)').containsText('Test user post error 1.');
    assert.dom('.callout.alert p:nth-of-type(2)').containsText('Test user post error 2.');
  });

  test('should transition to user details after creating user', async function(assert) {
    await visit('/users/new');

    assert.equal(currentURL(), '/users/new');

    await fillIn('#user-email-input', 'test@example.com');
    await fillIn('#user-first-name-input', 'Test');
    await fillIn('#user-last-name-input', 'User');
    await fillIn('#user-password-input', 'password123');
    await click('#user-submit');

    assert.equal(currentURL(), '/users/bf24a57c-b5d4-49a6-9cfd-6fd97a8b5366');
  });

  test('visiting /users/:id', async function(assert) {
    const id = uuidv4();
    await visit(`/users/${id}`);

    assert.equal(currentURL(), `/users/${id}`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('User - Test User');
    assert.dom('nav.secondary').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 5 });
    assert.dom('table tbody tr:nth-of-type(1) td:nth-of-type(1)').containsText('ID');
    assert.dom('table tbody tr:nth-of-type(2) td:nth-of-type(1)').containsText('First Name');
    assert.dom('table tbody tr:nth-of-type(3) td:nth-of-type(1)').containsText('Last Name');
    assert.dom('table tbody tr:nth-of-type(4) td:nth-of-type(1)').containsText('Email');
    assert.dom('table tbody tr:nth-of-type(5) td:nth-of-type(1)').containsText('Created At');
  });

  test('visiting /users/:id/edit', async function(assert) {
    const id = uuidv4();
    await visit(`/users/${id}/edit`);

    assert.equal(currentURL(), `/users/${id}/edit`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Edit User - Test User');
    assert.dom('nav.secondary').exists();
    assert.dom('form').exists();
    assert.dom('#user-email-input').exists();
    assert.dom('#user-first-name-input').exists();
    assert.dom('#user-last-name-input').exists();
    assert.dom('#user-submit').exists();
    assert.dom('.callout.alert').doesNotExist();
  });

  test('should render errors from api when editing user', async function(assert) {
    await visit('/users/9bead3e6-b0d5-4bce-a855-c277084da274/edit');

    assert.equal(currentURL(), '/users/9bead3e6-b0d5-4bce-a855-c277084da274/edit');

    await fillIn('#user-first-name-input', 'Updated First Name');
    await click('#user-submit');

    assert.dom('.callout.alert').exists();
    assert.dom('.callout.alert p').exists({ count: 2 });
    assert.dom('.callout.alert p:nth-of-type(1)').containsText('Test user patch error 1.');
    assert.dom('.callout.alert p:nth-of-type(2)').containsText('Test user patch error 2.');

    // Test that the user first name gets reset after navigating away from edit
    // page.
    await click('nav.secondary ul li:nth-of-type(1) a');

    assert.equal(currentURL(), '/users/9bead3e6-b0d5-4bce-a855-c277084da274');
    assert.dom('h1').containsText('User - Test User');
  });

  test('should transition to user details after editing user', async function(assert) {
    const id = uuidv4();
    await visit(`/users/${id}/edit`);

    assert.equal(currentURL(), `/users/${id}/edit`);

    await fillIn('#user-first-name-input', 'Updated First Name');
    await click('#user-submit');

    assert.equal(currentURL(), `/users/${id}`);
  });

  test('visiting /users/:id/settings', async function(assert) {
    const id = uuidv4();
    await visit(`/users/${id}/settings`);

    assert.equal(currentURL(), `/users/${id}/settings`);
    assert.dom('.container-lg').exists();
    assert.dom('.container-lg h1').exists();
    assert.dom('.container-lg h1').containsText('User - Test User');
    assert.dom('.container-lg nav.secondary').exists();
    assert.dom('.container-sm').exists();
    assert.dom('.container-sm a').exists();
    assert.dom('.container-sm a').hasClass('button');
    assert.dom('.container-sm a').containsText('Edit');

    await click('.container-sm a');

    assert.equal(currentURL(), `/users/${id}/edit`);
  });
});
