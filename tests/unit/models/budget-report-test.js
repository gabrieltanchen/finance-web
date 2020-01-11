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

  test('should have correct actual_str when actual=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget-report', {});
    set(model, 'actual', 0);
    assert.equal(get(model, 'actual_str'), '-');
  });

  test('should have correct actual_str when actual=5', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget-report', {});
    set(model, 'actual', 5);
    assert.equal(get(model, 'actual_str'), '$5.00');
  });

  test('should have correct actual_str when actual=123.45', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget-report', {});
    set(model, 'actual', 123.45);
    assert.equal(get(model, 'actual_str'), '$123.45');
  });

  test('should have correct budget_str when budget=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget-report', {});
    set(model, 'budget', 0);
    assert.equal(get(model, 'budget_str'), '-');
  });

  test('should have correct budget_str when budget=5', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget-report', {});
    set(model, 'budget', 5);
    assert.equal(get(model, 'budget_str'), '$5.00');
  });

  test('should have correct budget_str when budget=123.45', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget-report', {});
    set(model, 'budget', 123.45);
    assert.equal(get(model, 'budget_str'), '$123.45');
  });

  test('should have correct difference when actual=0 and budget=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget-report', {});
    set(model, 'actual', 0);
    set(model, 'budget', 0);
    assert.equal(get(model, 'difference'), 0);
  });

  test('should have correct difference when actual=5 and budget=10', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget-report', {});
    set(model, 'actual', 5);
    set(model, 'budget', 10);
    assert.equal(get(model, 'difference'), 5);
  });

  test('should have correct difference when actual=10 and budget=5', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget-report', {});
    set(model, 'actual', 10);
    set(model, 'budget', 5);
    assert.equal(get(model, 'difference'), -5);
  });

  test('should have correct difference when actual=115.6 and budget=335.34', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget-report', {});
    set(model, 'actual', 115.6);
    set(model, 'budget', 335.34);
    assert.equal(get(model, 'difference'), 219.74);
  });

  test('should have correct difference_str when difference=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget-report', {});
    set(model, 'actual', 0);
    set(model, 'budget', 0);
    assert.equal(get(model, 'difference_str'), '-');
  });

  test('should have correct difference_str when difference=5', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget-report', {});
    set(model, 'actual', 0);
    set(model, 'budget', 5);
    assert.equal(get(model, 'difference_str'), '$5.00');
  });

  test('should have correct difference_str when difference=-5', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget-report', {});
    set(model, 'actual', 5);
    set(model, 'budget', 0);
    assert.equal(get(model, 'difference_str'), '$-5.00');
  });

  test('should have correct difference_str when difference=123.45', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget-report', {});
    set(model, 'actual', 0);
    set(model, 'budget', 123.45);
    assert.equal(get(model, 'difference_str'), '$123.45');
  });

  test('should have correct difference_str when difference=-123.45', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget-report', {});
    set(model, 'actual', 123.45);
    set(model, 'budget', 0);
    assert.equal(get(model, 'difference_str'), '$-123.45');
  });
});
