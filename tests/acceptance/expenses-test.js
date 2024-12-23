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

module('Acceptance | expenses', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    session.authToken = 'token';
  });

  test('visiting /expenses/new with subcategoryId', async function(assert) {
    const id = uuidv4();
    await visit(`/expenses/new?subcategoryId=${id}`);

    assert.equal(currentURL(), `/expenses/new?subcategoryId=${id}`);
    assert.dom('.container-sm').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('New Expense');
    assert.dom('form').exists();
    assert.dom('#expense-date-input').exists();
    assert.dom('#expense-description-input').exists();
    assert.dom('#expense-amount-input').exists();
    assert.dom('#expense-reimbursed-input').exists();
    assert.dom('#expense-submit').exists();
    assert.dom('.callout.alert').doesNotExist();
  });

  test('visiting /expenses/new with fundId', async function(assert) {
    const id = uuidv4();
    await visit(`/expenses/new?fundId=${id}`);
    assert.equal(currentURL(), `/expenses/new?fundId=${id}`);
  });

  test('visiting /expenses/new with householdMemberId', async function(assert) {
    const id = uuidv4();
    await visit(`/expenses/new?householdMemberId=${id}`);
    assert.equal(currentURL(), `/expenses/new?householdMemberId=${id}`);
  });

  test('visiting /expenses/new with vendorId', async function(assert) {
    const id = uuidv4();
    await visit(`/expenses/new?vendorId=${id}`);
    assert.equal(currentURL(), `/expenses/new?vendorId=${id}`);
  });

  test('should render errors from api when creating expense', async function(assert) {
    const id = uuidv4();
    await visit(`/expenses/new?subcategoryId=${id}`);

    assert.equal(currentURL(), `/expenses/new?subcategoryId=${id}`);

    await selectChoose('#expense-vendor-select', '.ember-power-select-option', 2);
    await selectChoose('#expense-household-member-select', '.ember-power-select-option', 2);
    await fillIn('#expense-date-input', '2020-01-01');
    await fillIn('#expense-description-input', 'Error Expense');
    await fillIn('#expense-amount-input', '23.45');
    await fillIn('#expense-reimbursed-input', '12.34');
    await click('#expense-submit');

    assert.dom('.callout.alert').exists();
    assert.dom('.callout.alert p').exists({ count: 2 });
    assert.dom('.callout.alert p:nth-of-type(1)').containsText('Test expense post error 1.');
    assert.dom('.callout.alert p:nth-of-type(2)').containsText('Test expense post error 2.');
  });

  test('should transition to subcategory expenses page after creating expense', async function(assert) {
    const id = uuidv4();
    await visit(`/expenses/new?subcategoryId=${id}`);

    assert.equal(currentURL(), `/expenses/new?subcategoryId=${id}`);

    await selectChoose('#expense-vendor-select', '.ember-power-select-option', 2);
    await selectChoose('#expense-household-member-select', '.ember-power-select-option', 2);
    await fillIn('#expense-date-input', '2020-01-01');
    await fillIn('#expense-description-input', 'New Expense');
    await fillIn('#expense-amount-input', '23.45');
    await fillIn('#expense-reimbursed-input', '12.34');
    await click('#expense-submit');

    assert.equal(currentURL(), `/subcategories/${id}/expenses`);
  });

  test('visiting /expenses/:id', async function(assert) {
    const id = uuidv4();
    await visit(`/expenses/${id}`);

    assert.equal(currentURL(), `/expenses/${id}`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('View Expense');
    assert.dom('nav.secondary').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 10 });
    assert.dom('table tbody tr:nth-of-type(1) td:nth-of-type(1)').containsText('ID');
    assert.dom('table tbody tr:nth-of-type(2) td:nth-of-type(1)').containsText('Date');
    assert.dom('table tbody tr:nth-of-type(3) td:nth-of-type(1)').containsText('Description');
    assert.dom('table tbody tr:nth-of-type(4) td:nth-of-type(1)').containsText('Amount');
    assert.dom('table tbody tr:nth-of-type(5) td:nth-of-type(1)').containsText('Reimbursed Amount');
    assert.dom('table tbody tr:nth-of-type(6) td:nth-of-type(1)').containsText('Subcategory');
    assert.dom('table tbody tr:nth-of-type(7) td:nth-of-type(1)').containsText('Household Member');
    assert.dom('table tbody tr:nth-of-type(8) td:nth-of-type(1)').containsText('Vendor');
    assert.dom('table tbody tr:nth-of-type(9) td:nth-of-type(1)').containsText('Fund');
    assert.dom('table tbody tr:nth-of-type(10) td:nth-of-type(1)').containsText('Created At');
  });

  test('visiting /expenses/:id/attachments', async function(assert) {
    const id = uuidv4();
    await visit(`/expenses/${id}/attachments`);

    assert.equal(currentURL(), `/expenses/${id}/attachments`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Expense Attachments');
    assert.dom('nav.secondary').exists();
    assert.dom('.pagination-header').exists();
    assert.dom('.pagination-header .buttons').exists();
    assert.dom('.pagination-header .buttons a').exists({ count: 1 });
    assert.dom('.pagination-header .buttons a').containsText('New');
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 25 });

    await click('.pagination-next button');

    assert.equal(currentURL(), `/expenses/${id}/attachments?page=2`);
    assert.dom('table tbody tr').exists({ count: 1 });

    await click('.pagination-previous button');

    assert.equal(currentURL(), `/expenses/${id}/attachments?page=1`);
    assert.dom('table tbody tr').exists({ count: 25 });

    await click('.pagination-header .buttons a');

    assert.equal(currentURL(), `/expenses/${id}/attachments/new`);
  });

  test('visiting /expenses/:id/attachments/new', async function(assert) {
    const id = uuidv4();
    await visit(`/expenses/${id}/attachments/new`);

    assert.dom('.container-sm').exists();
    assert.dom('h2').exists();
    assert.dom('h2').containsText('New Attachment');
    assert.dom('form').exists();
    assert.dom('#attachment-name-input').exists();
    assert.dom('#attachment-file-input').exists();
    assert.dom('#attachment-submit').exists();
    assert.dom('.callout.alert').doesNotExist();
  });

  test('visiting /expenses/:id/attachments/:id', async function(assert) {
    const expenseId = uuidv4();
    const attachmentId = uuidv4();
    await visit(`/expenses/${expenseId}/attachments/${attachmentId}`);

    assert.equal(currentURL(), `/expenses/${expenseId}/attachments/${attachmentId}`);
    assert.dom('.container-lg.attachment-show').exists();
    assert.dom('.attachment-show h2').exists();
    assert.dom('.attachment-show h2').containsText('View Attachment');
    assert.dom('.attachment-show table').exists();
    assert.dom('.attachment-show table tbody tr').exists({ count: 3 });
    assert.dom('.attachment-show table tbody tr:nth-of-type(1) td:nth-of-type(1)').containsText('ID');
    assert.dom('.attachment-show table tbody tr:nth-of-type(2) td:nth-of-type(1)').containsText('Name');
    assert.dom('.attachment-show table tbody tr:nth-of-type(3) td:nth-of-type(1)').containsText('Created At');
    assert.dom('.container-sm.attachment-delete').exists();
    assert.dom('.attachment-delete button').exists();
    assert.dom('.attachment-delete button').hasClass('button');
    assert.dom('.attachment-delete button').hasClass('alert');
    assert.dom('.attachment-delete button').containsText('Delete');
    assert.dom('.overlay').doesNotExist();

    await click('.attachment-delete button.button.alert');

    assert.dom('.overlay').exists();
    assert.dom('.overlay .modal').exists();
    assert.dom('.overlay .modal .callout').doesNotExist();
    assert.dom('.overlay .modal > p').exists();
    assert.dom('.overlay .modal > p').containsText('Are you sure you want to delete this attachment?');
    assert.dom('.overlay .modal button.button.alert').exists();
    assert.dom('.overlay .modal button.button.alert').containsText('Delete');
    assert.dom('.overlay .modal button.button.cancel').exists();
    assert.dom('.overlay .modal button.button.cancel').containsText('Cancel');

    await click('.overlay .modal button.button.cancel');

    assert.dom('.overlay').doesNotExist();
  });

  test('renders callout when deleting attachment returns errors', async function(assert) {
    await visit('/expenses/0033fbc2-3211-4e93-805d-b85b363bee39/attachments/2268c428-be40-4080-82e8-ffbbb7df246a');

    assert.equal(currentURL(), '/expenses/0033fbc2-3211-4e93-805d-b85b363bee39/attachments/2268c428-be40-4080-82e8-ffbbb7df246a');

    assert.dom('.attachment-delete button.button.alert').exists();

    await click('.attachment-delete button.button.alert');

    assert.dom('.overlay .modal button.button.alert').exists();

    await click('.overlay .modal button.button.alert');

    assert.equal(currentURL(), '/expenses/0033fbc2-3211-4e93-805d-b85b363bee39/attachments/2268c428-be40-4080-82e8-ffbbb7df246a');

    assert.dom('.overlay .modal .callout').exists();
    assert.dom('.overlay .modal .callout').hasClass('alert');
    assert.dom('.overlay .modal .callout p').exists({ count: 2 });
    assert.dom('.overlay .modal .callout p:nth-of-type(1)').containsText('Test attachment delete error 1.');
    assert.dom('.overlay .modal .callout p:nth-of-type(2)').containsText('Test attachment delete error 2.');

    await click('.overlay .modal button.button.cancel');

    assert.dom('.overlay').doesNotExist();

    // Verify the error callout is cleared when opening the modal again.
    await click('.attachment-delete button.button.alert');

    assert.dom('.overlay').exists();
    assert.dom('.overlay .modal .callout').doesNotExist();
  });

  test('transition to expense attachment index on successful attachment deletion', async function(assert) {
    const expenseId = uuidv4();
    const attachmentId = uuidv4();
    await visit(`/expenses/${expenseId}/attachments/${attachmentId}`);

    assert.equal(currentURL(), `/expenses/${expenseId}/attachments/${attachmentId}`);
    assert.dom('.attachment-delete button.button.alert');

    await click('.attachment-delete button.button.alert');

    assert.dom('.overlay .modal button.button.alert').exists();

    await click('.overlay .modal button.button.alert');

    assert.equal(currentURL(), `/expenses/${expenseId}/attachments`);
  });

  test('should render errors from api when creating attachment', async function(assert) {
    const id = uuidv4();
    await visit(`/expenses/${id}/attachments/new`);

    await fillIn('#attachment-name-input', 'Error Attachment');
    await click('#attachment-submit');

    assert.dom('.callout.alert').exists();
    assert.dom('.callout.alert p').exists({ count: 2 });
    assert.dom('.callout.alert p:nth-of-type(1)').containsText('Test attachment post error 1.');
    assert.dom('.callout.alert p:nth-of-type(2)').containsText('Test attachment post error 2.');
  });

  test('should transition to expense attachments after creating attachment', async function(assert) {
    const id = uuidv4();
    await visit(`/expenses/${id}/attachments/new`);

    await fillIn('#attachment-name-input', 'New Attachment');
    await click('#attachment-submit');

    await new Promise((r) => { setTimeout(r, 50); });
    assert.dom('.callout.alert').doesNotExist();
    assert.equal(currentURL(), `/expenses/${id}/attachments`); // @todo
  });

  test('visiting /expenses/:id/attachments/:id/edit', async function(assert) {
    const expenseId = uuidv4();
    const attachmentId = uuidv4();
    await visit(`/expenses/${expenseId}/attachments/${attachmentId}/edit`);

    assert.equal(currentURL(), `/expenses/${expenseId}/attachments/${attachmentId}/edit`);
    assert.dom('.container-sm.attachment-edit').exists();
    assert.dom('.attachment-edit h2').exists();
    assert.dom('.attachment-edit h2').containsText('Edit Attachment');
    assert.dom('.attachment-edit form').exists();
    assert.dom('#attachment-name-input').exists();
    assert.dom('#attachment-file-input').doesNotExist();
    assert.dom('#attachment-submit').exists();
    assert.dom('.callout.alert').doesNotExist();
  });

  test('should render errors from api when editing attachment', async function(assert) {
    await visit('/expenses/20808e7b-c243-47f8-b936-ed7d7577d4d1/attachments/425bd1a2-add4-4bb2-a6ca-3b38bfb427b2/edit');

    assert.equal(currentURL(), '/expenses/20808e7b-c243-47f8-b936-ed7d7577d4d1/attachments/425bd1a2-add4-4bb2-a6ca-3b38bfb427b2/edit');

    await fillIn('#attachment-name-input', 'Updated Attachment');
    await click('#attachment-submit');

    assert.dom('.callout.alert').exists();
    assert.dom('.callout.alert p').exists({ count: 2 });
    assert.dom('.callout.alert p:nth-of-type(1)').containsText('Test attachment patch error 1.');
    assert.dom('.callout.alert p:nth-of-type(2)').containsText('Test attachment patch error 2.');
  });

  test('visiting /expenses/:id/edit', async function(assert) {
    const id = uuidv4();
    await visit(`/expenses/${id}/edit`);

    assert.equal(currentURL(), `/expenses/${id}/edit`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Edit Expense');
    assert.dom('nav.secondary').exists();
    assert.dom('form').exists();
    assert.dom('#expense-date-input').exists();
    assert.dom('#expense-description-input').exists();
    assert.dom('#expense-amount-input').exists();
    assert.dom('#expense-reimbursed-input').exists();
    assert.dom('#expense-submit').exists();
    assert.dom('.callout.alert').doesNotExist();
  });

  test('should render errors from api when editing expense', async function(assert) {
    await visit('/expenses/20808e7b-c243-47f8-b936-ed7d7577d4d1/edit');

    assert.equal(currentURL(), '/expenses/20808e7b-c243-47f8-b936-ed7d7577d4d1/edit');

    await fillIn('#expense-description-input', 'Updated Expense');
    await fillIn('#expense-amount-input', '45.67');
    await fillIn('#expense-reimbursed-input', '12.34');
    await click('#expense-submit');

    assert.dom('.callout.alert').exists();
    assert.dom('.callout.alert p').exists({ count: 2 });
    assert.dom('.callout.alert p:nth-of-type(1)').containsText('Test expense patch error 1.');
    assert.dom('.callout.alert p:nth-of-type(2)').containsText('Test expense patch error 2.');

    // Test that the expense gets reset after navigating away from edit page.
    await click('nav.secondary ul li:nth-of-type(1) a');

    assert.equal(currentURL(), '/expenses/20808e7b-c243-47f8-b936-ed7d7577d4d1');
    assert.dom('table tr:nth-of-type(3) td:nth-of-type(2)').containsText('Test Expense');
    assert.dom('table tr:nth-of-type(4) td:nth-of-type(2)').containsText('$10.00');
    assert.dom('table tr:nth-of-type(5) td:nth-of-type(2)').containsText('$5.00');
  });

  test('should transition to expense details after editing expense', async function(assert) {
    const id = uuidv4();
    await visit(`/expenses/${id}/edit`);

    assert.equal(currentURL(), `/expenses/${id}/edit`);

    await fillIn('#expense-description-input', 'Updated Expense');
    await fillIn('#expense-amount-input', '45.67');
    await fillIn('#expense-reimbursed-input', '12.34');
    await click('#expense-submit');

    assert.equal(currentURL(), `/expenses/${id}`);
  });

  test('visiting /expenses/:id/settings', async function(assert) {
    const id = uuidv4();
    await visit(`/expenses/${id}/settings`);

    assert.equal(currentURL(), `/expenses/${id}/settings`);
    assert.dom('.container-lg').exists();
    assert.dom('.container-lg h1').exists();
    assert.dom('.container-lg h1').containsText('View Expense');
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
    assert.dom('.overlay .modal > p').containsText('Are you sure you want to delete this expense?');
    assert.dom('.overlay .modal button.button.alert').exists();
    assert.dom('.overlay .modal button.button.alert').containsText('Delete');
    assert.dom('.overlay .modal button.button.cancel').exists();
    assert.dom('.overlay .modal button.button.cancel').containsText('Cancel');

    await click('.overlay .modal button.button.cancel');

    assert.dom('.overlay').doesNotExist();

    await click('.container-sm a');

    assert.equal(currentURL(), `/expenses/${id}/edit`);
  });

  test('renders callout when deleting expense returns errors', async function(assert) {
    await visit('/expenses/0033fbc2-3211-4e93-805d-b85b363bee39/settings');

    assert.equal(currentURL(), '/expenses/0033fbc2-3211-4e93-805d-b85b363bee39/settings');

    assert.dom('.container-sm button.button.alert').exists();

    await click('.container-sm button.button.alert');

    assert.dom('.overlay .modal button.button.alert').exists();

    await click('.overlay .modal button.button.alert');

    assert.equal(currentURL(), '/expenses/0033fbc2-3211-4e93-805d-b85b363bee39/settings');

    assert.dom('.overlay .modal .callout').exists();
    assert.dom('.overlay .modal .callout').hasClass('alert');
    assert.dom('.overlay .modal .callout p').exists({ count: 2 });
    assert.dom('.overlay .modal .callout p:nth-of-type(1)').containsText('Test expense delete error 1.');
    assert.dom('.overlay .modal .callout p:nth-of-type(2)').containsText('Test expense delete error 2.');

    await click('.overlay .modal button.button.cancel');

    assert.dom('.overlay').doesNotExist();

    // Verify the error callout is cleared when opening the modal again.
    await click('.container-sm button.button.alert');

    assert.dom('.overlay').exists();
    assert.dom('.overlay .modal .callout').doesNotExist();
  });

  test('transitions to subcategory expenses page on successful expense deletion', async function(assert) {
    const id = uuidv4();
    await visit(`/expenses/${id}/settings`);

    assert.equal(currentURL(), `/expenses/${id}/settings`);
    assert.dom('.container-sm button.button.alert').exists();

    await click('.container-sm button.button.alert');

    assert.dom('.overlay .modal button.button.alert').exists();

    await click('.overlay .modal button.button.alert');

    assert.equal(currentURL(), '/subcategories/8e052327-006b-494d-a33b-0e2d951433f9/expenses');
  });
});
