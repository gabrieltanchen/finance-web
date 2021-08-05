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

module('Acceptance | funds', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    session.authToken = 'token';
  });

  test('visiting /funds', async function(assert) {
    await visit('/funds');

    assert.equal(currentURL(), '/funds');
    assert.dom('.container-lg').exists();
    assert.dom('.title-with-buttons').exists();
    assert.dom('.title-with-buttons h1').exists();
    assert.dom('.title-with-buttons h1').containsText('Funds');
    assert.dom('.title-with-buttons .buttons').exists();
    assert.dom('.title-with-buttons .buttons a').exists({ count: 1 });
    assert.dom('.title-with-buttons .buttons a').containsText('New');
    assert.dom('nav.pagination').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 25 });

    await click('.pagination-next button');

    assert.equal(currentURL(), '/funds?page=2');
    assert.dom('table tbody tr').exists({ count: 1 });

    await click('.pagination-previous button');

    assert.equal(currentURL(), '/funds?page=1');
    assert.dom('table tbody tr').exists({ count: 25 });
  });

  test('visiting /funds/new', async function(assert) {
    await visit('/funds/new');

    assert.equal(currentURL(), '/funds/new');
    assert.dom('.container-sm').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('New Fund');
    assert.dom('form').exists();
    assert.dom('#fund-name-input').exists();
    assert.dom('#fund-submit').exists();
    assert.dom('.callout.alert').doesNotExist();
  });

  test('should render errors from api when creating fund', async function(assert) {
    await visit('/funds/new');

    assert.equal(currentURL(), '/funds/new');

    await fillIn('#fund-name-input', 'Error Fund');
    await click('#fund-submit');

    assert.dom('.callout.alert').exists();
    assert.dom('.callout.alert p').exists({ count: 2 });
    assert.dom('.callout.alert p:nth-of-type(1)').containsText('Test fund post error 1.');
    assert.dom('.callout.alert p:nth-of-type(2)').containsText('Test fund post error 2.');
  });

  test('should transition to fund details after creating fund', async function(assert) {
    await visit('/funds/new');

    assert.equal(currentURL(), '/funds/new');

    await fillIn('#fund-name-input', 'New Fund');
    await click('#fund-submit');

    assert.equal(currentURL(), '/funds/86f6b9b3-b244-464c-a7e9-273b08d76230');
  });

  test('visiting /funds/:id', async function(assert) {
    const id = uuidv4();
    await visit(`/funds/${id}`);

    assert.equal(currentURL(), `/funds/${id}`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Fund - Test Fund');
    assert.dom('nav.secondary').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 3 });
    assert.dom('table tbody tr:nth-of-type(1) td:nth-of-type(1)').containsText('ID');
    assert.dom('table tbody tr:nth-of-type(2) td:nth-of-type(1)').containsText('Name');
    assert.dom('table tbody tr:nth-of-type(3) td:nth-of-type(1)').containsText('Created At');
  });

  test('visiting /funds/:id/edit', async function(assert) {
    const id = uuidv4();
    await visit(`/funds/${id}/edit`);

    assert.equal(currentURL(), `/funds/${id}/edit`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Edit Fund - Test Fund');
    assert.dom('nav.secondary').exists();
    assert.dom('form').exists();
    assert.dom('#fund-name-input').exists();
    assert.dom('#fund-submit').exists();
    assert.dom('.callout.alert').doesNotExist();
  });

  test('should render errors from api when editing fund', async function(assert) {
    await visit('/funds/2883963b-63bc-493d-b90c-fbe18aca9be2/edit');

    assert.equal(currentURL(), '/funds/2883963b-63bc-493d-b90c-fbe18aca9be2/edit');

    await fillIn('#fund-name-input', 'Updated Fund');
    await click('#fund-submit');

    assert.dom('.callout.alert').exists();
    assert.dom('.callout.alert p').exists({ count: 2 });
    assert.dom('.callout.alert p:nth-of-type(1)').containsText('Test fund patch error 1.');
    assert.dom('.callout.alert p:nth-of-type(2)').containsText('Test fund patch error 2.');

    // Test that the fund name gets reset after navigating away from edit page.
    await click('nav.secondary ul li:nth-of-type(1) a');

    assert.equal(currentURL(), '/funds/2883963b-63bc-493d-b90c-fbe18aca9be2');
    assert.dom('h1').containsText('Fund - Test Fund');
  });
});
