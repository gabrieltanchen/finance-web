import { module, test } from 'qunit';
import {
  click,
  currentURL,
  fillIn,
  visit,
} from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { selectChoose } from 'ember-power-select/test-support';
import { setupApplicationTest } from 'ember-qunit';
import { v4 as uuidv4 } from 'uuid';

module('Acceptance | budgets', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    session.authToken = 'token';
  });

  test('visiting /budgets/new', async function(assert) {
    const id = uuidv4();
    await visit(`/budgets/new?subcategoryId=${id}`);

    assert.equal(currentURL(), `/budgets/new?subcategoryId=${id}`);
    assert.dom('.container-sm').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('New Budget');
    assert.dom('form').exists();
    assert.dom('#budget-amount-input').exists();
    assert.dom('#budget-submit').exists();
    assert.dom('.callout.alert').doesNotExist();
  });

  test('should render errors from api when creating budget', async function(assert) {
    const id = uuidv4();
    await visit(`/budgets/new?subcategoryId=${id}`);

    assert.equal(currentURL(), `/budgets/new?subcategoryId=${id}`);

    await selectChoose('#budget-year-select', '.ember-power-select-option', 3);
    await selectChoose('#budget-month-select', '.ember-power-select-option', 4);
    await fillIn('#budget-amount-input', '4.00');
    await click('#budget-submit');

    assert.dom('.callout.alert').exists();
    assert.dom('.callout.alert p').exists({ count: 2 });
    assert.dom('.callout.alert p:nth-of-type(1)').containsText('Test budget post error 1.');
    assert.dom('.callout.alert p:nth-of-type(2)').containsText('Test budget post error 2.');
  });

  test('should transition to subcategory budgets page after creating budget', async function(assert) {
    const id = uuidv4();
    await visit(`/budgets/new?subcategoryId=${id}`);

    assert.equal(currentURL(), `/budgets/new?subcategoryId=${id}`);

    await selectChoose('#budget-year-select', '.ember-power-select-option', 3);
    await selectChoose('#budget-month-select', '.ember-power-select-option', 4);
    await fillIn('#budget-amount-input', '123.45');
    await click('#budget-submit');

    assert.equal(currentURL(), `/subcategories/${id}/budgets`);
  });

  test('visiting /budgets/:id', async function(assert) {
    const id = uuidv4();
    await visit(`/budgets/${id}`);

    assert.equal(currentURL(), `/budgets/${id}`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('View Budget');
    assert.dom('nav.secondary').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 7 });
    assert.dom('table tbody tr:nth-of-type(1) td:nth-of-type(1)').containsText('ID');
    assert.dom('table tbody tr:nth-of-type(2) td:nth-of-type(1)').containsText('Subcategory');
    assert.dom('table tbody tr:nth-of-type(3) td:nth-of-type(1)').containsText('Year');
    assert.dom('table tbody tr:nth-of-type(4) td:nth-of-type(1)').containsText('Month');
    assert.dom('table tbody tr:nth-of-type(5) td:nth-of-type(1)').containsText('Amount');
    assert.dom('table tbody tr:nth-of-type(6) td:nth-of-type(1)').containsText('Notes');
    assert.dom('table tbody tr:nth-of-type(7) td:nth-of-type(1)').containsText('Created At');
  });

  test('visiting /budgets/:id/edit', async function(assert) {
    const id = uuidv4();
    await visit(`/budgets/${id}/edit`);

    assert.equal(currentURL(), `/budgets/${id}/edit`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Edit Budget');
    assert.dom('nav.secondary').exists();
    assert.dom('form').exists();
    assert.dom('#budget-amount-input').exists();
    assert.dom('#budget-submit').exists();
    assert.dom('.callout.alert').doesNotExist();
  });

  test('should render errors from api when editing budget', async function(assert) {
    await visit('/budgets/a6da3f05-a6af-485d-808f-679db25932db/edit');

    assert.equal(currentURL(), '/budgets/a6da3f05-a6af-485d-808f-679db25932db/edit');

    await fillIn('#budget-amount-input', '45.67');
    await click('#budget-submit');

    assert.dom('.callout.alert').exists();
    assert.dom('.callout.alert p').exists({ count: 2 });
    assert.dom('.callout.alert p:nth-of-type(1)').containsText('Test budget patch error 1.');
    assert.dom('.callout.alert p:nth-of-type(2)').containsText('Test budget patch error 2.');

    // Test that the budget gets reset after navigating away from edit page.
    await click('nav.secondary ul li:nth-of-type(1) a');

    assert.equal(currentURL(), '/budgets/a6da3f05-a6af-485d-808f-679db25932db');
    assert.dom('table tr:nth-of-type(5) td:nth-of-type(2)').containsText('$10.00');
  });

  test('should transition to budget details after editing budget', async function(assert) {
    const id = uuidv4();
    await visit(`/budgets/${id}/edit`);

    assert.equal(currentURL(), `/budgets/${id}/edit`);

    await fillIn('#budget-amount-input', '45.67');
    await click('#budget-submit');

    assert.equal(currentURL(), `/budgets/${id}`);
  });

  test('visiting /budgets/:id/settings', async function(assert) {
    const id = uuidv4();
    await visit(`/budgets/${id}/settings`);

    assert.equal(currentURL(), `/budgets/${id}/settings`);

    assert.dom('.container-lg').exists();
    assert.dom('.container-lg h1').exists();
    assert.dom('.container-lg h1').containsText('View Budget');
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
    assert.dom('.overlay .modal > p').containsText('Are you sure you want to delete this budget?');
    assert.dom('.overlay .modal button.button.alert').exists();
    assert.dom('.overlay .modal button.button.alert').containsText('Delete');
    assert.dom('.overlay .modal button.button.cancel').exists();
    assert.dom('.overlay .modal button.button.cancel').containsText('Cancel');

    await click('.overlay .modal button.button.cancel');

    assert.dom('.overlay').doesNotExist();

    await click('.container-sm a');

    assert.equal(currentURL(), `/budgets/${id}/edit`);
  });

  test('renders callout when deleting budget returns errors', async function(assert) {
    await visit('/budgets/65b3bef7-6e22-47bf-865a-3939ab53d6b1/settings');

    assert.equal(currentURL(), '/budgets/65b3bef7-6e22-47bf-865a-3939ab53d6b1/settings');

    assert.dom('.container-sm button.button.alert').exists();

    await click('.container-sm button.button.alert');

    assert.dom('.overlay .modal button.button.alert').exists();

    await click('.overlay .modal button.button.alert');

    assert.equal(currentURL(), '/budgets/65b3bef7-6e22-47bf-865a-3939ab53d6b1/settings');

    assert.dom('.overlay .modal .callout').exists();
    assert.dom('.overlay .modal .callout').hasClass('alert');
    assert.dom('.overlay .modal .callout p').exists({ count: 2 });
    assert.dom('.overlay .modal .callout p:nth-of-type(1)').containsText('Test budget delete error 1.');
    assert.dom('.overlay .modal .callout p:nth-of-type(2)').containsText('Test budget delete error 2.');

    await click('.overlay .modal button.button.cancel');

    assert.dom('.overlay').doesNotExist();

    // Verify the error callout is cleared when opening the modal again.
    await click('.container-sm button.button.alert');

    assert.dom('.overlay').exists();
    assert.dom('.overlay .modal .callout').doesNotExist();
  });

  test('transitions to subcategory budgets page on successful budget deletion', async function(assert) {
    const id = uuidv4();
    await visit(`/budgets/${id}/settings`);

    assert.equal(currentURL(), `/budgets/${id}/settings`);
    assert.dom('.container-sm button.button.alert').exists();

    await click('.container-sm button.button.alert');

    assert.dom('.overlay .modal button.button.alert').exists();

    await click('.overlay .modal button.button.alert');

    assert.equal(currentURL(), '/subcategories/d133a7d5-58c6-458d-8b4c-e9e7dee28334/budgets');
  });
});
