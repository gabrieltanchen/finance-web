import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { selectChoose } from 'ember-power-select/test-support';
import { v4 as uuidv4 } from 'uuid';

module('Integration | Component | forms/budget', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.setProperties({
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
    });
  });

  test('it renders an empty budget form', async function(assert) {
    this.set('budget', {
      amount: null,
      month: null,
      subcategory: null,
      year: null,
    });
    await render(hbs`<Forms::Budget @budget={{this.budget}} @subcategories={{this.subcategories}} />`);

    assert.dom('form').exists();
    assert.dom('form label').exists({ count: 4 });
    assert.dom('form input').exists({ count: 2 });

    assert.dom('form div:nth-of-type(1) label').containsText('Subcategory');

    assert.dom('form div:nth-of-type(2) label').containsText('Year');

    assert.dom('form div:nth-of-type(3) label').containsText('Month');

    assert.dom('form div:nth-of-type(4) label').containsText('Amount');
    assert.dom('form div:nth-of-type(4) input').hasNoValue();
    assert.dom('form div:nth-of-type(4) input').hasAttribute('type', 'text');
    assert.dom('form div:nth-of-type(4) input').hasAttribute('id', 'budget-amount-input');

    assert.dom('form div:nth-of-type(5) input').hasValue('Save');
    assert.dom('form div:nth-of-type(5) input').hasAttribute('type', 'submit');
    assert.dom('form div:nth-of-type(5) input').hasAttribute('id', 'budget-submit');

    assert.dom('.callout').doesNotExist();
  });

  test('it renders a filled out budget form', async function(assert) {
    this.set('budget', {
      amount: 12.34,
      month: 5,
      subcategory: this.subcategories[1],
      year: 2019,
    });
    await render(hbs`<Forms::Budget @budget={{this.budget}} @subcategories={{this.subcategories}} />`);

    assert.dom('form').exists();
    assert.dom('form label').exists({ count: 4 });
    assert.dom('form input').exists({ count: 2 });
    assert.dom('form div:nth-of-type(1) label').containsText('Subcategory');
    assert.dom('form div:nth-of-type(1) .ember-power-select-selected-item').containsText('Subcategory 2');
    assert.dom('form div:nth-of-type(2) label').containsText('Year');
    assert.dom('form div:nth-of-type(2) .ember-power-select-selected-item').containsText('2019');
    assert.dom('form div:nth-of-type(3) label').containsText('Month');
    assert.dom('form div:nth-of-type(3) .ember-power-select-selected-item').containsText('June');
    assert.dom('form div:nth-of-type(4) label').containsText('Amount');
    assert.dom('form div:nth-of-type(4) input').hasValue('12.34');
  });

  test('it should render alert callout', async function(assert) {
    this.set('budget', {
      amount: null,
      month: null,
      save() {
        const err = new Error('Invalid');
        err.errors = [{
          detail: 'Test budget error 1.',
        }, {
          detail: 'Test budget error 2.',
        }];
        throw err;
      },
      subcategory: null,
      year: null,
    });
    await render(hbs`<Forms::Budget @budget={{this.budget}} @subcategories={{this.subcategories}} />`);

    await selectChoose('#budget-subcategory-select', '.ember-power-select-option', 2);
    await selectChoose('#budget-year-select', '.ember-power-select-option', 3);
    await selectChoose('#budget-month-select', '.ember-power-select-option', 4);
    await fillIn('#budget-amount-input', '23.45');
    await click('#budget-submit');

    assert.dom('.callout').exists();
    assert.dom('.callout').hasClass('alert');
    assert.dom('.callout p').exists({ count: 2 });
    assert.dom('.callout p:nth-of-type(1)').containsText('Test budget error 1.');
    assert.dom('.callout p:nth-of-type(2)').containsText('Test budget error 2.');
  });
});
