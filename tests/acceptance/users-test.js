import { module, test } from 'qunit';
import {
  click,
  currentURL,
  // fillIn,
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

  test('visiting /users/:id', async function(assert) {
    const id = uuidv4();
    await visit(`/users/${id}`);

    assert.equal(currentURL(), `/users/${id}`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('User - Test User');
    // assert.dom('nav.secondary').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 5 });
    assert.dom('table tbody tr:nth-of-type(1) td:nth-of-type(1)').containsText('ID');
    assert.dom('table tbody tr:nth-of-type(2) td:nth-of-type(1)').containsText('First Name');
    assert.dom('table tbody tr:nth-of-type(3) td:nth-of-type(1)').containsText('Last Name');
    assert.dom('table tbody tr:nth-of-type(4) td:nth-of-type(1)').containsText('Email');
    assert.dom('table tbody tr:nth-of-type(5) td:nth-of-type(1)').containsText('Created At');
  });
});
