import { module, test } from 'qunit';
import {
  click,
  currentURL,
  fillIn,
  visit,
} from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { Interactor as Pikaday } from 'ember-pikaday/test-support';
import { selectChoose } from 'ember-power-select/test-support';
import { setupApplicationTest } from 'ember-qunit';
import { v4 as uuidv4 } from 'uuid';

module('Acceptance | loan payments', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    session.authToken = 'token';
  });

  test('visiting /loan-payments/new', async function(assert) {
    await visit('/loan-payments/new');

    assert.strictEqual(currentURL(), '/loan-payments/new');
    assert.dom('.container-sm').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('New Loan Payment');
    assert.dom('form').exists();
    assert.dom('#loan-payment-date-input').exists();
    assert.dom('#loan-payment-principal-amount-input').exists();
    assert.dom('#loan-payment-interest-amount-input').exists();
    assert.dom('#loan-payment-submit').exists();
    assert.dom('.callout.alert').doesNotExist();
  });

  test('should render errors from api when creating loan payment', async function(assert) {
    await visit('/loan-payments/new');

    assert.equal(currentURL(), '/loan-payments/new');

    await selectChoose('#loan-payment-loan-select', '.ember-power-select-option', 2);
    await click('#loan-payment-date-input');
    await Pikaday.selectDate(new Date(2023, 1, 1));
    await fillIn('#loan-payment-principal-amount-input', '98.76');
    await fillIn('#loan-payment-interest-amount-input', '12.34');
    await click('#loan-payment-submit');

    assert.dom('.callout.alert').exists();
    assert.dom('.callout.alert p').exists({ count: 2 });
    assert.dom('.callout.alert p:nth-of-type(1)').containsText('Test loan payment post error 1.');
    assert.dom('.callout.alert p:nth-of-type(2)').containsText('Test loan payment post error 2.');
  });

  test('should transition to loan payment details after creating loan payment', async function(assert) {
    await visit('/loan-payments/new');

    assert.equal(currentURL(), '/loan-payments/new');

    await selectChoose('#loan-payment-loan-select', '.ember-power-select-option', 2);
    await click('#loan-payment-date-input');
    await Pikaday.selectDate(new Date(2023, 1, 1));
    await fillIn('#loan-payment-principal-amount-input', '56.78');
    await fillIn('#loan-payment-interest-amount-input', '12.34');
    await click('#loan-payment-submit');

    assert.equal(currentURL(), '/loan-payments/3e29618c-84ce-4e73-8e2d-8da784b44e31');
  });

  test('visiting /loan-payments/:id', async function(assert) {
    const id = uuidv4();
    await visit(`/loan-payments/${id}`);

    assert.equal(currentURL(), `/loan-payments/${id}`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('View Loan Payment');
    assert.dom('nav.secondary').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 6 });
    assert.dom('table tbody tr:nth-of-type(1) td:nth-of-type(1)').containsText('ID');
    assert.dom('table tbody tr:nth-of-type(2) td:nth-of-type(1)').containsText('Date');
    assert.dom('table tbody tr:nth-of-type(3) td:nth-of-type(1)').containsText('Principal Amount');
    assert.dom('table tbody tr:nth-of-type(4) td:nth-of-type(1)').containsText('Interest Amount');
    assert.dom('table tbody tr:nth-of-type(5) td:nth-of-type(1)').containsText('Loan');
    assert.dom('table tbody tr:nth-of-type(6) td:nth-of-type(1)').containsText('Created At');
  });
});
