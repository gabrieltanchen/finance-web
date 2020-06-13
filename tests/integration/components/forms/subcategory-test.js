import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | forms/subcategory', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders an empty subcategory form', async function(assert) {
    this.set('subcategory', {
      name: '',
    });

    await render(hbs`<Forms::Subcategory @subcategory={{this.subcategory}} />`);

    assert.dom('form').exists();
    assert.dom('form label').exists({ count: 1 });
    assert.dom('form input').exists({ count: 2 });

    assert.dom('form label:nth-of-type(1)').containsText('Name');
    assert.dom('form input:nth-of-type(1)').hasNoValue();
    assert.dom('form input:nth-of-type(1)').hasAttribute('type', 'text');
    assert.dom('form input:nth-of-type(1)').hasAttribute('id', 'subcategory-name-input');
    assert.dom('form input:nth-of-type(1)').hasAria('required', 'true');

    assert.dom('form input:nth-of-type(2)').hasValue('Save');
    assert.dom('form input:nth-of-type(2)').hasAttribute('type', 'submit');
    assert.dom('form input:nth-of-type(2)').hasAttribute('id', 'subcategory-submit');

    assert.dom('.callout').doesNotExist();
  });

  test('it renders a filled out subcategory form', async function(assert) {
    this.set('subcategory', {
      name: 'Test Subcategory',
    });

    await render(hbs`<Forms::Subcategory @subcategory={{this.subcategory}} />`);

    assert.dom('form').exists();
    assert.dom('form label').exists({ count: 1 });
    assert.dom('form input').exists({ count: 2 });

    assert.dom('form label:nth-of-type(1)').containsText('Name');
    assert.dom('form input:nth-of-type(1)').hasValue('Test Subcategory');
    assert.dom('form input:nth-of-type(1)').hasAttribute('type', 'text');
    assert.dom('form input:nth-of-type(1)').hasAttribute('id', 'subcategory-name-input');
    assert.dom('form input:nth-of-type(1)').hasAria('required', 'true');
  });

  test('it should render alert callout', async function(assert) {
    this.set('subcategory', {
      name: '',
      save() {
        const err = new Error('Invalid');
        err.errors = [{
          detail: 'Test subcategory error 1.',
        }, {
          detail: 'Test subcategory error 2.',
        }];
        throw err;
      },
    });

    await render(hbs`<Forms::Subcategory @subcategory={{this.subcategory}} />`);

    await fillIn('#subcategory-name-input', 'Test Subcategory');

    await click('#subcategory-submit');

    assert.dom('.callout').exists();
    assert.dom('.callout').hasClass('alert');
    assert.dom('.callout p').exists({ count: 2 });
    assert.dom('.callout p:nth-of-type(1)').containsText('Test subcategory error 1.');
    assert.dom('.callout p:nth-of-type(2)').containsText('Test subcategory error 2.');
  });
});
