import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { Interactor as Pikaday } from 'ember-pikaday/test-support';
import { selectChoose } from 'ember-power-select/test-support';
import { v4 as uuidv4 } from 'uuid';

module('Integration | Component | forms/income', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.setProperties({
      employers: [{
        id: uuidv4(),
        name: 'Employer 1',
      }, {
        id: uuidv4(),
        name: 'Employer 2',
      }, {
        id: uuidv4(),
        name: 'Employer 3',
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
    });
  });

  test('it renders an empty income form', async function(assert) {
    this.set('income', {
      amount: null,
      date: '',
      description: '',
      householdMember: null,
    });

    await render(hbs`<Forms::Income @income={{this.income}} @householdMembers={{this.householdMembers}} />`);

    assert.dom('form').exists();
    assert.dom('form label').exists({ count: 5 });
    assert.dom('form input').exists({ count: 4 });

    assert.dom('form div:nth-of-type(1) label').containsText('Date');
    assert.dom('form div:nth-of-type(1) input').hasNoValue();
    assert.dom('form div:nth-of-type(1) input').hasAttribute('type', 'text');
    assert.dom('form div:nth-of-type(1) input').hasAttribute('id', 'income-date-input');

    assert.dom('form div:nth-of-type(2) label').containsText('Member');

    assert.dom('form div:nth-of-type(3) label').containsText('Employer');

    assert.dom('form div:nth-of-type(4) label').containsText('Description');
    assert.dom('form div:nth-of-type(4) input').hasNoValue();

    assert.dom('form div:nth-of-type(5) label').containsText('Amount');
    assert.dom('form div:nth-of-type(5) input').hasNoValue();

    assert.dom('form div:nth-of-type(6) input').hasValue('Save');
    assert.dom('form div:nth-of-type(6) input').hasAttribute('type', 'submit');
    assert.dom('form div:nth-of-type(6) input').hasAttribute('id', 'income-submit');

    assert.dom('.callout').doesNotExist();
  });

  // ember-power-select-selected-item

  test('it renders a filled out income form', async function(assert) {
    this.set('income', {
      amount: 12.34,
      date: '2020-01-01',
      description: 'Test Income',
      employer: this.employers[1],
      householdMember: this.householdMembers[1],
    });

    await render(hbs`<Forms::Income @income={{this.income}} @householdMembers={{this.householdMembers}} />`);

    assert.dom('form').exists();
    assert.dom('form label').exists({ count: 5 });
    assert.dom('form input').exists({ count: 4 });
    assert.dom('form div:nth-of-type(1) label').containsText('Date');
    assert.dom('form div:nth-of-type(1) input').hasValue('2020-01-01');
    assert.dom('form div:nth-of-type(2) label').containsText('Member');
    assert.dom('form div:nth-of-type(2) .ember-power-select-selected-item').containsText('Household Member 2');
    assert.dom('form div:nth-of-type(3) label').containsText('Employer');
    assert.dom('form div:nth-of-type(3) .ember-power-select-selected-item').containsText('Employer 2');
    assert.dom('form div:nth-of-type(4) label').containsText('Description');
    assert.dom('form div:nth-of-type(4) input').hasValue('Test Income');
    assert.dom('form div:nth-of-type(5) label').containsText('Amount');
    assert.dom('form div:nth-of-type(5) input').hasValue('12.34');
  });

  test('it should render alert callout', async function(assert) {
    this.set('income', {
      amount: null,
      date: '',
      description: '',
      householdMember: null,
      save() {
        const err = new Error('Invalid');
        err.errors = [{
          detail: 'Test income error 1.',
        }, {
          detail: 'Test income error 2.',
        }];
        throw err;
      },
    });

    await render(hbs`<Forms::Income @income={{this.income}} @householdMembers={{this.householdMembers}} />`);

    await click('#income-date-input');
    await Pikaday.selectDate(new Date(2020, 1, 1));
    await selectChoose('#income-household-member-select', '.ember-power-select-option', 2);
    await fillIn('#income-description-input', 'Test Income');
    await fillIn('#income-amount-input', '23.45');
    await click('#income-submit');

    assert.dom('.callout').exists();
    assert.dom('.callout').hasClass('alert');
    assert.dom('.callout p').exists({ count: 2 });
    assert.dom('.callout p:nth-of-type(1)').containsText('Test income error 1.');
    assert.dom('.callout p:nth-of-type(2)').containsText('Test income error 2.');
  });
});
