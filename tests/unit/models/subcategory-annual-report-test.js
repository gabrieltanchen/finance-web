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
});
