import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | forms/employer', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders an empty employer form', async function(assert) {
    this.set('employer', {
      name: '',
    });

    await render(hbs`<Forms::Employer @employer={{this.employer}} />`);

    assert.dom('form').exists();
    assert.dom('form label').exists({ count: 1 });
    assert.dom('form input').exists({ count: 2 });

    assert.dom('form label:nth-of-type(1)').containsText('Name');
    assert.dom('form input:nth-of-type(1)').hasNoValue();
    assert.dom('form input:nth-of-type(1)').hasAttribute('type', 'text');
    assert.dom('form input:nth-of-type(1)').hasAttribute('id', 'employer-name-input');
    assert.dom('form input:nth-of-type(1)').hasAria('required', 'true');

    assert.dom('form input:nth-of-type(2)').hasValue('Save');
    assert.dom('form input:nth-of-type(2)').hasAttribute('type', 'submit');
    assert.dom('form input:nth-of-type(2)').hasAttribute('id', 'employer-submit');

    assert.dom('.callout').doesNotExist();
  });

  test('it renders a filled out employer form', async function(assert) {
    this.set('employer', {
      name: 'Test Employer',
    });

    await render(hbs`<Forms::Employer @employer={{this.employer}} />`);

    assert.dom('form').exists();
    assert.dom('form label').exists({ count: 1 });
    assert.dom('form input').exists({ count: 2 });

    assert.dom('form label:nth-of-type(1)').containsText('Name');
    assert.dom('form input:nth-of-type(1)').hasValue('Test Employer');
    assert.dom('form input:nth-of-type(1)').hasAttribute('type', 'text');
    assert.dom('form input:nth-of-type(1)').hasAttribute('id', 'employer-name-input');
    assert.dom('form input:nth-of-type(1)').hasAria('required', 'true');
  });

  test('it should render alert callout', async function(assert) {
    this.set('employer', {
      name: '',
      save() {
        const err = new Error('Invalid');
        err.errors = [{
          detail: 'Test employer error 1.',
        }, {
          detail: 'Test employer error 2.',
        }];
        throw err;
      },
    });

    await render(hbs`<Forms::Employer @employer={{this.employer}} />`);

    await fillIn('#employer-name-input', 'Test Employer');

    await click('#employer-submit');

    assert.dom('.callout').exists();
    assert.dom('.callout').hasClass('alert');
    assert.dom('.callout p').exists({ count: 2 });
    assert.dom('.callout p:nth-of-type(1)').containsText('Test employer error 1.');
    assert.dom('.callout p:nth-of-type(2)').containsText('Test employer error 2.');
  });
});
