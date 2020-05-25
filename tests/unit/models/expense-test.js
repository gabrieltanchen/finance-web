import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | expense', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('expense', {});
    assert.ok(model);
  });

  test('it has the correct amount', function(assert) {
    const store = this.owner.lookup('service:store');
    const expense = store.createRecord('expense', {
      amountCents: 0,
    });

    assert.equal(expense.amount, '-');

    expense.amountCents = 500;

    assert.equal(expense.amount, '$5.00');

    expense.amountCents = 123456;

    assert.equal(expense.amount, '$1,234.56');

    expense.amountCents = -500;

    assert.equal(expense.amount, '$-5.00');

    expense.amountCents = -654321;

    assert.equal(expense.amount, '$-6,543.21');
  });

  test('it has the correct reimbursed amount', function(assert) {
    const store = this.owner.lookup('service:store');
    const expense = store.createRecord('expense', {
      reimbursedCents: 0,
    });

    assert.equal(expense.reimbursedAmount, '-');

    expense.reimbursedCents = 500;

    assert.equal(expense.reimbursedAmount, '$5.00');

    expense.reimbursedCents = 123456;

    assert.equal(expense.reimbursedAmount, '$1,234.56');

    expense.reimbursedCents = -500;

    assert.equal(expense.reimbursedAmount, '$-5.00');

    expense.reimbursedCents = -654321;

    assert.equal(expense.reimbursedAmount, '$-6,543.21');
  });
});
