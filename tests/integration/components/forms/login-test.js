import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import Service from '@ember/service';
import { click, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

class SessionStub extends Service {
  login(email) {
    if (email === 'error@example.com') {
      return {
        errors: ['Test error 1', 'Test error 2'],
        success: false,
      };
    }
    return {
      errors: [],
      success: true,
    };
  }
}

module('Integration | Component | forms/login', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:session', SessionStub);
  });

  test('it renders a login form', async function(assert) {
    await render(hbs`<Forms::Login />`);

    assert.dom('form').exists();
    assert.dom('form label').exists({ count: 2 });
    assert.dom('form input').exists({ count: 3 });

    assert.dom('form label:nth-of-type(1)').containsText('Email');
    assert.dom('form input:nth-of-type(1)').hasAttribute('type', 'email');
    assert.dom('form input:nth-of-type(1)').hasAttribute('id', 'login-email');
    assert.dom('form input:nth-of-type(1)').hasAria('required', 'true');

    assert.dom('form label:nth-of-type(2)').containsText('Password');
    assert.dom('form input:nth-of-type(2)').hasAttribute('type', 'password');
    assert.dom('form input:nth-of-type(2)').hasAttribute('id', 'login-password');
    assert.dom('form input:nth-of-type(2)').hasAria('required', 'true');

    assert.dom('form input:nth-of-type(3)').hasValue('Login');
    assert.dom('form input:nth-of-type(3)').hasAttribute('type', 'submit');
    assert.dom('form input:nth-of-type(3)').hasAttribute('id', 'login-submit');

    assert.dom('.callout').doesNotExist();
  });

  test('it should render alert callout', async function(assert) {
    await render(hbs`<Forms::Login />`);

    await fillIn('#login-email', 'error@example.com');
    await fillIn('#login-password', 'password');

    await click('#login-submit');

    assert.dom('.callout').exists();
    assert.dom('.callout').hasClass('alert');
    assert.dom('.callout p').exists({ count: 2 });
    assert.dom('.callout p:nth-of-type(1)').containsText('Test error 1');
    assert.dom('.callout p:nth-of-type(2)').containsText('Test error 2');
  });
});
