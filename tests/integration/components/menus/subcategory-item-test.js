import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import Service from '@ember/service';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

class RouterStub extends Service {
  currentRouteName;
}

module('Integration | Component | menus/subcategory-item', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:router', RouterStub);
  });

  test('it renders', async function(assert) {
    await render(hbs`<Menus::SubcategoryItem />`);

    assert.dom('nav').exists();
    assert.dom('nav').hasClass('secondary');
    assert.dom('nav ul li').exists({ count: 5 });
    assert.dom('nav ul li:nth-of-type(1) a').exists();
    assert.dom('nav ul li:nth-of-type(1) a').containsText('Details');
    assert.dom('nav ul li:nth-of-type(1) a svg').exists();
    assert.dom('nav ul li:nth-of-type(1) a svg').hasClass('fa-list');
    assert.dom('nav ul li:nth-of-type(2) a').exists();
    assert.dom('nav ul li:nth-of-type(2) a').containsText('Expenses');
    assert.dom('nav ul li:nth-of-type(2) a svg').exists();
    assert.dom('nav ul li:nth-of-type(2) a svg').hasClass('fa-credit-card');
    assert.dom('nav ul li:nth-of-type(3) a').exists();
    assert.dom('nav ul li:nth-of-type(3) a').containsText('Budgets');
    assert.dom('nav ul li:nth-of-type(3) a svg').exists();
    assert.dom('nav ul li:nth-of-type(3) a svg').hasClass('fa-magnifying-glass-dollar');
    assert.dom('nav ul li:nth-of-type(4) a').exists();
    assert.dom('nav ul li:nth-of-type(4) a').containsText('Annual Report');
    assert.dom('nav ul li:nth-of-type(4) a svg').exists();
    assert.dom('nav ul li:nth-of-type(4) a svg').hasClass('fa-chart-bar');
    assert.dom('nav ul li:nth-of-type(5) a').exists();
    assert.dom('nav ul li:nth-of-type(5) a').containsText('Settings');
    assert.dom('nav ul li:nth-of-type(5) a svg').exists();
    assert.dom('nav ul li:nth-of-type(5) a svg').hasClass('fa-gear');
  });

  test('it renders subcategory details button', async function(assert) {
    const router = this.owner.lookup('service:router');
    router.currentRouteName = '';

    await render(hbs`<Menus::SubcategoryItem />`);

    assert.dom('nav ul li:nth-of-type(1) span').doesNotExist();
    assert.dom('nav ul li:nth-of-type(1) a').exists();
    assert.dom('nav ul li:nth-of-type(1) a').containsText('Details');
  });

  test('it should not render subcategory details button', async function(assert) {
    const router = this.owner.lookup('service:router');
    router.currentRouteName = 'subcategories.show';

    await render(hbs`<Menus::SubcategoryItem />`);

    assert.dom('nav ul li:nth-of-type(1) a').doesNotExist();
    assert.dom('nav ul li:nth-of-type(1) span').exists();
    assert.dom('nav ul li:nth-of-type(1) span').containsText('Details');
  });

  test('it renders subcategory expenses button', async function(assert) {
    const router = this.owner.lookup('service:router');
    router.currentRouteName = '';

    await render(hbs`<Menus::SubcategoryItem />`);

    assert.dom('nav ul li:nth-of-type(2) span').doesNotExist();
    assert.dom('nav ul li:nth-of-type(2) a').exists();
    assert.dom('nav ul li:nth-of-type(2) a').containsText('Expenses');
  });

  test('it should not render subcategory expenses button', async function(assert) {
    const router = this.owner.lookup('service:router');
    router.currentRouteName = 'subcategories.expenses';

    await render(hbs`<Menus::SubcategoryItem />`);

    assert.dom('nav ul li:nth-of-type(2) a').doesNotExist();
    assert.dom('nav ul li:nth-of-type(2) span').exists();
    assert.dom('nav ul li:nth-of-type(2) span').containsText('Expenses');
  });

  test('it renders subcategory budgets button', async function(assert) {
    const router = this.owner.lookup('service:router');
    router.currentRouteName = '';

    await render(hbs`<Menus::SubcategoryItem />`);

    assert.dom('nav ul li:nth-of-type(3) span').doesNotExist();
    assert.dom('nav ul li:nth-of-type(3) a').exists();
    assert.dom('nav ul li:nth-of-type(3) a').containsText('Budgets');
  });

  test('it should not render subcategory budgets button', async function(assert) {
    const router = this.owner.lookup('service:router');
    router.currentRouteName = 'subcategories.budgets';

    await render(hbs`<Menus::SubcategoryItem />`);

    assert.dom('nav ul li:nth-of-type(3) a').doesNotExist();
    assert.dom('nav ul li:nth-of-type(3) span').exists();
    assert.dom('nav ul li:nth-of-type(3) span').containsText('Budgets');
  });

  test('it renders subcategory annual report button', async function(assert) {
    const router = this.owner.lookup('service:router');
    router.currentRouteName = '';

    await render(hbs`<Menus::SubcategoryItem />`);

    assert.dom('nav ul li:nth-of-type(4) span').doesNotExist();
    assert.dom('nav ul li:nth-of-type(4) a').exists();
    assert.dom('nav ul li:nth-of-type(4) a').containsText('Annual Report');
  });

  test('it should not render subcategory annual report button', async function(assert) {
    const router = this.owner.lookup('service:router');
    router.currentRouteName = 'subcategories.annual-report';

    await render(hbs`<Menus::SubcategoryItem />`);

    assert.dom('nav ul li:nth-of-type(4) a').doesNotExist();
    assert.dom('nav ul li:nth-of-type(4) span').exists();
    assert.dom('nav ul li:nth-of-type(4) span').containsText('Annual Report');
  });

  test('it renders subcategory settings button', async function(assert) {
    const router = this.owner.lookup('service:router');
    router.currentRouteName = '';

    await render(hbs`<Menus::SubcategoryItem />`);

    assert.dom('nav ul li:nth-of-type(5) span').doesNotExist();
    assert.dom('nav ul li:nth-of-type(5) a').exists();
    assert.dom('nav ul li:nth-of-type(5) a').containsText('Settings');
  });

  test('it should not render subcategory settings button', async function(assert) {
    const router = this.owner.lookup('service:router');
    router.currentRouteName = 'subcategories.settings';

    await render(hbs`<Menus::SubcategoryItem />`);

    assert.dom('nav ul li:nth-of-type(5) a').doesNotExist();
    assert.dom('nav ul li:nth-of-type(5) span').exists();
    assert.dom('nav ul li:nth-of-type(5) span').containsText('Settings');
  });
});
