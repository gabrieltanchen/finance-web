import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | forms/vendor', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders an empty vendor form', async function(assert) {
    this.set('vendor', {
      name: '',
    });

    await render(hbs`<Forms::Vendor @vendor={{this.vendor}} />`);

    assert.dom('form').exists();
    assert.dom('form label').exists({ count: 1 });
    assert.dom('form input').exists({ count: 2 });

    assert.dom('form label:nth-of-type(1)').containsText('Name');
    assert.dom('form input:nth-of-type(1)').hasNoValue();
    assert.dom('form input:nth-of-type(1)').hasAttribute('type', 'text');
    assert.dom('form input:nth-of-type(1)').hasAttribute('id', 'vendor-name-input');
    assert.dom('form input:nth-of-type(1)').hasAria('required', 'true');

    assert.dom('form input:nth-of-type(2)').hasValue('Save');
    assert.dom('form input:nth-of-type(2)').hasAttribute('type', 'submit');
    assert.dom('form input:nth-of-type(2)').hasAttribute('id', 'vendor-submit');

    assert.dom('.callout').doesNotExist();
  });

  test('it renders a filled out vendor form', async function(assert) {
    this.set('vendor', {
      name: 'Test Vendor',
    });

    await render(hbs`<Forms::Vendor @vendor={{this.vendor}} />`);

    assert.dom('form').exists();
    assert.dom('form label').exists({ count: 1 });
    assert.dom('form input').exists({ count: 2 });

    assert.dom('form label:nth-of-type(1)').containsText('Name');
    assert.dom('form input:nth-of-type(1)').hasValue('Test Vendor');
    assert.dom('form input:nth-of-type(1)').hasAttribute('type', 'text');
    assert.dom('form input:nth-of-type(1)').hasAttribute('id', 'vendor-name-input');
    assert.dom('form input:nth-of-type(1)').hasAria('required', 'true');
  });

  test('it should render alert callout', async function(assert) {
    this.set('vendor', {
      name: '',
      save() {
        const err = new Error('Invalid');
        err.errors = [{
          detail: 'Test vendor error 1.',
        }, {
          detail: 'Test vendor error 2.',
        }];
        throw err;
      },
    });

    await render(hbs`<Forms::Vendor @vendor={{this.vendor}} />`);

    await fillIn('#vendor-name-input', 'Test Vendor');

    await click('#vendor-submit');

    assert.dom('.callout').exists();
    assert.dom('.callout').hasClass('alert');
    assert.dom('.callout p').exists({ count: 2 });
    assert.dom('.callout p:nth-of-type(1)').containsText('Test vendor error 1.');
    assert.dom('.callout p:nth-of-type(2)').containsText('Test vendor error 2.');
  });
});
