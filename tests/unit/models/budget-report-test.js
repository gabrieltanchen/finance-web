import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | budget report', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget-report', {});
    assert.ok(model);
  });

  test('it has the correct actualStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget-report', {
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

  test('it has the correct alert', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget-report', {
      actual: 1,
      budget: 1,
    });

    assert.notOk(model.alert);

    model.actual = 2;

    assert.ok(model.alert);

    model.budget = 3;

    assert.notOk(model.alert);
  });

  test('it has the correct balanceStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget-report', {
      actual: 1,
      budget: 1,
    });

    assert.equal(model.balanceStr, '-');

    model.actual = '5.00';
    model.budget = '10.00';

    assert.equal(model.balanceStr, '$5.00');

    model.actual = '4941.79';
    model.budget = '9192.49';

    assert.equal(model.balanceStr, '$4,250.70');

    model.actual = '10.00';
    model.budget = '5.00';

    assert.equal(model.balanceStr, '$-5.00');

    model.actual = '4826.18';
    model.budget = '2449.83';

    assert.equal(model.balanceStr, '$-2,376.35');
  });

  test('it has the correct budgetStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget-report', {
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
});
