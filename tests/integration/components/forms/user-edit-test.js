import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | forms/user-edit', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders an empty user edit form', async function(assert) {
    this.set('user', {
      email: '',
      firstName: '',
      lastName: '',
    });

    await render(hbs`<Forms::UserEdit @user={{this.user}} />`);

    assert.dom('form').exists();
    assert.dom('form label').exists({ count: 3 });
    assert.dom('form input').exists({ count: 4 });

    assert.dom('form label:nth-of-type(1)').containsText('Email');
    assert.dom('form input:nth-of-type(1)').hasNoValue();
    assert.dom('form input:nth-of-type(1)').hasAttribute('type', 'email');
    assert.dom('form input:nth-of-type(1)').hasAttribute('id', 'user-email-input');
    assert.dom('form input:nth-of-type(1)').hasAria('required', 'true');

    assert.dom('form label:nth-of-type(2)').containsText('First Name');
    assert.dom('form input:nth-of-type(2)').hasNoValue();
    assert.dom('form input:nth-of-type(2)').hasAttribute('type', 'text');
    assert.dom('form input:nth-of-type(2)').hasAttribute('id', 'user-first-name-input');
    assert.dom('form input:nth-of-type(2)').hasAria('required', 'true');

    assert.dom('form label:nth-of-type(3)').containsText('Last Name');
    assert.dom('form input:nth-of-type(3)').hasNoValue();
    assert.dom('form input:nth-of-type(3)').hasAttribute('type', 'text');
    assert.dom('form input:nth-of-type(3)').hasAttribute('id', 'user-last-name-input');
    assert.dom('form input:nth-of-type(3)').hasAria('required', 'true');

    assert.dom('form input:nth-of-type(4)').hasValue('Save');
    assert.dom('form input:nth-of-type(4)').hasAttribute('type', 'submit');
    assert.dom('form input:nth-of-type(4)').hasAttribute('id', 'user-submit');

    assert.dom('.callout').doesNotExist();
  });

  test('it renders a filled out user edit form', async function(assert) {
    this.set('user', {
      email: 'test@example.com',
      firstName: 'Test',
      lastName: 'User',
    });

    await render(hbs`<Forms::UserEdit @user={{this.user}} />`);

    assert.dom('form').exists();
    assert.dom('form label').exists({ count: 3 });
    assert.dom('form input').exists({ count: 4 });

    assert.dom('form label:nth-of-type(1)').containsText('Email');
    assert.dom('form input:nth-of-type(1)').hasValue('test@example.com');
    assert.dom('form input:nth-of-type(1)').hasAttribute('type', 'email');
    assert.dom('form input:nth-of-type(1)').hasAttribute('id', 'user-email-input');
    assert.dom('form input:nth-of-type(1)').hasAria('required', 'true');

    assert.dom('form label:nth-of-type(2)').containsText('First Name');
    assert.dom('form input:nth-of-type(2)').hasValue('Test');
    assert.dom('form input:nth-of-type(2)').hasAttribute('type', 'text');
    assert.dom('form input:nth-of-type(2)').hasAttribute('id', 'user-first-name-input');
    assert.dom('form input:nth-of-type(2)').hasAria('required', 'true');

    assert.dom('form label:nth-of-type(3)').containsText('Last Name');
    assert.dom('form input:nth-of-type(3)').hasValue('User');
    assert.dom('form input:nth-of-type(3)').hasAttribute('type', 'text');
    assert.dom('form input:nth-of-type(3)').hasAttribute('id', 'user-last-name-input');
    assert.dom('form input:nth-of-type(3)').hasAria('required', 'true');
  });

  test('it should render alert callout', async function(assert) {
    this.set('user', {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      save() {
        const err = new Error('Invalid');
        err.errors = [{
          detail: 'Test user error 1.',
        }, {
          detail: 'Test user error 2.',
        }];
        throw err;
      },
    });

    await render(hbs`<Forms::UserEdit @user={{this.user}} />`);

    await fillIn('#user-email-input', 'test@example.com');
    await fillIn('#user-first-name-input', 'Test');
    await fillIn('#user-last-name-input', 'User');

    await click('#user-submit');

    assert.dom('.callout').exists();
    assert.dom('.callout').hasClass('alert');
    assert.dom('.callout p').exists({ count: 2 });
    assert.dom('.callout p:nth-of-type(1)').containsText('Test user error 1.');
    assert.dom('.callout p:nth-of-type(2)').containsText('Test user error 2.');
  });
});
