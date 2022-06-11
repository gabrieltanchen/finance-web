import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import Service from '@ember/service';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

class RouterStub extends Service {
  currentRouteName;
}

module('Integration | Component | menus/category-item', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:router', RouterStub);
  });

  test('it renders a navigation menu', async function(assert) {
    await render(hbs`<Menus::CategoryItem />`);

    assert.dom('nav').exists();
    assert.dom('nav').hasClass('secondary');
    assert.dom('nav ul li').exists({ count: 3 });
    assert.dom('nav ul li:nth-of-type(1) a').exists();
    assert.dom('nav ul li:nth-of-type(1) a').containsText('Details');
    assert.dom('nav ul li:nth-of-type(1) a svg').exists();
    assert.dom('nav ul li:nth-of-type(1) a svg').hasClass('fa-list');
    assert.dom('nav ul li:nth-of-type(2) a').exists();
    assert.dom('nav ul li:nth-of-type(2) a').containsText('Subcategories');
    assert.dom('nav ul li:nth-of-type(2) a svg').exists();
    assert.dom('nav ul li:nth-of-type(2) a svg').hasClass('fa-diagram-project');
    assert.dom('nav ul li:nth-of-type(3) a').exists();
    assert.dom('nav ul li:nth-of-type(3) a').containsText('Settings');
    assert.dom('nav ul li:nth-of-type(3) a svg').exists();
    assert.dom('nav ul li:nth-of-type(3) a svg').hasClass('fa-gear');
  });

  test('it renders category details button', async function(assert) {
    const router = this.owner.lookup('service:router');
    router.currentRouteName = '';

    await render(hbs`<Menus::CategoryItem />`);

    assert.dom('nav ul li:nth-of-type(1) span').doesNotExist();
    assert.dom('nav ul li:nth-of-type(1) a').exists();
    assert.dom('nav ul li:nth-of-type(1) a').containsText('Details');
  });

  test('it should not render category details button', async function(assert) {
    const router = this.owner.lookup('service:router');
    router.currentRouteName = 'categories.show';

    await render(hbs`<Menus::CategoryItem />`);

    assert.dom('nav ul li:nth-of-type(1) a').doesNotExist();
    assert.dom('nav ul li:nth-of-type(1) span').exists();
    assert.dom('nav ul li:nth-of-type(1) span').containsText('Details');
  });

  test('it renders category subcategories button', async function(assert) {
    const router = this.owner.lookup('service:router');
    router.currentRouteName = '';

    await render(hbs`<Menus::CategoryItem />`);

    assert.dom('nav ul li:nth-of-type(2) span').doesNotExist();
    assert.dom('nav ul li:nth-of-type(2) a').exists();
    assert.dom('nav ul li:nth-of-type(2) a').containsText('Subcategories');
  });

  test('it should not render category subcategories button', async function(assert) {
    const router = this.owner.lookup('service:router');
    router.currentRouteName = 'categories.subcategories';

    await render(hbs`<Menus::CategoryItem />`);

    assert.dom('nav ul li:nth-of-type(2) a').doesNotExist();
    assert.dom('nav ul li:nth-of-type(2) span').exists();
    assert.dom('nav ul li:nth-of-type(2) span').containsText('Subcategories');
  });

  test('it renders category settings button', async function(assert) {
    const router = this.owner.lookup('service:router');
    router.currentRouteName = '';

    await render(hbs`<Menus::CategoryItem />`);

    assert.dom('nav ul li:nth-of-type(3) span').doesNotExist();
    assert.dom('nav ul li:nth-of-type(3) a').exists();
    assert.dom('nav ul li:nth-of-type(3) a').containsText('Settings');
  });

  test('it should not render category settings button', async function(assert) {
    const router = this.owner.lookup('service:router');
    router.currentRouteName = 'categories.settings';

    await render(hbs`<Menus::CategoryItem />`);

    assert.dom('nav ul li:nth-of-type(3) a').doesNotExist();
    assert.dom('nav ul li:nth-of-type(3) span').exists();
    assert.dom('nav ul li:nth-of-type(3) span').containsText('Settings');
  });
});
