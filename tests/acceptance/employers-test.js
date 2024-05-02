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
    assert.dom('.pagination-header').exists();
    assert.dom('.pagination-header .buttons').exists();
    assert.dom('.pagination-header .buttons a').exists({ count: 1 });
    assert.dom('.pagination-header .buttons a').containsText('New');
    assert.dom('.pagination-header nav.pagination').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 25 });

    await click('.pagination-next button');

    assert.equal(currentURL(), '/employers?page=2');
    assert.dom('table tbody tr').exists({ count: 1 });

    await click('.pagination-previous button');

    assert.equal(currentURL(), '/employers?page=1');
    assert.dom('table tbody tr').exists({ count: 25 });

    await click('.pagination-header .buttons a');

    assert.equal(currentURL(), '/employers/new');
  });

  test('visiting /employers/new', async function(assert) {
    await visit('/employers/new');

    assert.equal(currentURL(), '/employers/new');
    assert.dom('.container-sm').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('New Employer');
    assert.dom('form').exists();
    assert.dom('#employer-name-input').exists();
    assert.dom('#employer-submit').exists();
    assert.dom('.callout.alert').doesNotExist();
  });

  test('should render errors from api when creating employer', async function(assert) {
    await visit('/employers/new');

    assert.equal(currentURL(), '/employers/new');

    await fillIn('#employer-name-input', 'Error Employer');
    await click('#employer-submit');

    assert.dom('.callout.alert').exists();
    assert.dom('.callout.alert p').exists({ count: 2 });
    assert.dom('.callout.alert p:nth-of-type(1)').containsText('Test employer post error 1.');
    assert.dom('.callout.alert p:nth-of-type(2)').containsText('Test employer post error 2.');
  });

  test('should transition to employer details after creating employer', async function(assert) {
    await visit('/employers/new');

    assert.equal(currentURL(), '/employers/new');

    await fillIn('#employer-name-input', 'New Employer');
    await click('#employer-submit');

    assert.equal(currentURL(), '/employers/1a0162e5-2316-4a86-9de0-57817ab5a62c');
  });

  test('visiting /emplyers/:id', async function(assert) {
    const id = uuidv4();
    await visit(`/employers/${id}`);

    assert.equal(currentURL(), `/employers/${id}`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Employer - Test Employer');
    assert.dom('nav.secondary').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 3 });
    assert.dom('table tbody tr:nth-of-type(1) td:nth-of-type(1)').containsText('ID');
    assert.dom('table tbody tr:nth-of-type(2) td:nth-of-type(1)').containsText('Name');
    assert.dom('table tbody tr:nth-of-type(3) td:nth-of-type(1)').containsText('Created At');
  });

  test('visiting /employers/:id/edit', async function(assert) {
    const id = uuidv4();
    await visit(`/employers/${id}/edit`);

    assert.equal(currentURL(), `/employers/${id}/edit`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Edit Employer - Test Employer');
    assert.dom('nav.secondary').exists();
    assert.dom('form').exists();
    assert.dom('#employer-name-input').exists();
    assert.dom('#employer-submit').exists();
    assert.dom('.callout.alert').doesNotExist();
  });

  test('should render errors from api when editing employer', async function(assert) {
    await visit('/employers/d865d244-222b-4d30-b92e-8973cc58fd51/edit');

    assert.equal(currentURL(), '/employers/d865d244-222b-4d30-b92e-8973cc58fd51/edit');

    await fillIn('#employer-name-input', 'Updated Employer');
    await click('#employer-submit');

    assert.dom('.callout.alert').exists();
    assert.dom('.callout.alert p').exists({ count: 2 });
    assert.dom('.callout.alert p:nth-of-type(1)').containsText('Test employer patch error 1.');
    assert.dom('.callout.alert p:nth-of-type(2)').containsText('Test employer patch error 2.');

    // Test that the employer name gets reset after navigating away from edit page.
    await click('nav.secondary ul li:nth-of-type(1) a');

    assert.equal(currentURL(), '/employers/d865d244-222b-4d30-b92e-8973cc58fd51');
    assert.dom('h1').containsText('Employer - Test Employer');
  });

  test('should transition to employer details after editing employer', async function(assert) {
    const id = uuidv4();
    await visit(`/employers/${id}/edit`);

    assert.equal(currentURL(), `/employers/${id}/edit`);

    await fillIn('#employer-name-input', 'Updated Employer');
    await click('#employer-submit');

    assert.equal(currentURL(), `/employers/${id}`);
  });
});
