import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | deposit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('deposit', {});
    assert.ok(model);
  });

  test('it has the correct amountStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const deposit = store.createRecord('deposit', {
      amount: 0,
    });

    assert.equal(deposit.amountStr, '-');

    deposit.amount = '5.00';

    assert.equal(deposit.amountStr, '$5.00');

    deposit.amount = '1234.56';

    assert.equal(deposit.amountStr, '$1,234.56');

    deposit.amount = '-5.00';

    assert.equal(deposit.amountStr, '$-5.00');

    deposit.amount = '-6543.21';

    assert.equal(deposit.amountStr, '$-6,543.21');
  });
});
