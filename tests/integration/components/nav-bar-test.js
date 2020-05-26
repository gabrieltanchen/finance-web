import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import Service from '@ember/service';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

class SessionStub extends Service {
  authToken;
}

module('Integration | Component | nav-bar', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:session', SessionStub);
  });

  test('it renders a navigation bar', async function(assert) {
    await render(hbs`<NavBar />`);

    assert.dom('nav').exists();
    assert.dom('nav').hasClass('nav-bar');
    assert.dom('nav .nav-bar-container').exists();

    // Index link
    assert.dom('nav .nav-bar-container > a.nav-title').exists();
    assert.dom('nav .nav-bar-container > a.nav-title').containsText('Finance');

    assert.dom('nav .nav-bar-container .nav-links').exists();
  });

  test('it renders correct links when logged out', async function(assert) {
    const session = this.owner.lookup('service:session');
    session.authToken = null;

    await render(hbs`<NavBar />`);

    assert.dom('.nav-links').exists();
    assert.dom('.nav-links a').exists({ count: 1 });
    assert.dom('.nav-links a').containsText('Login');
    assert.dom('.nav-links button').doesNotExist();
  });

  test('it renders the correct links when logged in', async function(assert) {
    const session = this.owner.lookup('service:session');
    session.authToken = 'token';

    await render(hbs`<NavBar />`);

    assert.dom('.nav-links').exists();
    assert.dom('.nav-links a').exists({ count: 2 });
    assert.dom('.nav-links a:nth-of-type(1)').containsText('Vendors');
    assert.dom('.nav-links a:nth-of-type(2)').containsText('Members');
    assert.dom('.nav-links button').exists({ count: 1 });
    assert.dom('.nav-links button').containsText('Logout');
  });
});
