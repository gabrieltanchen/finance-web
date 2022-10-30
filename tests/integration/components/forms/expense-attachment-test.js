import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | forms/expense-attachment', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders an empty expense attachment form', async function(assert) {
    this.set('attachment', {
      name: '',
    });

    await render(hbs`<Forms::ExpenseAttachment @attachment={{this.attachment}} />`);

    assert.dom('form').exists();
    assert.dom('form label').exists({ count: 2 });
    assert.dom('form input').exists({ count: 3 });

    assert.dom('form label:nth-of-type(1)').containsText('Name');
    assert.dom('form input:nth-of-type(1)').hasNoValue();
    assert.dom('form input:nth-of-type(1)').hasAttribute('type', 'text');
    assert.dom('form input:nth-of-type(1)').hasAttribute('id', 'attachment-name-input');
    assert.dom('form input:nth-of-type(1)').hasAria('required', 'true');

    assert.dom('form label:nth-of-type(2)').containsText('File');
    assert.dom('form input:nth-of-type(2)').hasNoValue();
    assert.dom('form input:nth-of-type(2)').hasAttribute('type', 'file');
    assert.dom('form input:nth-of-type(2)').hasAttribute('id', 'attachment-file-input');

    assert.dom('form input:nth-of-type(3)').hasValue('Save');
    assert.dom('form input:nth-of-type(3)').hasAttribute('type', 'submit');
    assert.dom('form input:nth-of-type(3)').hasAttribute('id', 'attachment-submit');

    assert.dom('.callout').doesNotExist();
  });

  test('it renders a filled out expense attachment form', async function(assert) {
    this.set('attachment', {
      name: 'Test Attachment',
    });

    await render(hbs`<Forms::ExpenseAttachment @attachment={{this.attachment}} />`);

    assert.dom('form').exists();
    assert.dom('form label').exists({ count: 2 });
    assert.dom('form input').exists({ count: 3 });

    assert.dom('form label:nth-of-type(1)').containsText('Name');
    assert.dom('form input:nth-of-type(1)').hasValue('Test Attachment');
    assert.dom('form input:nth-of-type(1)').hasAttribute('type', 'text');
    assert.dom('form input:nth-of-type(1)').hasAttribute('id', 'attachment-name-input');
    assert.dom('form input:nth-of-type(1)').hasAria('required', 'true');
  });

  test('it should render alert callout', async function(assert) {
    this.set('attachment', {
      name: '',
      save() {
        const err = new Error('Invalid');
        err.errors = [{
          detail: 'Test attachment error 1.',
        }, {
          detail: 'Test attachment error 2.',
        }];
        throw err;
      },
    });

    await render(hbs`<Forms::ExpenseAttachment @attachment={{this.attachment}} />`);

    await fillIn('#attachment-name-input', 'Test Attachment');

    await click('#attachment-submit');

    assert.dom('.callout').exists();
    assert.dom('.callout').hasClass('alert');
    assert.dom('.callout p').exists({ count: 2 });
    assert.dom('.callout p:nth-of-type(1)').containsText('Test attachment error 1.');
    assert.dom('.callout p:nth-of-type(2)').containsText('Test attachment error 2.');
  });
});
