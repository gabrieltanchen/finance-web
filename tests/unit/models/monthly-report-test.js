import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | monthly report', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('monthly-report', {});
    assert.ok(model);
  });

  test('it has the correct actualStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('monthly-report', {
      actual: 0,
    });

    assert.equal(model.actualStr, '-');

    model.actual = '5.00';

    assert.equal(model.actualStr, '$5.00');

    model.actual = '1234.56';

    assert.equal(model.actualStr, '$1,234.56');

    model.actual = '-5.00';

    assert.equal(model.actualStr, '$-5.00');

    model.actual = '-6543.21';

    assert.equal(model.actualStr, '$-6,543.21');
  });

  test('it has the correct budgetActualBalanceAlert', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('monthly-report', {
      actual: 1,
      budget: 1,
    });

    assert.notOk(model.budgetActualBalanceAlert);

    model.actual = 2;

    assert.ok(model.budgetActualBalanceAlert);

    model.budget = 3;

    assert.notOk(model.budgetActualBalanceAlert);
  });

  test('it has the correct budgetActualBalanceStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('monthly-report', {
      actual: 1,
      budget: 1,
    });

    assert.equal(model.budgetActualBalanceStr, '-');

    model.actual = '5.00';
    model.budget = '10.00';

    assert.equal(model.budgetActualBalanceStr, '$5.00');

    model.actual = '4941.79';
    model.budget = '9192.49';

    assert.equal(model.budgetActualBalanceStr, '$4,250.70');

    model.actual = '10.00';
    model.budget = '5.00';

    assert.equal(model.budgetActualBalanceStr, '$-5.00');

    model.actual = '4826.18';
    model.budget = '2449.83';

    assert.equal(model.budgetActualBalanceStr, '$-2,376.35');
  });

  test('it has the correct budgetStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('monthly-report', {
      budget: 0,
    });

    assert.equal(model.budgetStr, '-');

    model.budget = '5.00';

    assert.equal(model.budgetStr, '$5.00');

    model.budget = '1234.56';

    assert.equal(model.budgetStr, '$1,234.56');

    model.budget = '-5.00';

    assert.equal(model.budgetStr, '$-5.00');

    model.budget = '-6543.21';

    assert.equal(model.budgetStr, '$-6,543.21');
  });

  test('it has the correct incomeActualBalanceAlert', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('monthly-report', {
      budget: 1,
      income: 1,
    });

    assert.notOk(model.incomeActualBalanceAlert);

    model.actual = 2;

    assert.ok(model.incomeActualBalanceAlert);

    model.income = 3;

    assert.notOk(model.incomeActualBalanceAlert);
  });

  test('it has the correct incomeActualBalanceStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('monthly-report', {
      actual: 1,
      income: 1,
    });

    assert.equal(model.incomeActualBalanceStr, '-');

    model.actual = '5.00';
    model.income = '10.00';

    assert.equal(model.incomeActualBalanceStr, '$5.00');

    model.actual = '4941.79';
    model.income = '9192.49';

    assert.equal(model.incomeActualBalanceStr, '$4,250.70');

    model.actual = '10.00';
    model.income = '5.00';

    assert.equal(model.incomeActualBalanceStr, '$-5.00');

    model.actual = '4826.18';
    model.income = '2449.83';

    assert.equal(model.incomeActualBalanceStr, '$-2,376.35');
  });

  test('it has the correct incomeBudgetBalanceAlert', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('monthly-report', {
      budget: 1,
      income: 1,
    });

    assert.notOk(model.incomeBudgetBalanceAlert);

    model.budget = 2;

    assert.ok(model.incomeBudgetBalanceAlert);

    model.income = 3;

    assert.notOk(model.incomeBudgetBalanceAlert);
  });

  test('it has the correct incomeBudgetBalanceStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('monthly-report', {
      budget: 1,
      income: 1,
    });

    assert.equal(model.incomeBudgetBalanceStr, '-');

    model.budget = '5.00';
    model.income = '10.00';

    assert.equal(model.incomeBudgetBalanceStr, '$5.00');

    model.budget = '4941.79';
    model.income = '9192.49';

    assert.equal(model.incomeBudgetBalanceStr, '$4,250.70');

    model.budget = '10.00';
    model.income = '5.00';

    assert.equal(model.incomeBudgetBalanceStr, '$-5.00');

    model.budget = '4826.18';
    model.income = '2449.83';

    assert.equal(model.incomeBudgetBalanceStr, '$-2,376.35');
  });

  test('it has the correct incomeStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('monthly-report', {
      income: 0,
    });

    assert.equal(model.incomeStr, '-');

    model.income = '5.00';

    assert.equal(model.incomeStr, '$5.00');

    model.income = '1234.56';

    assert.equal(model.incomeStr, '$1,234.56');

    model.income = '-5.00';

    assert.equal(model.incomeStr, '$-5.00');

    model.income = '-6543.21';

    assert.equal(model.incomeStr, '$-6,543.21');
  });
});
