import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import Service from '@ember/service';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

class RouterStub extends Service {
  currentRouteName;
}

module('Integration | Component | menus/fund-item', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:router', RouterStub);
  });

  test('it renders a navigation menu', async function(assert) {
    await render(hbs`<Menus::FundItem />`);

    assert.dom('nav').exists();
    assert.dom('nav').hasClass('secondary');
    assert.dom('nav ul li').exists({ count: 2 });
    assert.dom('nav ul li:nth-of-type(1) a').exists();
    assert.dom('nav ul li:nth-of-type(1) a').containsText('Details');
    assert.dom('nav ul li:nth-of-type(1) a svg').exists();
    assert.dom('nav ul li:nth-of-type(1) a svg').hasClass('fa-list');
    assert.dom('nav ul li:nth-of-type(2) a').exists();
    assert.dom('nav ul li:nth-of-type(2) a').containsText('Settings');
    assert.dom('nav ul li:nth-of-type(2) a svg').exists();
    assert.dom('nav ul li:nth-of-type(2) a svg').hasClass('fa-cog');
  });

  test('it renders fund details button', async function(assert) {
    const router = this.owner.lookup('service:router');
    router.currentRouteName = '';

    await render(hbs`<Menus::FundItem />`);

    assert.dom('nav ul li:nth-of-type(1) span').doesNotExist();
    assert.dom('nav ul li:nth-of-type(1) a').exists();
    assert.dom('nav ul li:nth-of-type(1) a').containsText('Details');
  });

  test('it should not render fund details button', async function(assert) {
    const router = this.owner.lookup('service:router');
    router.currentRouteName = 'funds.show';

    await render(hbs`<Menus::FundItem />`);

    assert.dom('nav ul li:nth-of-type(1) a').doesNotExist();
    assert.dom('nav ul li:nth-of-type(1) span').exists();
    assert.dom('nav ul li:nth-of-type(1) span').containsText('Details');
  });

  test('it renders fund settings button', async function(assert) {
    const router = this.owner.lookup('service:router');
    router.currentRouteName = '';

    await render(hbs`<Menus::FundItem />`);

    assert.dom('nav ul li:nth-of-type(2) span').doesNotExist();
    assert.dom('nav ul li:nth-of-type(2) a').exists();
    assert.dom('nav ul li:nth-of-type(2) a').containsText('Settings');
  });

  test('it should not render fund settings button', async function(assert) {
    const router = this.owner.lookup('service:router');
    router.currentRouteName = 'funds.settings';

    await render(hbs`<Menus::FundItem />`);

    assert.dom('nav ul li:nth-of-type(2) a').doesNotExist();
    assert.dom('nav ul li:nth-of-type(2) span').exists();
    assert.dom('nav ul li:nth-of-type(2) span').containsText('Settings');
  });
});
