import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | income', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('income', {});
    assert.ok(model);
  });

  test('it has the correct amount', function(assert) {
    const store = this.owner.lookup('service:store');
    const income = store.createRecord('income', {
      amountCents: 0,
    });

    assert.equal(income.amount, '-');

    income.amountCents = 500;

    assert.equal(income.amount, '$5.00');

    income.amountCents = 123456;

    assert.equal(income.amount, '$1,234.56');

    income.amountCents = -500;

    assert.equal(income.amount, '$-5.00');

    income.amountCents = -654321;

    assert.equal(income.amount, '$-6,543.21');
  });
});
