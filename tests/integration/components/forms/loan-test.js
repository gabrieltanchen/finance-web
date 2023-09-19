import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | forms/loan', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders an empty loan form', async function(assert) {
    this.set('loan', {
      amount: null,
      name: '',
    });

    await render(hbs`<Forms::Loan @loan={{this.loan}} />`);

    assert.dom('form').exists();
    assert.dom('form label').exists({ count: 2 });
    assert.dom('form input').exists({ count: 3 });

    assert.dom('form label:nth-of-type(1)').containsText('Name');
    assert.dom('form input:nth-of-type(1)').hasNoValue();
    assert.dom('form input:nth-of-type(1)').hasAttribute('type', 'text');
    assert.dom('form input:nth-of-type(1)').hasAttribute('id', 'loan-name-input');
    assert.dom('form input:nth-of-type(1)').hasAria('required', 'true');

    assert.dom('form label:nth-of-type(2)').containsText('Amount');
    assert.dom('form input:nth-of-type(2)').hasNoValue();
    assert.dom('form input:nth-of-type(2)').hasAttribute('type', 'text');
    assert.dom('form input:nth-of-type(2)').hasAttribute('id', 'loan-amount-input');

    assert.dom('form input:nth-of-type(3)').hasValue('Save');
    assert.dom('form input:nth-of-type(3)').hasAttribute('type', 'submit');
    assert.dom('form input:nth-of-type(3)').hasAttribute('id', 'loan-submit');

    assert.dom('.callout').doesNotExist();
  });

  test('it renders a filled out loan form', async function(assert) {
    this.set('loan', {
      amount: 12.34,
      name: 'Test Loan',
    });

    await render(hbs`<Forms::Loan @loan={{this.loan}} />`);

    assert.dom('form').exists();
    assert.dom('form label').exists({ count: 2 });
    assert.dom('form input').exists({ count: 3 });

    assert.dom('form label:nth-of-type(1)').containsText('Name');
    assert.dom('form input:nth-of-type(1)').hasValue('Test Loan');
    assert.dom('form input:nth-of-type(1)').hasAttribute('type', 'text');
    assert.dom('form input:nth-of-type(1)').hasAttribute('id', 'loan-name-input');
    assert.dom('form input:nth-of-type(1)').hasAria('required', 'true');

    assert.dom('form label:nth-of-type(2)').containsText('Amount');
    assert.dom('form input:nth-of-type(2)').hasValue('12.34');
    assert.dom('form input:nth-of-type(2)').hasAttribute('type', 'text');
    assert.dom('form input:nth-of-type(2)').hasAttribute('id', 'loan-amount-input');
  });

  test('it should render alert callout', async function(assert) {
    this.set('loan', {
      amount: null,
      name: '',
      save() {
        const err = new Error('Invalid');
        err.errors = [{
          detail: 'Test loan error 1.',
        }, {
          detail: 'Test loan error 2.',
        }];
        throw err;
      },
    });

    await render(hbs`<Forms::Loan @loan={{this.loan}} />`);

    await fillIn('#loan-name-input', 'Test Loan');
    await fillIn('#loan-amount-input', '12.34');

    await click('#loan-submit');

    assert.dom('.callout').exists();
    assert.dom('.callout').hasClass('alert');
    assert.dom('.callout p').exists({ count: 2 });
    assert.dom('.callout p:nth-of-type(1)').containsText('Test loan error 1.');
    assert.dom('.callout p:nth-of-type(2)').containsText('Test loan error 2.');
  });
});
