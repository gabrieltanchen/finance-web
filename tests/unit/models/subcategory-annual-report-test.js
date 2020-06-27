import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | subcategory annual report', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    assert.ok(model);
  });

  test('it has the correct aprActualStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      aprActual: 0,
    });

    assert.equal(model.aprActualStr, '-');

    model.aprActual = '5.00';

    assert.equal(model.aprActualStr, '$5.00');

    model.aprActual = '1234.56';

    assert.equal(model.aprActualStr, '$1,234.56');

    model.aprActual = '-5.00';

    assert.equal(model.aprActualStr, '$-5.00');

    model.aprActual = '-6543.21';

    assert.equal(model.aprActualStr, '$-6,543.21');
  });

  test('it has the correct aprAlert', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      aprActual: 1,
      aprBudget: 1,
    });

    assert.notOk(model.aprAlert);

    model.aprActual = 2;

    assert.ok(model.aprAlert);

    model.aprBudget = 3;

    assert.notOk(model.aprAlert);
  });

  test('it has the correct aprBalanceStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      aprActual: 1,
      aprBudget: 1,
    });

    assert.equal(model.aprBalanceStr, '-');

    model.aprActual = '5.00';
    model.aprBudget = '10.00';

    assert.equal(model.aprBalanceStr, '$5.00');

    model.aprActual = '4941.79';
    model.aprBudget = '9192.49';

    assert.equal(model.aprBalanceStr, '$4,250.70');

    model.aprActual = '10.00';
    model.aprBudget = '5.00';

    assert.equal(model.aprBalanceStr, '$-5.00');

    model.aprActual = '4826.18';
    model.aprBudget = '2449.83';

    assert.equal(model.aprBalanceStr, '$-2,376.35');
  });

  test('it has the correct aprBudgetStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      aprBudget: 0,
    });

    assert.equal(model.aprBudgetStr, '-');

    model.aprBudget = '5.00';

    assert.equal(model.aprBudgetStr, '$5.00');

    model.aprBudget = '1234.56';

    assert.equal(model.aprBudgetStr, '$1,234.56');

    model.aprBudget = '-5.00';

    assert.equal(model.aprBudgetStr, '$-5.00');

    model.aprBudget = '-6543.21';

    assert.equal(model.aprBudgetStr, '$-6,543.21');
  });

  test('it has the correct augActualStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      augActual: 0,
    });

    assert.equal(model.augActualStr, '-');

    model.augActual = '5.00';

    assert.equal(model.augActualStr, '$5.00');

    model.augActual = '1234.56';

    assert.equal(model.augActualStr, '$1,234.56');

    model.augActual = '-5.00';

    assert.equal(model.augActualStr, '$-5.00');

    model.augActual = '-6543.21';

    assert.equal(model.augActualStr, '$-6,543.21');
  });

  test('it has the correct augAlert', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      augActual: 1,
      augBudget: 1,
    });

    assert.notOk(model.augAlert);

    model.augActual = 2;

    assert.ok(model.augAlert);

    model.augBudget = 3;

    assert.notOk(model.augAlert);
  });

  test('it has the correct augBalanceStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      augActual: 1,
      augBudget: 1,
    });

    assert.equal(model.augBalanceStr, '-');

    model.augActual = '5.00';
    model.augBudget = '10.00';

    assert.equal(model.augBalanceStr, '$5.00');

    model.augActual = '4941.79';
    model.augBudget = '9192.49';

    assert.equal(model.augBalanceStr, '$4,250.70');

    model.augActual = '10.00';
    model.augBudget = '5.00';

    assert.equal(model.augBalanceStr, '$-5.00');

    model.augActual = '4826.18';
    model.augBudget = '2449.83';

    assert.equal(model.augBalanceStr, '$-2,376.35');
  });

  test('it has the correct augBudgetStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      augBudget: 0,
    });

    assert.equal(model.augBudgetStr, '-');

    model.augBudget = '5.00';

    assert.equal(model.augBudgetStr, '$5.00');

    model.augBudget = '1234.56';

    assert.equal(model.augBudgetStr, '$1,234.56');

    model.augBudget = '-5.00';

    assert.equal(model.augBudgetStr, '$-5.00');

    model.augBudget = '-6543.21';

    assert.equal(model.augBudgetStr, '$-6,543.21');
  });

  test('it has the correct decActualStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      decActual: 0,
    });

    assert.equal(model.decActualStr, '-');

    model.decActual = '5.00';

    assert.equal(model.decActualStr, '$5.00');

    model.decActual = '1234.56';

    assert.equal(model.decActualStr, '$1,234.56');

    model.decActual = '-5.00';

    assert.equal(model.decActualStr, '$-5.00');

    model.decActual = '-6543.21';

    assert.equal(model.decActualStr, '$-6,543.21');
  });

  test('it has the correct decAlert', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      decActual: 1,
      decBudget: 1,
    });

    assert.notOk(model.decAlert);

    model.decActual = 2;

    assert.ok(model.decAlert);

    model.decBudget = 3;

    assert.notOk(model.decAlert);
  });

  test('it has the correct decBalanceStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      decActual: 1,
      decBudget: 1,
    });

    assert.equal(model.decBalanceStr, '-');

    model.decActual = '5.00';
    model.decBudget = '10.00';

    assert.equal(model.decBalanceStr, '$5.00');

    model.decActual = '4941.79';
    model.decBudget = '9192.49';

    assert.equal(model.decBalanceStr, '$4,250.70');

    model.decActual = '10.00';
    model.decBudget = '5.00';

    assert.equal(model.decBalanceStr, '$-5.00');

    model.decActual = '4826.18';
    model.decBudget = '2449.83';

    assert.equal(model.decBalanceStr, '$-2,376.35');
  });

  test('it has the correct decBudgetStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      decBudget: 0,
    });

    assert.equal(model.decBudgetStr, '-');

    model.decBudget = '5.00';

    assert.equal(model.decBudgetStr, '$5.00');

    model.decBudget = '1234.56';

    assert.equal(model.decBudgetStr, '$1,234.56');

    model.decBudget = '-5.00';

    assert.equal(model.decBudgetStr, '$-5.00');

    model.decBudget = '-6543.21';

    assert.equal(model.decBudgetStr, '$-6,543.21');
  });

  test('it has the correct febActualStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      febActual: 0,
    });

    assert.equal(model.febActualStr, '-');

    model.febActual = '5.00';

    assert.equal(model.febActualStr, '$5.00');

    model.febActual = '1234.56';

    assert.equal(model.febActualStr, '$1,234.56');

    model.febActual = '-5.00';

    assert.equal(model.febActualStr, '$-5.00');

    model.febActual = '-6543.21';

    assert.equal(model.febActualStr, '$-6,543.21');
  });

  test('it has the correct febAlert', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      febActual: 1,
      febBudget: 1,
    });

    assert.notOk(model.febAlert);

    model.febActual = 2;

    assert.ok(model.febAlert);

    model.febBudget = 3;

    assert.notOk(model.febAlert);
  });

  test('it has the correct febBalanceStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      febActual: 1,
      febBudget: 1,
    });

    assert.equal(model.febBalanceStr, '-');

    model.febActual = '5.00';
    model.febBudget = '10.00';

    assert.equal(model.febBalanceStr, '$5.00');

    model.febActual = '4941.79';
    model.febBudget = '9192.49';

    assert.equal(model.febBalanceStr, '$4,250.70');

    model.febActual = '10.00';
    model.febBudget = '5.00';

    assert.equal(model.febBalanceStr, '$-5.00');

    model.febActual = '4826.18';
    model.febBudget = '2449.83';

    assert.equal(model.febBalanceStr, '$-2,376.35');
  });

  test('it has the correct febBudgetStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      febBudget: 0,
    });

    assert.equal(model.febBudgetStr, '-');

    model.febBudget = '5.00';

    assert.equal(model.febBudgetStr, '$5.00');

    model.febBudget = '1234.56';

    assert.equal(model.febBudgetStr, '$1,234.56');

    model.febBudget = '-5.00';

    assert.equal(model.febBudgetStr, '$-5.00');

    model.febBudget = '-6543.21';

    assert.equal(model.febBudgetStr, '$-6,543.21');
  });

  test('it has the correct marActualStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      marActual: 0,
    });

    assert.equal(model.marActualStr, '-');

    model.marActual = '5.00';

    assert.equal(model.marActualStr, '$5.00');

    model.marActual = '1234.56';

    assert.equal(model.marActualStr, '$1,234.56');

    model.marActual = '-5.00';

    assert.equal(model.marActualStr, '$-5.00');

    model.marActual = '-6543.21';

    assert.equal(model.marActualStr, '$-6,543.21');
  });

  test('it has the correct marAlert', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      marActual: 1,
      marBudget: 1,
    });

    assert.notOk(model.marAlert);

    model.marActual = 2;

    assert.ok(model.marAlert);

    model.marBudget = 3;

    assert.notOk(model.marAlert);
  });

  test('it has the correct marBalanceStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      marActual: 1,
      marBudget: 1,
    });

    assert.equal(model.marBalanceStr, '-');

    model.marActual = '5.00';
    model.marBudget = '10.00';

    assert.equal(model.marBalanceStr, '$5.00');

    model.marActual = '4941.79';
    model.marBudget = '9192.49';

    assert.equal(model.marBalanceStr, '$4,250.70');

    model.marActual = '10.00';
    model.marBudget = '5.00';

    assert.equal(model.marBalanceStr, '$-5.00');

    model.marActual = '4826.18';
    model.marBudget = '2449.83';

    assert.equal(model.marBalanceStr, '$-2,376.35');
  });

  test('it has the correct marBudgetStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      marBudget: 0,
    });

    assert.equal(model.marBudgetStr, '-');

    model.marBudget = '5.00';

    assert.equal(model.marBudgetStr, '$5.00');

    model.marBudget = '1234.56';

    assert.equal(model.marBudgetStr, '$1,234.56');

    model.marBudget = '-5.00';

    assert.equal(model.marBudgetStr, '$-5.00');

    model.marBudget = '-6543.21';

    assert.equal(model.marBudgetStr, '$-6,543.21');
  });

  test('it has the correct mayActualStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      mayActual: 0,
    });

    assert.equal(model.mayActualStr, '-');

    model.mayActual = '5.00';

    assert.equal(model.mayActualStr, '$5.00');

    model.mayActual = '1234.56';

    assert.equal(model.mayActualStr, '$1,234.56');

    model.mayActual = '-5.00';

    assert.equal(model.mayActualStr, '$-5.00');

    model.mayActual = '-6543.21';

    assert.equal(model.mayActualStr, '$-6,543.21');
  });

  test('it has the correct mayAlert', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      mayActual: 1,
      mayBudget: 1,
    });

    assert.notOk(model.mayAlert);

    model.mayActual = 2;

    assert.ok(model.mayAlert);

    model.mayBudget = 3;

    assert.notOk(model.mayAlert);
  });

  test('it has the correct mayBalanceStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      mayActual: 1,
      mayBudget: 1,
    });

    assert.equal(model.mayBalanceStr, '-');

    model.mayActual = '5.00';
    model.mayBudget = '10.00';

    assert.equal(model.mayBalanceStr, '$5.00');

    model.mayActual = '4941.79';
    model.mayBudget = '9192.49';

    assert.equal(model.mayBalanceStr, '$4,250.70');

    model.mayActual = '10.00';
    model.mayBudget = '5.00';

    assert.equal(model.mayBalanceStr, '$-5.00');

    model.mayActual = '4826.18';
    model.mayBudget = '2449.83';

    assert.equal(model.mayBalanceStr, '$-2,376.35');
  });

  test('it has the correct mayBudgetStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      mayBudget: 0,
    });

    assert.equal(model.mayBudgetStr, '-');

    model.mayBudget = '5.00';

    assert.equal(model.mayBudgetStr, '$5.00');

    model.mayBudget = '1234.56';

    assert.equal(model.mayBudgetStr, '$1,234.56');

    model.mayBudget = '-5.00';

    assert.equal(model.mayBudgetStr, '$-5.00');

    model.mayBudget = '-6543.21';

    assert.equal(model.mayBudgetStr, '$-6,543.21');
  });

  test('it has the correct janActualStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      janActual: 0,
    });

    assert.equal(model.janActualStr, '-');

    model.janActual = '5.00';

    assert.equal(model.janActualStr, '$5.00');

    model.janActual = '1234.56';

    assert.equal(model.janActualStr, '$1,234.56');

    model.janActual = '-5.00';

    assert.equal(model.janActualStr, '$-5.00');

    model.janActual = '-6543.21';

    assert.equal(model.janActualStr, '$-6,543.21');
  });

  test('it has the correct janAlert', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      janActual: 1,
      janBudget: 1,
    });

    assert.notOk(model.janAlert);

    model.janActual = 2;

    assert.ok(model.janAlert);

    model.janBudget = 3;

    assert.notOk(model.janAlert);
  });

  test('it has the correct janBalanceStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      janActual: 1,
      janBudget: 1,
    });

    assert.equal(model.janBalanceStr, '-');

    model.janActual = '5.00';
    model.janBudget = '10.00';

    assert.equal(model.janBalanceStr, '$5.00');

    model.janActual = '4941.79';
    model.janBudget = '9192.49';

    assert.equal(model.janBalanceStr, '$4,250.70');

    model.janActual = '10.00';
    model.janBudget = '5.00';

    assert.equal(model.janBalanceStr, '$-5.00');

    model.janActual = '4826.18';
    model.janBudget = '2449.83';

    assert.equal(model.janBalanceStr, '$-2,376.35');
  });

  test('it has the correct janBudgetStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      janBudget: 0,
    });

    assert.equal(model.janBudgetStr, '-');

    model.janBudget = '5.00';

    assert.equal(model.janBudgetStr, '$5.00');

    model.janBudget = '1234.56';

    assert.equal(model.janBudgetStr, '$1,234.56');

    model.janBudget = '-5.00';

    assert.equal(model.janBudgetStr, '$-5.00');

    model.janBudget = '-6543.21';

    assert.equal(model.janBudgetStr, '$-6,543.21');
  });

  test('it has the correct julActualStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      julActual: 0,
    });

    assert.equal(model.julActualStr, '-');

    model.julActual = '5.00';

    assert.equal(model.julActualStr, '$5.00');

    model.julActual = '1234.56';

    assert.equal(model.julActualStr, '$1,234.56');

    model.julActual = '-5.00';

    assert.equal(model.julActualStr, '$-5.00');

    model.julActual = '-6543.21';

    assert.equal(model.julActualStr, '$-6,543.21');
  });

  test('it has the correct julAlert', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      julActual: 1,
      julBudget: 1,
    });

    assert.notOk(model.julAlert);

    model.julActual = 2;

    assert.ok(model.julAlert);

    model.julBudget = 3;

    assert.notOk(model.julAlert);
  });

  test('it has the correct julBalanceStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      julActual: 1,
      julBudget: 1,
    });

    assert.equal(model.julBalanceStr, '-');

    model.julActual = '5.00';
    model.julBudget = '10.00';

    assert.equal(model.julBalanceStr, '$5.00');

    model.julActual = '4941.79';
    model.julBudget = '9192.49';

    assert.equal(model.julBalanceStr, '$4,250.70');

    model.julActual = '10.00';
    model.julBudget = '5.00';

    assert.equal(model.julBalanceStr, '$-5.00');

    model.julActual = '4826.18';
    model.julBudget = '2449.83';

    assert.equal(model.julBalanceStr, '$-2,376.35');
  });

  test('it has the correct julBudgetStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      julBudget: 0,
    });

    assert.equal(model.julBudgetStr, '-');

    model.julBudget = '5.00';

    assert.equal(model.julBudgetStr, '$5.00');

    model.julBudget = '1234.56';

    assert.equal(model.julBudgetStr, '$1,234.56');

    model.julBudget = '-5.00';

    assert.equal(model.julBudgetStr, '$-5.00');

    model.julBudget = '-6543.21';

    assert.equal(model.julBudgetStr, '$-6,543.21');
  });

  test('it has the correct junActualStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      junActual: 0,
    });

    assert.equal(model.junActualStr, '-');

    model.junActual = '5.00';

    assert.equal(model.junActualStr, '$5.00');

    model.junActual = '1234.56';

    assert.equal(model.junActualStr, '$1,234.56');

    model.junActual = '-5.00';

    assert.equal(model.junActualStr, '$-5.00');

    model.junActual = '-6543.21';

    assert.equal(model.junActualStr, '$-6,543.21');
  });

  test('it has the correct junAlert', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      junActual: 1,
      junBudget: 1,
    });

    assert.notOk(model.junAlert);

    model.junActual = 2;

    assert.ok(model.junAlert);

    model.junBudget = 3;

    assert.notOk(model.junAlert);
  });

  test('it has the correct junBalanceStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      junActual: 1,
      junBudget: 1,
    });

    assert.equal(model.junBalanceStr, '-');

    model.junActual = '5.00';
    model.junBudget = '10.00';

    assert.equal(model.junBalanceStr, '$5.00');

    model.junActual = '4941.79';
    model.junBudget = '9192.49';

    assert.equal(model.junBalanceStr, '$4,250.70');

    model.junActual = '10.00';
    model.junBudget = '5.00';

    assert.equal(model.junBalanceStr, '$-5.00');

    model.junActual = '4826.18';
    model.junBudget = '2449.83';

    assert.equal(model.junBalanceStr, '$-2,376.35');
  });

  test('it has the correct junBudgetStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      junBudget: 0,
    });

    assert.equal(model.junBudgetStr, '-');

    model.junBudget = '5.00';

    assert.equal(model.junBudgetStr, '$5.00');

    model.junBudget = '1234.56';

    assert.equal(model.junBudgetStr, '$1,234.56');

    model.junBudget = '-5.00';

    assert.equal(model.junBudgetStr, '$-5.00');

    model.junBudget = '-6543.21';

    assert.equal(model.junBudgetStr, '$-6,543.21');
  });

  test('it has the correct novActualStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      novActual: 0,
    });

    assert.equal(model.novActualStr, '-');

    model.novActual = '5.00';

    assert.equal(model.novActualStr, '$5.00');

    model.novActual = '1234.56';

    assert.equal(model.novActualStr, '$1,234.56');

    model.novActual = '-5.00';

    assert.equal(model.novActualStr, '$-5.00');

    model.novActual = '-6543.21';

    assert.equal(model.novActualStr, '$-6,543.21');
  });

  test('it has the correct novAlert', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      novActual: 1,
      novBudget: 1,
    });

    assert.notOk(model.novAlert);

    model.novActual = 2;

    assert.ok(model.novAlert);

    model.novBudget = 3;

    assert.notOk(model.novAlert);
  });

  test('it has the correct novBalanceStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      novActual: 1,
      novBudget: 1,
    });

    assert.equal(model.novBalanceStr, '-');

    model.novActual = '5.00';
    model.novBudget = '10.00';

    assert.equal(model.novBalanceStr, '$5.00');

    model.novActual = '4941.79';
    model.novBudget = '9192.49';

    assert.equal(model.novBalanceStr, '$4,250.70');

    model.novActual = '10.00';
    model.novBudget = '5.00';

    assert.equal(model.novBalanceStr, '$-5.00');

    model.novActual = '4826.18';
    model.novBudget = '2449.83';

    assert.equal(model.novBalanceStr, '$-2,376.35');
  });

  test('it has the correct novBudgetStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      novBudget: 0,
    });

    assert.equal(model.novBudgetStr, '-');

    model.novBudget = '5.00';

    assert.equal(model.novBudgetStr, '$5.00');

    model.novBudget = '1234.56';

    assert.equal(model.novBudgetStr, '$1,234.56');

    model.novBudget = '-5.00';

    assert.equal(model.novBudgetStr, '$-5.00');

    model.novBudget = '-6543.21';

    assert.equal(model.novBudgetStr, '$-6,543.21');
  });

  test('it has the correct octActualStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      octActual: 0,
    });

    assert.equal(model.octActualStr, '-');

    model.octActual = '5.00';

    assert.equal(model.octActualStr, '$5.00');

    model.octActual = '1234.56';

    assert.equal(model.octActualStr, '$1,234.56');

    model.octActual = '-5.00';

    assert.equal(model.octActualStr, '$-5.00');

    model.octActual = '-6543.21';

    assert.equal(model.octActualStr, '$-6,543.21');
  });

  test('it has the correct octAlert', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      octActual: 1,
      octBudget: 1,
    });

    assert.notOk(model.octAlert);

    model.octActual = 2;

    assert.ok(model.octAlert);

    model.octBudget = 3;

    assert.notOk(model.octAlert);
  });

  test('it has the correct octBalanceStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      octActual: 1,
      octBudget: 1,
    });

    assert.equal(model.octBalanceStr, '-');

    model.octActual = '5.00';
    model.octBudget = '10.00';

    assert.equal(model.octBalanceStr, '$5.00');

    model.octActual = '4941.79';
    model.octBudget = '9192.49';

    assert.equal(model.octBalanceStr, '$4,250.70');

    model.octActual = '10.00';
    model.octBudget = '5.00';

    assert.equal(model.octBalanceStr, '$-5.00');

    model.octActual = '4826.18';
    model.octBudget = '2449.83';

    assert.equal(model.octBalanceStr, '$-2,376.35');
  });

  test('it has the correct octBudgetStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      octBudget: 0,
    });

    assert.equal(model.octBudgetStr, '-');

    model.octBudget = '5.00';

    assert.equal(model.octBudgetStr, '$5.00');

    model.octBudget = '1234.56';

    assert.equal(model.octBudgetStr, '$1,234.56');

    model.octBudget = '-5.00';

    assert.equal(model.octBudgetStr, '$-5.00');

    model.octBudget = '-6543.21';

    assert.equal(model.octBudgetStr, '$-6,543.21');
  });

  test('it has the correct sepActualStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      sepActual: 0,
    });

    assert.equal(model.sepActualStr, '-');

    model.sepActual = '5.00';

    assert.equal(model.sepActualStr, '$5.00');

    model.sepActual = '1234.56';

    assert.equal(model.sepActualStr, '$1,234.56');

    model.sepActual = '-5.00';

    assert.equal(model.sepActualStr, '$-5.00');

    model.sepActual = '-6543.21';

    assert.equal(model.sepActualStr, '$-6,543.21');
  });

  test('it has the correct sepAlert', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      sepActual: 1,
      sepBudget: 1,
    });

    assert.notOk(model.sepAlert);

    model.sepActual = 2;

    assert.ok(model.sepAlert);

    model.sepBudget = 3;

    assert.notOk(model.sepAlert);
  });

  test('it has the correct sepBalanceStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      sepActual: 1,
      sepBudget: 1,
    });

    assert.equal(model.sepBalanceStr, '-');

    model.sepActual = '5.00';
    model.sepBudget = '10.00';

    assert.equal(model.sepBalanceStr, '$5.00');

    model.sepActual = '4941.79';
    model.sepBudget = '9192.49';

    assert.equal(model.sepBalanceStr, '$4,250.70');

    model.sepActual = '10.00';
    model.sepBudget = '5.00';

    assert.equal(model.sepBalanceStr, '$-5.00');

    model.sepActual = '4826.18';
    model.sepBudget = '2449.83';

    assert.equal(model.sepBalanceStr, '$-2,376.35');
  });

  test('it has the correct sepBudgetStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      sepBudget: 0,
    });

    assert.equal(model.sepBudgetStr, '-');

    model.sepBudget = '5.00';

    assert.equal(model.sepBudgetStr, '$5.00');

    model.sepBudget = '1234.56';

    assert.equal(model.sepBudgetStr, '$1,234.56');

    model.sepBudget = '-5.00';

    assert.equal(model.sepBudgetStr, '$-5.00');

    model.sepBudget = '-6543.21';

    assert.equal(model.sepBudgetStr, '$-6,543.21');
  });

  test('it has the correct totActual', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      aprActual: 0,
      augActual: 0,
      decActual: 0,
      febActual: 0,
      marActual: 0,
      mayActual: 0,
      janActual: 0,
      julActual: 0,
      junActual: 0,
      novActual: 0,
      octActual: 0,
      sepActual: 0,
    });

    assert.equal(model.totActual, 0);

    model.aprActual = '91.95';
    model.augActual = '10.53';
    model.decActual = '41.25';
    model.febActual = '43.15';
    model.marActual = '26.05';
    model.mayActual = '10.29';
    model.janActual = '74.70';
    model.julActual = '1.15';
    model.junActual = '86.41';
    model.novActual = '76.27';
    model.octActual = '90.64';
    model.sepActual = '59.51';

    assert.equal(model.totActual, 611.9);
  });

  test('it has the correct totActualStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      aprActual: 0,
      augActual: 0,
      decActual: 0,
      febActual: 0,
      marActual: 0,
      mayActual: 0,
      janActual: 0,
      julActual: 0,
      junActual: 0,
      novActual: 0,
      octActual: 0,
      sepActual: 0,
    });

    assert.equal(model.totActualStr, '-');

    model.aprActual = '2164.11';

    assert.equal(model.totActualStr, '$2,164.11');
  });

  test('it has the correct totAlert', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      aprActual: 1,
      aprBudget: 1,
    });

    assert.notOk(model.totAlert);

    model.aprActual = 2;

    assert.ok(model.totAlert);

    model.aprBudget = 3;

    assert.notOk(model.totAlert);
  });

  test('it has the correct totBalanceStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      aprActual: 1,
      aprBudget: 1,
    });

    assert.equal(model.totBalanceStr, '-');

    model.aprActual = '5.00';
    model.aprBudget = '10.00';

    assert.equal(model.totBalanceStr, '$5.00');

    model.aprActual = '4941.79';
    model.aprBudget = '9192.49';

    assert.equal(model.totBalanceStr, '$4,250.70');

    model.aprActual = '10.00';
    model.aprBudget = '5.00';

    assert.equal(model.totBalanceStr, '$-5.00');

    model.aprActual = '4826.18';
    model.aprBudget = '2449.83';

    assert.equal(model.totBalanceStr, '$-2,376.35');
  });

  test('it has the correct totBudget', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      aprBudget: 0,
      augBudget: 0,
      decBudget: 0,
      febBudget: 0,
      marBudget: 0,
      mayBudget: 0,
      janBudget: 0,
      julBudget: 0,
      junBudget: 0,
      novBudget: 0,
      octBudget: 0,
      sepBudget: 0,
    });

    assert.equal(model.totBudget, 0);

    model.aprBudget = '91.95';
    model.augBudget = '10.53';
    model.decBudget = '41.25';
    model.febBudget = '43.15';
    model.marBudget = '26.05';
    model.mayBudget = '10.29';
    model.janBudget = '74.70';
    model.julBudget = '1.15';
    model.junBudget = '86.41';
    model.novBudget = '76.27';
    model.octBudget = '90.64';
    model.sepBudget = '59.51';

    assert.equal(model.totBudget, 611.9);
  });

  test('it has the correct totBudgetStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {
      aprBudget: 0,
      augBudget: 0,
      decBudget: 0,
      febBudget: 0,
      marBudget: 0,
      mayBudget: 0,
      janBudget: 0,
      julBudget: 0,
      junBudget: 0,
      novBudget: 0,
      octBudget: 0,
      sepBudget: 0,
    });

    assert.equal(model.totBudgetStr, '-');

    model.aprBudget = '2164.11';

    assert.equal(model.totBudgetStr, '$2,164.11');
  });
});
