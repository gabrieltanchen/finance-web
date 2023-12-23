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

  test('should transition to the loan\'s loan payments page after creating loan payment', async function(assert) {
    const id = uuidv4();
    await visit(`/loan-payments/new?loanId=${id}`);

    assert.equal(currentURL(), `/loan-payments/new?loanId=${id}`);

    await click('#loan-payment-date-input');
    await Pikaday.selectDate(new Date(2023, 1, 1));
    await fillIn('#loan-payment-principal-amount-input', '56.78');
    await fillIn('#loan-payment-interest-amount-input', '12.34');
    await click('#loan-payment-submit');

    assert.equal(currentURL(), `/loans/${id}/loan-payments`);
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
    assert.dom('table tbody tr').exists({ count: 7 });
    assert.dom('table tbody tr:nth-of-type(1) td:nth-of-type(1)').containsText('ID');
    assert.dom('table tbody tr:nth-of-type(2) td:nth-of-type(1)').containsText('Date');
    assert.dom('table tbody tr:nth-of-type(3) td:nth-of-type(1)').containsText('Principal Amount');
    assert.dom('table tbody tr:nth-of-type(4) td:nth-of-type(1)').containsText('Interest Amount');
    assert.dom('table tbody tr:nth-of-type(5) td:nth-of-type(1)').containsText('Total');
    assert.dom('table tbody tr:nth-of-type(6) td:nth-of-type(1)').containsText('Loan');
    assert.dom('table tbody tr:nth-of-type(7) td:nth-of-type(1)').containsText('Created At');
  });

  test('visiting /loan-payments/:id/edit', async function(assert) {
    const id = uuidv4();
    await visit(`/loan-payments/${id}/edit`);

    assert.equal(currentURL(), `/loan-payments/${id}/edit`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Edit Loan Payment');
    assert.dom('nav.secondary').exists();
    assert.dom('form').exists();
    assert.dom('#loan-payment-date-input').exists();
    assert.dom('#loan-payment-principal-amount-input').exists();
    assert.dom('#loan-payment-interest-amount-input').exists();
    assert.dom('#loan-payment-submit').exists();
    assert.dom('.callout.alert').doesNotExist();
  });

  test('should render errors from api when editing loan payment', async function(assert) {
    await visit('/loan-payments/64620167-ddc4-4257-a914-d670e0a9ccd0/edit');

    assert.equal(currentURL(), '/loan-payments/64620167-ddc4-4257-a914-d670e0a9ccd0/edit');

    await fillIn('#loan-payment-principal-amount-input', '45.67');
    await click('#loan-payment-submit');

    assert.dom('.callout.alert').exists();
    assert.dom('.callout.alert p').exists({ count: 2 });
    assert.dom('.callout.alert p:nth-of-type(1)').containsText('Test loan payment patch error 1.');
    assert.dom('.callout.alert p:nth-of-type(2)').containsText('Test loan payment patch error 2.');

    // Test that the loan payment gets reset after navigating away from the edit page.
    await click('nav.secondary ul li:nth-of-type(1) a');

    assert.equal(currentURL(), '/loan-payments/64620167-ddc4-4257-a914-d670e0a9ccd0');
    assert.dom('table tr:nth-of-type(3) td:nth-of-type(2)').containsText('$10.00');
  });

  test('should transition to loan payment details after editing loan payment', async function(assert) {
    const id = uuidv4();
    await visit(`/loan-payments/${id}/edit`);

    assert.equal(currentURL(), `/loan-payments/${id}/edit`);

    await fillIn('#loan-payment-principal-amount-input', '45.67');
    await click('#loan-payment-submit');

    assert.equal(currentURL(), `/loan-payments/${id}`);
  });

  test('visiting /loan-payments/:id/settings', async function(assert) {
    const id = uuidv4();
    await visit(`/loan-payments/${id}/settings`);

    assert.equal(currentURL(), `/loan-payments/${id}/settings`);
    assert.dom('.container-lg').exists();
    assert.dom('.container-lg h1').exists();
    assert.dom('.container-lg h1').containsText('View Loan Payment');
    assert.dom('.container-lg nav.secondary').exists();
    assert.dom('.container-sm').exists();
    assert.dom('.container-sm a').exists();
    assert.dom('.container-sm a').hasClass('button');
    assert.dom('.container-sm a').containsText('Edit');
    assert.dom('.container-sm button').exists();
    assert.dom('.container-sm button').hasClass('button');
    assert.dom('.container-sm button').hasClass('alert');
    assert.dom('.container-sm button').containsText('Delete');
    assert.dom('.overlay').doesNotExist();

    await click('.container-sm button.button.alert');

    assert.dom('.overlay').exists();
    assert.dom('.overlay .modal').exists();
    assert.dom('.overlay .modal .callout').doesNotExist();
    assert.dom('.overlay .modal > p').exists();
    assert.dom('.overlay .modal > p').containsText('Are you sure you want to delete this loan payment?');
    assert.dom('.overlay .modal button.button.alert').exists();
    assert.dom('.overlay .modal button.button.alert').containsText('Delete');
    assert.dom('.overlay .modal button.button.cancel').exists();
    assert.dom('.overlay .modal button.button.cancel').containsText('Cancel');

    await click('.overlay .modal button.button.cancel');

    assert.dom('.overlay').doesNotExist();

    await click('.container-sm a');

    assert.equal(currentURL(), `/loan-payments/${id}/edit`);
  });

  test('renders callout when deleting loan payment returns errors', async function(assert) {
    await visit('/loan-payments/d637c4e5-2980-4338-b95e-9f2681bac666/settings');

    assert.equal(currentURL(), '/loan-payments/d637c4e5-2980-4338-b95e-9f2681bac666/settings');

    assert.dom('.container-sm button.button.alert').exists();

    await click('.container-sm button.button.alert');

    assert.dom('.overlay .modal button.button.alert').exists();

    await click('.overlay .modal button.button.alert');

    assert.equal(currentURL(), '/loan-payments/d637c4e5-2980-4338-b95e-9f2681bac666/settings');

    assert.dom('.overlay .modal .callout').exists();
    assert.dom('.overlay .modal .callout').hasClass('alert');
    assert.dom('.overlay .modal .callout p').exists({ count: 2 });
    assert.dom('.overlay .modal .callout p:nth-of-type(1)').containsText('Test loan payment delete error 1.');
    assert.dom('.overlay .modal .callout p:nth-of-type(2)').containsText('Test loan payment delete error 2.');

    await click('.overlay .modal button.button.cancel');

    assert.dom('.overlay').doesNotExist();

    // Verify the error callout is cleared when opening the modal again.
    await click('.container-sm button.button.alert');

    assert.dom('.overlay').exists();
    assert.dom('.overlay .modal .callout').doesNotExist();
  });

  test('transitions to loan - loan payments page on successful loan payment deletion', async function(assert) {
    const id = uuidv4();
    await visit(`/loan-payments/${id}/settings`);

    assert.equal(currentURL(), `/loan-payments/${id}/settings`);
    assert.dom('.container-sm button.button.alert').exists();

    await click('.container-sm button.button.alert');

    assert.dom('.overlay .modal button.button.alert').exists();

    await click('.overlay .modal button.button.alert');

    assert.equal(currentURL(), '/loans/f2bd7c34-d5c8-42d1-8203-2ae6f451f92a/loan-payments');
  });
});
