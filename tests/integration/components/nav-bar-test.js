import { test } from 'qunit';
import { moduleForComponent, setupRenderingTest } from 'ember-qunit';
import Service from '@ember/service';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

class SessionStub extends Service {
  authToken;
}

moduleForComponent('Integration | Component | nav-bar', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.register('service:session', SessionStub);
    this.inject.service('session');
  });

  test('it renders a navigation bar', async function(assert) {
    await render(hbs`<NavBar />`);

    assert.dom('nav').exists();
    assert.dom('nav').hasClass('nav-bar');
    assert.dom('nav .nav-bar-container').exists();

    // Index link
    assert.dom('nav .nav-bar-container > a').exists();
    assert.dom('nav .nav-bar-container > a h1').exists();
    assert.dom('nav .nav-bar-container > a h1').containsText('Finance');

    assert.dom('nav .nav-bar-container .nav-links').exists();
  });

  test('it renders correct links when logged out', async function(assert) {
    this.session.authToken = null;

    await render(hbs`<NavBar />`);

    assert.dom('.nav-links').exists();
    assert.dom('.nav-links a').exists({ count: 1 });
    assert.dom('.nav-links a').containsText('Login');
    assert.dom('.nav-links button').doesNotExist();
  });

  test('it renders the correct links when logged in', async function(assert) {
    this.session.authToken = 'token';

    await render(hbs`<NavBar />`);

    assert.dom('.nav-links').exists();
    assert.dom('.nav-links a').doesNotExist();
    assert.dom('.nav-links button').exists({ count: 1 });
    assert.dom('.nav-links button').containsText('Logout');
  });
});
