import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import Service from '@ember/service';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

class RouterStub extends Service {
  currentRouteName;
}

module('Integration | Component | menus/loan-payment-item', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:router', RouterStub);
  });

  test('it renders', async function(assert) {
    await render(hbs`<Menus::LoanPaymentItem />`);

    assert.dom('nav').exists();
    assert.dom('nav').hasClass('secondary');
    assert.dom('nav ul li').exists({ count: 1 });
    assert.dom('nav ul li:nth-of-type(1) a').exists();
    assert.dom('nav ul li:nth-of-type(1) a').containsText('Details');
    assert.dom('nav ul li:nth-of-type(1) a svg').exists();
    assert.dom('nav ul li:nth-of-type(1) a svg').hasClass('fa-list');
  });

  test('it renders loan payment details button', async function(assert) {
    const router = this.owner.lookup('service:router');
    router.currentRouteName = '';

    await render(hbs`<Menus::LoanPaymentItem />`);

    assert.dom('nav ul li:nth-of-type(1) span').doesNotExist();
    assert.dom('nav ul li:nth-of-type(1) a').exists();
    assert.dom('nav ul li:nth-of-type(1) a').containsText('Details');
  });

  test('it should not render loan payment details button', async function(assert) {
    const router = this.owner.lookup('service:router');
    router.currentRouteName = 'loan-payments.show';

    await render(hbs`<Menus::LoanPaymentItem />`);

    assert.dom('nav ul li:nth-of-type(1) a').doesNotExist();
    assert.dom('nav ul li:nth-of-type(1) span').exists();
    assert.dom('nav ul li:nth-of-type(1) span').containsText('Details');
  });
});
