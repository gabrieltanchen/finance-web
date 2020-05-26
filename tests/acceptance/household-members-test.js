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

module('Acceptance | household members', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    const session = this.owner.lookup('service:session');
    session.logout();
    session.authToken = 'token';
  });

  test('visiting /household-members', async function(assert) {
    await visit('/household-members');

    assert.equal(currentURL(), '/household-members');
    assert.dom('.container-lg').exists();
    assert.dom('.title-with-buttons').exists();
    assert.dom('.title-with-buttons h1').exists();
    assert.dom('.title-with-buttons h1').containsText('Members of Household');
    assert.dom('.title-with-buttons .buttons').exists();
    assert.dom('.title-with-buttons .buttons a').exists({ count: 1 });
    assert.dom('.title-with-buttons .buttons a').containsText('New');
    assert.dom('nav.pagination').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 25 });

    await click('.pagination-next button');

    assert.equal(currentURL(), '/household-members?page=2');
    assert.dom('table tbody tr').exists({ count: 1 });

    await click('.pagination-previous button');

    assert.equal(currentURL(), '/household-members?page=1');
    assert.dom('table tbody tr').exists({ count: 25 });
  });

  test('visiting /household-members/new', async function(assert) {
    await visit('/household-members/new');

    assert.equal(currentURL(), '/household-members/new');
    assert.dom('.container-sm').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('New Household Member');
    assert.dom('form').exists();
    assert.dom('#household-member-name-input').exists();
    assert.dom('#household-member-submit').exists();
    assert.dom('.callout.alert').doesNotExist();
  });

  test('should render errors from api when creating household member', async function(assert) {
    await visit('/household-members/new');

    assert.equal(currentURL(), '/household-members/new');

    await fillIn('#household-member-name-input', 'Error Household Member');
    await click('#household-member-submit');

    assert.dom('.callout.alert').exists();
    assert.dom('.callout.alert p').exists({ count: 2 });
    assert.dom('.callout.alert p:nth-of-type(1)').containsText('Test household member post error 1.');
    assert.dom('.callout.alert p:nth-of-type(2)').containsText('Test household member post error 2.');
  });

  test('should transition to household member details after creating household member', async function(assert) {
    await visit('/household-members/new');

    assert.equal(currentURL(), '/household-members/new');

    await fillIn('#household-member-name-input', 'New Household Member');
    await click('#household-member-submit');

    assert.equal(currentURL(), '/household-members/3e1b0321-d588-405e-a227-8ce545ffd837');
  });

  test('visiting /household-members/:id', async function(assert) {
    const id = uuidv4();
    await visit(`/household-members/${id}`);

    assert.equal(currentURL(), `/household-members/${id}`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Household Member - Test Household Member');
    assert.dom('nav.secondary').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 7 });
    assert.dom('table tbody tr:nth-of-type(1) td:nth-of-type(1)').containsText('ID');
    assert.dom('table tbody tr:nth-of-type(2) td:nth-of-type(1)').containsText('Name');
    assert.dom('table tbody tr:nth-of-type(3) td:nth-of-type(1)').containsText('Created At');
    assert.dom('table tbody tr:nth-of-type(4) td:nth-of-type(1)').containsText('Number of expenses');
    assert.dom('table tbody tr:nth-of-type(5) td:nth-of-type(1)').containsText('Cumulative Amount');
    assert.dom('table tbody tr:nth-of-type(6) td:nth-of-type(1)').containsText('Cumulative Reimbursed');
    assert.dom('table tbody tr:nth-of-type(7) td:nth-of-type(1)').containsText('Cumulative Total');
  });

  test('visiting /household-members/:id/edit', async function(assert) {
    const id = uuidv4();
    await visit(`/household-members/${id}/edit`);

    assert.equal(currentURL(), `/household-members/${id}/edit`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Edit Household Member - Test Household Member');
    assert.dom('nav.secondary').exists();
    assert.dom('form').exists();
    assert.dom('#household-member-name-input').exists();
    assert.dom('#household-member-submit').exists();
    assert.dom('.callout.alert').doesNotExist();
  });

  test('should render errors from api when editing household member', async function(assert) {
    await visit('/household-members/e05557f8-1010-4978-86fb-0cdbe71ef811/edit');

    assert.equal(currentURL(), '/household-members/e05557f8-1010-4978-86fb-0cdbe71ef811/edit');

    await fillIn('#household-member-name-input', 'Updated Household Member');
    await click('#household-member-submit');

    assert.dom('.callout.alert').exists();
    assert.dom('.callout.alert p').exists({ count: 2 });
    assert.dom('.callout.alert p:nth-of-type(1)').containsText('Test household member patch error 1.');
    assert.dom('.callout.alert p:nth-of-type(2)').containsText('Test household member patch error 2.');

    // Test that the household member name gets reset after navigating away from
    // edit page.
    await click('nav.secondary ul li:nth-of-type(1) a');

    assert.equal(currentURL(), '/household-members/e05557f8-1010-4978-86fb-0cdbe71ef811');
    assert.dom('h1').containsText('Household Member - Test Household Member');
  });

  test('should transition to household member details after editing household member', async function(assert) {
    const id = uuidv4();
    await visit(`/household-members/${id}/edit`);

    assert.equal(currentURL(), `/household-members/${id}/edit`);

    await fillIn('#household-member-name-input', 'Updated Household Member');
    await click('#household-member-submit');

    assert.equal(currentURL(), `/household-members/${id}`);
  });

  test('visiting /household-members/:id/expenses', async function(assert) {
    const id = uuidv4();
    await visit(`/household-members/${id}/expenses`);

    assert.equal(currentURL(), `/household-members/${id}/expenses`);
    assert.dom('.container-lg').exists();
    assert.dom('h1').exists();
    assert.dom('h1').containsText('Household Member - Test Household Member');
    assert.dom('nav.secondary').exists();
    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 25 });

    await click('.pagination-next button');

    assert.equal(currentURL(), `/household-members/${id}/expenses?page=2`);
    assert.dom('table tbody tr').exists({ count: 1 });

    await click('.pagination-previous button');

    assert.equal(currentURL(), `/household-members/${id}/expenses?page=1`);
    assert.dom('table tbody tr').exists({ count: 25 });
  });

  test('visiting /household-members/:id/settings', async function(assert) {
    const id = uuidv4();
    await visit(`/household-members/${id}/settings`);

    assert.equal(currentURL(), `/household-members/${id}/settings`);
    assert.dom('.container-lg').exists();
    assert.dom('.container-lg h1').exists();
    assert.dom('.container-lg h1').containsText('Household Member - Test Household Member');
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
    assert.dom('.overlay .modal > p').containsText('Are you sure you want to delete household member Test Household Member?');
    assert.dom('.overlay .modal button.button.alert').exists();
    assert.dom('.overlay .modal button.button.alert').containsText('Delete');
    assert.dom('.overlay .modal button.button.cancel').exists();
    assert.dom('.overlay .modal button.button.cancel').containsText('Cancel');

    await click('.overlay .modal button.button.cancel');

    assert.dom('.overlay').doesNotExist();

    await click('.container-sm a');

    assert.equal(currentURL(), `/household-members/${id}/edit`);
  });

  test('renders callout when deleting household member returns errors', async function(assert) {
    await visit('/household-members/e05557f8-1010-4978-86fb-0cdbe71ef811/settings');

    assert.equal(currentURL(), '/household-members/e05557f8-1010-4978-86fb-0cdbe71ef811/settings');
    assert.dom('.container-sm button.button.alert').exists();

    await click('.container-sm button.button.alert');

    assert.dom('.overlay .modal button.button.alert').exists();

    await click('.overlay .modal button.button.alert');

    assert.equal(currentURL(), '/household-members/e05557f8-1010-4978-86fb-0cdbe71ef811/settings');
    assert.dom('.overlay .modal .callout').exists();
    assert.dom('.overlay .modal .callout').hasClass('alert');
    assert.dom('.overlay .modal .callout p').exists({ count: 2 });
    assert.dom('.overlay .modal .callout p:nth-of-type(1)').containsText('Test household member delete error 1.');
    assert.dom('.overlay .modal .callout p:nth-of-type(2)').containsText('Test household member delete error 2.');

    await click('.overlay .modal button.button.cancel');

    assert.dom('.overlay').doesNotExist();

    // Verify the error callout is cleared when opening the modal again.
    await click('.container-sm button.button.alert');

    assert.dom('.overlay').exists();
    assert.dom('.overlay .modal .callout').doesNotExist();
  });

  test('transitions to /household-members on successful household member deletion', async function(assert) {
    const id = uuidv4();
    await visit(`/household-members/${id}/settings`);

    assert.equal(currentURL(), `/household-members/${id}/settings`);
    assert.dom('.container-sm button.button.alert').exists();

    await click('.container-sm button.button.alert');

    assert.dom('.overlay .modal button.button.alert').exists();

    await click('.overlay .modal button.button.alert');

    assert.equal(currentURL(), '/household-members');
  });
});
