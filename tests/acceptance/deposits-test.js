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

module('Acceptance | deposits', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    session.authToken = 'token';
  });

  test('visiting /deposits/new', async function(assert) {
    await visit('/deposits/new');

    assert.equal(currentURL(), '/deposits/new');
    assert.dom('.container-sm').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('New Deposit');
    assert.dom('form').exists();
    assert.dom('#deposit-date-input').exists();
    assert.dom('#deposit-amount-input').exists();
    assert.dom('#deposit-submit').exists();
    assert.dom('.callout.alert').doesNotExist();
  });

  test('should render errors from api when creating deposit', async function(assert) {
    await visit('/deposits/new');

    assert.equal(currentURL(), '/deposits/new');

    await selectChoose('#deposit-fund-select', '.ember-power-select-option', 2);
    await click('#deposit-date-input');
    await Pikaday.selectDate(new Date(2021, 1, 1));
    await fillIn('#deposit-amount-input', '98.76');
    await click('#deposit-submit');

    assert.dom('.callout.alert').exists();
    assert.dom('.callout.alert p').exists({ count: 2 });
    assert.dom('.callout.alert p:nth-of-type(1)').containsText('Test deposit post error 1.');
    assert.dom('.callout.alert p:nth-of-type(2)').containsText('Test deposit post error 2.');
  });

  test('should transition to deposit details after creating deposit', async function(assert) {
    await visit('/deposits/new');

    assert.equal(currentURL(), '/deposits/new');

    await selectChoose('#deposit-fund-select', '.ember-power-select-option', 2);
    await click('#deposit-date-input');
    await Pikaday.selectDate(new Date(2021, 1, 1));
    await fillIn('#deposit-amount-input', '23.45');
    await click('#deposit-submit');

    assert.equal(currentURL(), '/deposits/ecb685d8-9e96-4d8d-acfa-f73ac732d22c');
  });

  test('visiting /deposits/:id', async function(assert) {
    const id = uuidv4();
    await visit(`/deposits/${id}`);

    assert.equal(currentURL(), `/deposits/${id}`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('View Deposit');
    assert.dom('nav.secondary').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 5 });
    assert.dom('table tbody tr:nth-of-type(1) td:nth-of-type(1)').containsText('ID');
    assert.dom('table tbody tr:nth-of-type(2) td:nth-of-type(1)').containsText('Date');
    assert.dom('table tbody tr:nth-of-type(3) td:nth-of-type(1)').containsText('Amount');
    assert.dom('table tbody tr:nth-of-type(4) td:nth-of-type(1)').containsText('Fund');
    assert.dom('table tbody tr:nth-of-type(5) td:nth-of-type(1)').containsText('Created At');
  });

  test('visiting /deposits/:id/edit', async function(assert) {
    const id = uuidv4();
    await visit(`/deposits/${id}/edit`);

    assert.equal(currentURL(), `/deposits/${id}/edit`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Edit Deposit');
    assert.dom('nav.secondary').exists();
    assert.dom('form').exists();
    assert.dom('#deposit-date-input').exists();
    assert.dom('#deposit-amount-input').exists();
    assert.dom('#deposit-submit').exists();
    assert.dom('.callout.alert').doesNotExist();
  });

  test('should render errors from api when editing deposit', async function(assert) {
    await visit('/deposits/f75cfdf1-99b5-4bf0-afcc-630d14133ffa/edit');

    assert.equal(currentURL(), '/deposits/f75cfdf1-99b5-4bf0-afcc-630d14133ffa/edit');

    await fillIn('#deposit-amount-input', '45.67');
    await click('#deposit-submit');

    assert.dom('.callout.alert').exists();
    assert.dom('.callout.alert p').exists({ count: 2 });
    assert.dom('.callout.alert p:nth-of-type(1)').containsText('Test deposit patch error 1.');
    assert.dom('.callout.alert p:nth-of-type(2)').containsText('Test deposit patch error 2.');

    // Test that the deposit gets reset after navigating away from edit page.
    await click('nav.secondary ul li:nth-of-type(1) a');

    assert.equal(currentURL(), '/deposits/f75cfdf1-99b5-4bf0-afcc-630d14133ffa');
    assert.dom('table tr:nth-of-type(3) td:nth-of-type(2)').containsText('$10.00');
  });

  test('should transition to deposit details after editing deposit', async function(assert) {
    const id = uuidv4();
    await visit(`/deposits/${id}/edit`);

    assert.equal(currentURL(), `/deposits/${id}/edit`);

    await fillIn('#deposit-amount-input', '45.67');
    await click('#deposit-submit');

    assert.equal(currentURL(), `/deposits/${id}`);
  });

  test('visiting /deposits/:id/settings', async function(assert) {
    const id = uuidv4();
    await visit(`/deposits/${id}/settings`);

    assert.equal(currentURL(), `/deposits/${id}/settings`);
    assert.dom('.container-lg').exists();
    assert.dom('.container-lg h1').exists();
    assert.dom('.container-lg h1').containsText('View Deposit');
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
    assert.dom('.overlay .modal > p').containsText('Are you sure you want to delete this deposit?');
    assert.dom('.overlay .modal button.button.alert').exists();
    assert.dom('.overlay .modal button.button.alert').containsText('Delete');
    assert.dom('.overlay .modal button.button.cancel').exists();
    assert.dom('.overlay .modal button.button.cancel').containsText('Cancel');

    await click('.overlay .modal button.button.cancel');

    assert.dom('.overlay').doesNotExist();

    await click('.container-sm a');

    assert.equal(currentURL(), `/deposits/${id}/edit`);
  });

  test('renders callout when deleting deposit returns errors', async function(assert) {
    await visit('/deposits/90753de1-66c8-472c-b5e7-fb5fc63fe8f5/settings');

    assert.equal(currentURL(), '/deposits/90753de1-66c8-472c-b5e7-fb5fc63fe8f5/settings');

    assert.dom('.container-sm button.button.alert').exists();

    await click('.container-sm button.button.alert');

    assert.dom('.overlay .modal button.button.alert').exists();

    await click('.overlay .modal button.button.alert');

    assert.equal(currentURL(), '/deposits/90753de1-66c8-472c-b5e7-fb5fc63fe8f5/settings');

    assert.dom('.overlay .modal .callout').exists();
    assert.dom('.overlay .modal .callout').hasClass('alert');
    assert.dom('.overlay .modal .callout p').exists({ count: 2 });
    assert.dom('.overlay .modal .callout p:nth-of-type(1)').containsText('Test deposit delete error 1.');
    assert.dom('.overlay .modal .callout p:nth-of-type(2)').containsText('Test deposit delete error 2.');

    await click('.overlay .modal button.button.cancel');

    assert.dom('.overlay').doesNotExist();

    // Verify the error callout is cleared when opening the modal again.
    await click('.container-sm button.button.alert');

    assert.dom('.overlay').exists();
    assert.dom('.overlay .modal .callout').doesNotExist();
  });

  test('transitions to fund deposits page on successful deposit deletion', async function(assert) {
    const id = uuidv4();
    await visit(`/deposits/${id}/settings`);

    assert.equal(currentURL(), `/deposits/${id}/settings`);
    assert.dom('.container-sm button.button.alert').exists();

    await click('.container-sm button.button.alert');

    assert.dom('.overlay .modal button.button.alert').exists();

    await click('.overlay .modal button.button.alert');

    assert.equal(currentURL(), '/funds/fd16392e-8a8e-4f04-8feb-0286513b2608/deposits');
  });
});
