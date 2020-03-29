import { setupTest } from 'ember-qunit';
import { get, set } from '@ember/object';
import { module, test } from 'qunit';

module('Unit | Model | budget', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget', {});
    assert.ok(model);
  });

  test('should have correct budget_str when budget=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget', {});
    set(model, 'budget', 0);
    assert.equal(get(model, 'budget_str'), '-');
  });

  test('should have correct budget_str when budget=5', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget', {});
    set(model, 'budget', 5);
    assert.equal(get(model, 'budget_str'), '$5.00');
  });

  test('should have correct budget_str when budget=123.45', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget', {});
    set(model, 'budget', 123.45);
    assert.equal(get(model, 'budget_str'), '$123.45');
  });
});
