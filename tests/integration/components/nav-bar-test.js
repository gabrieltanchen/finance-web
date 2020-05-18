import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | nav-bar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a navigation bar', async function(assert) {
    await render(hbs`<NavBar />`);

    assert.dom('nav').exists();
    assert.dom('nav').hasClass('nav-bar');
    assert.dom('nav .nav-bar-container').exists();

    // Index link
    assert.dom('nav .nav-bar-container > a').exists();
    assert.dom('nav .nav-bar-container > a h1').exists();
    assert.dom('nav .nav-bar-container > a h1').containsText('Finance');

    // Nav links
    assert.dom('nav .nav-bar-container .links').exists();
    assert.dom('nav .nav-bar-container .links a').exists({ count: 1 });
    assert.dom('nav .nav-bar-container .links a').containsText('Login');
  });
});
