import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | income', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('income', {});
    assert.ok(model);
  });

  test('it has the correct amountStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const income = store.createRecord('income', {
      amount: '0',
    });

    assert.equal(income.amountStr, '-');

    income.amount = '5.00';

    assert.equal(income.amountStr, '$5.00');

    income.amount = '1234.56';

    assert.equal(income.amountStr, '$1,234.56');

    income.amount = '-5.00';

    assert.equal(income.amountStr, '$-5.00');

    income.amount = '-6543.21';

    assert.equal(income.amountStr, '$-6,543.21');
  });
});
