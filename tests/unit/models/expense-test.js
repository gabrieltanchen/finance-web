import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | expense', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('expense', {});
    assert.ok(model);
  });

  test('it has the correct amountStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const expense = store.createRecord('expense', {
      amount: 0,
    });

    assert.equal(expense.amountStr, '-');

    expense.amount = '5.00';

    assert.equal(expense.amountStr, '$5.00');

    expense.amount = '1234.56';

    assert.equal(expense.amountStr, '$1,234.56');

    expense.amount = '-5.00';

    assert.equal(expense.amountStr, '$-5.00');

    expense.amount = '-6543.21';

    assert.equal(expense.amountStr, '$-6,543.21');
  });

  test('it has the correct reimbursedAmountStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const expense = store.createRecord('expense', {
      reimbursedAmount: 0,
    });

    assert.equal(expense.reimbursedAmountStr, '-');

    expense.reimbursedAmount = '5.00';

    assert.equal(expense.reimbursedAmountStr, '$5.00');

    expense.reimbursedAmount = '1234.56';

    assert.equal(expense.reimbursedAmountStr, '$1,234.56');

    expense.reimbursedAmount = '-5.00';

    assert.equal(expense.reimbursedAmountStr, '$-5.00');

    expense.reimbursedAmount = '-6543.21';

    assert.equal(expense.reimbursedAmountStr, '$-6,543.21');
  });
});
