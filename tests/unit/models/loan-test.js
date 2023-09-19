import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | loan', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('loan', {});
    assert.ok(model);
  });

  test('it has the correct amountStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const loan = store.createRecord('loan', {
      amount: 0,
    });

    assert.equal(loan.amountStr, '-');

    loan.amount = '5.00';

    assert.equal(loan.amountStr, '$5.00');

    loan.amount = '1234.56';

    assert.equal(loan.amountStr, '$1,234.56');

    loan.amount = '-5.00';

    assert.equal(loan.amountStr, '$-5.00');

    loan.amount = '-6543.21';

    assert.equal(loan.amountStr, '$-6,543.21');
  });

  test('it has the correct balanceStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const loan = store.createRecord('loan', {
      balance: 0,
    });

    assert.equal(loan.balanceStr, '-');

    loan.balance = '5.00';

    assert.equal(loan.balanceStr, '$5.00');

    loan.balance = '1234.56';

    assert.equal(loan.balanceStr, '$1,234.56');

    loan.balance = '-5.00';

    assert.equal(loan.balanceStr, '$-5.00');

    loan.balance = '-6543.21';

    assert.equal(loan.balanceStr, '$-6,543.21');
  });
});
