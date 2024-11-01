import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { selectChoose } from 'ember-power-select/test-support';
import { v4 as uuidv4 } from 'uuid';

module('Integration | Component | forms/expense', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.setProperties({
      funds: [{
        id: uuidv4(),
        name: 'Fund 1',
      }, {
        id: uuidv4(),
        name: 'Fund 2',
      }, {
        id: uuidv4(),
        name: 'Fund 3',
      }],
      householdMembers: [{
        id: uuidv4(),
        name: 'Household Member 1',
      }, {
        id: uuidv4(),
        name: 'Household Member 2',
      }, {
        id: uuidv4(),
        name: 'Household Member 3',
      }],
      subcategories: [{
        id: uuidv4(),
        name: 'Subcategory 1',
      }, {
        id: uuidv4(),
        name: 'Subcategory 2',
      }, {
        id: uuidv4(),
        name: 'Subcategory 3',
      }],
      vendors: [{
        id: uuidv4(),
        name: 'Vendor 1',
      }, {
        id: uuidv4(),
        name: 'Vendor 2',
      }, {
        id: uuidv4(),
        name: 'Vendor 3',
      }],
    });
  });

  test('it renders an empty expense form', async function(assert) {
    this.set('expense', {
      amount: null,
      date: '',
      description: '',
      householdMember: null,
      reimbursedAmount: null,
      subcategory: null,
      vendor: null,
    });

    await render(hbs`<Forms::Expense @expense={{this.expense}} @householdMembers={{this.householdMembers}} @subcategories={{this.subcategories}} @vendors={{this.vendors}} />`);

    assert.dom('form').exists();
    assert.dom('form label').exists({ count: 8 });
    assert.dom('form input').exists({ count: 5 });

    assert.dom('form div:nth-of-type(1) label').containsText('Subcategory');

    assert.dom('form div:nth-of-type(2) label').containsText('Fund');

    assert.dom('form div:nth-of-type(3) label').containsText('Vendor');

    assert.dom('form div:nth-of-type(4) label').containsText('Member');

    assert.dom('form div:nth-of-type(5) label').containsText('Date');
    assert.dom('form div:nth-of-type(5) input').hasNoValue();
    assert.dom('form div:nth-of-type(5) input').hasAttribute('type', 'date');
    assert.dom('form div:nth-of-type(5) input').hasAttribute('id', 'expense-date-input');

    assert.dom('form div:nth-of-type(6) label').containsText('Description');
    assert.dom('form div:nth-of-type(6) input').hasNoValue();

    assert.dom('form div:nth-of-type(7) label').containsText('Amount');
    assert.dom('form div:nth-of-type(7) input').hasNoValue();

    assert.dom('form div:nth-of-type(8) label').containsText('Reimbursed Amount');
    assert.dom('form div:nth-of-type(8) input').hasNoValue();

    assert.dom('form div:nth-of-type(9) input').hasValue('Save');
    assert.dom('form div:nth-of-type(9) input').hasAttribute('type', 'submit');
    assert.dom('form div:nth-of-type(9) input').hasAttribute('id', 'expense-submit');

    assert.dom('.callout').doesNotExist();
  });

  test('it renders a filled out expense form', async function(assert) {
    this.set('expense', {
      amount: 12.34,
      date: '2020-01-01',
      description: 'Test Expense',
      fund: this.funds[1],
      householdMember: this.householdMembers[1],
      reimbursedAmount: 1.23,
      subcategory: this.subcategories[1],
      vendor: this.vendors[1],
    });

    await render(hbs`<Forms::Expense @expense={{this.expense}} @funds={{this.funds}} @householdMembers={{this.householdMembers}} @subcategories={{this.subcategories}} @vendors={{this.vendors}} />`);

    assert.dom('form').exists();
    assert.dom('form label').exists({ count: 8 });
    assert.dom('form input').exists({ count: 5 });
    assert.dom('form div:nth-of-type(1) label').containsText('Subcategory');
    assert.dom('form div:nth-of-type(1) .ember-power-select-selected-item').containsText('Subcategory 2');
    assert.dom('form div:nth-of-type(2) label').containsText('Fund');
    assert.dom('form div:nth-of-type(2) .ember-power-select-selected-item').containsText('Fund 2');
    assert.dom('form div:nth-of-type(3) label').containsText('Vendor');
    assert.dom('form div:nth-of-type(3) .ember-power-select-selected-item').containsText('Vendor 2');
    assert.dom('form div:nth-of-type(4) label').containsText('Member');
    assert.dom('form div:nth-of-type(4) .ember-power-select-selected-item').containsText('Household Member 2');
    assert.dom('form div:nth-of-type(5) label').containsText('Date');
    assert.dom('form div:nth-of-type(5) input').hasValue('2020-01-01');
    assert.dom('form div:nth-of-type(6) label').containsText('Description');
    assert.dom('form div:nth-of-type(6) input').hasValue('Test Expense');
    assert.dom('form div:nth-of-type(7) label').containsText('Amount');
    assert.dom('form div:nth-of-type(7) input').hasValue('12.34');
    assert.dom('form div:nth-of-type(8) label').containsText('Reimbursed Amount');
    assert.dom('form div:nth-of-type(8) input').hasValue('1.23');
  });

  test('it should render alert callout', async function(assert) {
    this.set('expense', {
      amount: null,
      date: '',
      description: '',
      householdMember: null,
      reimbursedAmount: null,
      save() {
        const err = new Error('Invalid');
        err.errors = [{
          detail: 'Test expense error 1.',
        }, {
          detail: 'Test expense error 2.',
        }];
        throw err;
      },
      subcategory: null,
      vendor: null,
    });

    await render(hbs`<Forms::Expense @expense={{this.expense}} @householdMembers={{this.householdMembers}} @subcategories={{this.subcategories}} @vendors={{this.vendors}} />`);

    await selectChoose('#expense-subcategory-select', '.ember-power-select-option', 2);
    await selectChoose('#expense-vendor-select', '.ember-power-select-option', 2);
    await selectChoose('#expense-household-member-select', '.ember-power-select-option', 2);
    await fillIn('#expense-date-input', '2020-01-01');
    await fillIn('#expense-description-input', 'Test Expense');
    await fillIn('#expense-amount-input', '23.45');
    await fillIn('#expense-reimbursed-input', '0');
    await click('#expense-submit');

    assert.dom('.callout').exists();
    assert.dom('.callout').hasClass('alert');
    assert.dom('.callout p').exists({ count: 2 });
    assert.dom('.callout p:nth-of-type(1)').containsText('Test expense error 1.');
    assert.dom('.callout p:nth-of-type(2)').containsText('Test expense error 2.');
  });
});
