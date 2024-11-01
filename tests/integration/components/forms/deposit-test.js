import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { selectChoose } from 'ember-power-select/test-support';
import { v4 as uuidv4 } from 'uuid';

module('Integration | Component | forms/deposit', function(hooks) {
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
    });
  });

  test('it renders an empty deposit form', async function(assert) {
    this.set('deposit', {
      amount: null,
      date: '',
      fund: null,
    });

    await render(hbs`<Forms::Deposit @deposit={{this.deposit}} @funds={{this.funds}} />`);

    assert.dom('form').exists();
    assert.dom('form label').exists({ count: 3 });
    assert.dom('form input').exists({ count: 3 });

    assert.dom('form div:nth-of-type(1) label').containsText('Fund');

    assert.dom('form div:nth-of-type(2) label').containsText('Date');
    assert.dom('form div:nth-of-type(2) input').hasNoValue();
    assert.dom('form div:nth-of-type(2) input').hasAttribute('type', 'date');
    assert.dom('form div:nth-of-type(2) input').hasAttribute('id', 'deposit-date-input');

    assert.dom('form div:nth-of-type(3) label').containsText('Amount');
    assert.dom('form div:nth-of-type(3) input').hasNoValue();

    assert.dom('form div:nth-of-type(4) input').hasValue('Save');
    assert.dom('form div:nth-of-type(4) input').hasAttribute('type', 'submit');
    assert.dom('form div:nth-of-type(4) input').hasAttribute('id', 'deposit-submit');

    assert.dom('.callout').doesNotExist();
  });

  test('it renders a filled out deposit form', async function(assert) {
    this.set('deposit', {
      amount: 12.34,
      date: '2021-01-01',
      fund: this.funds[1],
    });

    await render(hbs`<Forms::Deposit @deposit={{this.deposit}} @funds={{this.funds}} />`);

    assert.dom('form').exists();
    assert.dom('form label').exists({ count: 3 });
    assert.dom('form input').exists({ count: 3 });
    assert.dom('form div:nth-of-type(1) label').containsText('Fund');
    assert.dom('form div:nth-of-type(1) .ember-power-select-selected-item').containsText('Fund 2');
    assert.dom('form div:nth-of-type(2) label').containsText('Date');
    assert.dom('form div:nth-of-type(2) input').hasValue('2021-01-01');
    assert.dom('form div:nth-of-type(3) label').containsText('Amount');
    assert.dom('form div:nth-of-type(3) input').hasValue('12.34');
  });

  test('it should render alert callout', async function(assert) {
    this.set('deposit', {
      amount: null,
      date: '',
      fund: null,
      save() {
        const err = new Error('Invalid');
        err.errors = [{
          detail: 'Test deposit error 1.',
        }, {
          detail: 'Test deposit error 2.',
        }];
        throw err;
      },
    });

    await render(hbs`<Forms::Deposit @deposit={{this.deposit}} @funds={{this.funds}} />`);

    await selectChoose('#deposit-fund-select', '.ember-power-select-option', 2);
    await fillIn('#deposit-date-input', '2021-01-01');
    await fillIn('#deposit-amount-input', '23.45');
    await click('#deposit-submit');

    assert.dom('.callout').exists();
    assert.dom('.callout').hasClass('alert');
    assert.dom('.callout p').exists({ count: 2 });
    assert.dom('.callout p:nth-of-type(1)').containsText('Test deposit error 1.');
    assert.dom('.callout p:nth-of-type(2)').containsText('Test deposit error 2.');
  });
});
