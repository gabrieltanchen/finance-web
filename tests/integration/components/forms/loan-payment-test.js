import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { selectChoose } from 'ember-power-select/test-support';
import { v4 as uuidv4 } from 'uuid';

module('Integration | Component | forms/loan-payment', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.setProperties({
      loans: [{
        id: uuidv4(),
        name: 'Loan 1',
      }, {
        id: uuidv4(),
        name: 'Loan 2',
      }, {
        id: uuidv4(),
        name: 'Loan 3',
      }],
    });
  });

  test('it renders an empty loan payment form', async function(assert) {
    this.set('loanPayment', {
      date: '',
      interestAmount: null,
      loan: null,
      principalAmount: null,
    });

    await render(hbs`<Forms::LoanPayment @loanPayment={{this.loanPayment}} @loans={{this.loans}} />`);

    assert.dom('form').exists();
    assert.dom('form label').exists({ count: 4 });
    assert.dom('form input').exists({ count: 4 });

    assert.dom('form div:nth-of-type(1) label').containsText('Loan');

    assert.dom('form div:nth-of-type(2) label').containsText('Date');
    assert.dom('form div:nth-of-type(2) input').hasNoValue();
    assert.dom('form div:nth-of-type(2) input').hasAttribute('type', 'date');
    assert.dom('form div:nth-of-type(2) input').hasAttribute('id', 'loan-payment-date-input');

    assert.dom('form div:nth-of-type(3) label').containsText('Principal Amount');
    assert.dom('form div:nth-of-type(3) input').hasNoValue();
    assert.dom('form div:nth-of-type(3) input').hasAttribute('type', 'text');
    assert.dom('form div:nth-of-type(3) input').hasAttribute('id', 'loan-payment-principal-amount-input');

    assert.dom('form div:nth-of-type(4) label').containsText('Interest Amount');
    assert.dom('form div:nth-of-type(4) input').hasNoValue();
    assert.dom('form div:nth-of-type(4) input').hasAttribute('type', 'text');
    assert.dom('form div:nth-of-type(4) input').hasAttribute('id', 'loan-payment-interest-amount-input');

    assert.dom('form div:nth-of-type(5) input').hasValue('Save');
    assert.dom('form div:nth-of-type(5) input').hasAttribute('type', 'submit');
    assert.dom('form div:nth-of-type(5) input').hasAttribute('id', 'loan-payment-submit');

    assert.dom('.callout').doesNotExist();
  });

  test('it renders a filled out loan payment form', async function(assert) {
    this.set('loanPayment', {
      date: '2023-01-01',
      interestAmount: 12.34,
      loan: this.loans[1],
      principalAmount: 56.78,
    });

    await render(hbs`<Forms::LoanPayment @loanPayment={{this.loanPayment}} @loans={{this.loans}} />`);

    assert.dom('form').exists();
    assert.dom('form label').exists({ count: 4 });
    assert.dom('form input').exists({ count: 4 });

    assert.dom('form div:nth-of-type(1) label').containsText('Loan');
    assert.dom('form div:nth-of-type(1) .ember-power-select-selected-item').containsText('Loan 2');
    assert.dom('form div:nth-of-type(2) label').containsText('Date');
    assert.dom('form div:nth-of-type(2) input').hasValue('2023-01-01');
    assert.dom('form div:nth-of-type(3) label').containsText('Principal Amount');
    assert.dom('form div:nth-of-type(3) input').hasValue('56.78');
    assert.dom('form div:nth-of-type(4) label').containsText('Interest Amount');
    assert.dom('form div:nth-of-type(4) input').hasValue('12.34');
  });

  test('it should render alert callout', async function(assert) {
    this.set('loanPayment', {
      date: '',
      interestAmount: null,
      loan: null,
      principalAmount: null,
      save() {
        const err = new Error('Invalid');
        err.errors = [{
          detail: 'Test loan payment error 1.',
        }, {
          detail: 'Test loan payment error 2.',
        }];
        throw err;
      },
    });

    await render(hbs`<Forms::LoanPayment @loanPayment={{this.loanPayment}} @loans={{this.loans}} />`);

    await selectChoose('#loan-payment-loan-select', '.ember-power-select-option', 2);
    await fillIn('#loan-payment-date-input', '2023-01-01');
    await fillIn('#loan-payment-principal-amount-input', '56.78');
    await fillIn('#loan-payment-interest-amount-input', '12.34');
    await click('#loan-payment-submit');

    assert.dom('.callout').exists();
    assert.dom('.callout').hasClass('alert');
    assert.dom('.callout p').exists({ count: 2 });
    assert.dom('.callout p:nth-of-type(1)').containsText('Test loan payment error 1.');
    assert.dom('.callout p:nth-of-type(2)').containsText('Test loan payment error 2.');
  });
});
