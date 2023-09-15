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

module('Acceptance | loans', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    session.authToken = 'token';
  });

  test('visiting /loans', async function(assert) {
    await visit('/loans');

    assert.strictEqual(currentURL(), '/loans');
    assert.dom('.container-lg').exists();
    assert.dom('.title-with-buttons').exists();
    assert.dom('.title-with-buttons h1').exists();
    assert.dom('.title-with-buttons h1').containsText('Loans');
    // @todo add new button test
    assert.dom('nav.pagination').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 25 });

    await click('.pagination-next button');

    assert.equal(currentURL(), '/loans?page=2');
    assert.dom('table tbody tr').exists({ count: 1 });
    await click('.pagination-previous button');

    assert.equal(currentURL(), '/loans?page=1');
    assert.dom('table tbody tr').exists({ count: 25 });
  });

  test('visiting /loans/new', async function(assert) {
    await visit('/loans/new');

    assert.equal(currentURL(), '/loans/new');
    assert.dom('.container-sm').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('New Loan');
    assert.dom('form').exists();
    assert.dom('#loan-name-input').exists();
    assert.dom('#loan-amount-input').exists();
    assert.dom('#loan-submit').exists();
    assert.dom('.callout.alert').doesNotExist();
  });

  test('should render errors from api when creating loan', async function(assert) {
    await visit('/loans/new');

    assert.equal(currentURL(), '/loans/new');

    await fillIn('#loan-name-input', 'Error Loan');
    await fillIn('#loan-amount-input', '12.34');
    await click('#loan-submit');

    assert.dom('.callout.alert').exists();
    assert.dom('.callout.alert p').exists({ count: 2 });
    assert.dom('.callout.alert p:nth-of-type(1)').containsText('Test loan post error 1.');
    assert.dom('.callout.alert p:nth-of-type(2)').containsText('Test loan post error 2.');
  });

  test('should transition to loan details after creating loan', async function(assert) {
    await visit('/loans/new');

    assert.equal(currentURL(), '/loans/new');

    await fillIn('#loan-name-input', 'New Loan');
    await fillIn('#loan-amount-input', '12.34');
    await click('#loan-submit');

    assert.equal(currentURL(), '/loans/615aeb6e-8579-4b6e-87a7-eeece395bd99');
  });

  test('visiting /loans/:id', async function(assert) {
    const id = uuidv4();
    await visit(`/loans/${id}`);

    assert.equal(currentURL(), `/loans/${id}`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Loan - Test Loan');
    assert.dom('nav.secondary').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 5 });
    assert.dom('table tbody tr:nth-of-type(1) td:nth-of-type(1)').containsText('ID');
    assert.dom('table tbody tr:nth-of-type(2) td:nth-of-type(1)').containsText('Name');
    assert.dom('table tbody tr:nth-of-type(3) td:nth-of-type(1)').containsText('Amount');
    assert.dom('table tbody tr:nth-of-type(4) td:nth-of-type(1)').containsText('Balance');
    assert.dom('table tbody tr:nth-of-type(5) td:nth-of-type(1)').containsText('Created At');
  });
});
