import { setupTest } from 'ember-qunit';
import { get, set } from '@ember/object';
import { module, test } from 'qunit';

module('Unit | Model | budget report', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget-report', {});
    assert.ok(model);
  });

  test('should have alertState=false when actual_cents < budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget-report', {});
    set(model, 'actual_cents', 1);
    set(model, 'budget_cents', 2);

    assert.equal(get(model, 'alertState'), false);
  });

  test('should have alertState=false when actual_cents == budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget-report', {});
    set(model, 'actual_cents', 1);
    set(model, 'budget_cents', 1);

    assert.equal(get(model, 'alertState'), false);
  });

  test('should have alertState=true when actual_cents > budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget-report', {});
    set(model, 'actual_cents', 2);
    set(model, 'budget_cents', 1);

    assert.equal(get(model, 'alertState'), true);
  });
});
