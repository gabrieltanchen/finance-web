import { setupTest } from 'ember-qunit';
import { get, set } from '@ember/object';
import { module, test } from 'qunit';

module('Unit | Model | monthly report', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('monthly-report', {});
    assert.ok(model);
  });

  test('should have correct actual_str when actual_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('monthly-report', {});
    set(model, 'actual_cents', 0);

    assert.equal(get(model, 'actual_str'), '-');
  });

  test('should have correct actual_str when actual_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('monthly-report', {});
    set(model, 'actual_cents', 500);

    assert.equal(get(model, 'actual_str'), '$5.00');
  });

  test('should have correct actual_str when actual_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('monthly-report', {});
    set(model, 'actual_cents', 12345);

    assert.equal(get(model, 'actual-str'), '$123.45');
  });

  test('should have budget_actual_diff_alert=false when actual_cents < budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('monthly-report', {});
    set(model, 'actual_cents', 1);
    set(model, 'budget_cents', 2);

    assert.equal(get(model, 'budget_actual_diff_alert'), false);
  });

  test('should have budget_actual_diff_alert=false when actual_cents = budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('monthly-report', {});
    set(model, 'actual_cents', 1);
    set(model, 'budget_cents', 1);

    assert.equal(get(model, 'budget_actual_diff_alert'), false);
  });

  test('should have budget_actual_diff_alert=true when actual_cents > budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('monthly-report', {});
    set(model, 'actual_cents', 2);
    set(model, 'budget_cents', 1);

    assert.equal(get(model, 'budget_actual_diff_alert'), true);
  });

  test('should have correct budget_actual_diff_str when actual_cents=0 and budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('monthly-report', {});
    set(model, 'actual_cents', 0);
    set(model, 'budget_cents', 0);

    assert.equal(get(model, 'budget_actual_diff_str'), '-');
  });

  test('should have correct budget_actual_diff_str when actual_cents = 500 and budget_cents=1000', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('monthly-report', {});
    set(model, 'actual_cents', 500);
    set(model, 'budget_cents', 1000);

    assert.equal(get(model, 'budget_actual_diff_str'), '$5.00');
  });

  test('should have correct budget_actual_diff_str when actual_cents=1000 and budget_cents=500');

  test('should have correct budget_actual_diff_str when actual_cents=11560 and budget_cents=33534');

  test('should have correct budget_str when budget_cents=0');

  test('should have correct budget_str when budget_cents=500');

  test('should have correct budget_str when budget_cents=12345');

  test('should have income_actual_diff_alert=false when actual_cents < income_cents');

  test('should have income_actual_diff_alert=false when actual_cents = income_cents');

  test('should have income_actual_diff_alert=true when actual_cents > income_cents');

  test('should have correct income_actual_diff_str when actual_cents=0 and income_cents=0');

  test('should have correct income_actual_diff_str when actual_cents=500 and income_cents=1000');

  test('should have correct income_actual_diff_str when actual_cents=1000 and income_cents=500');

  test('should have correct income_actual_diff_str when actualZ_cents=11560 and income_cents=33534');

  test('should have income_budget_diff_alert=false when budget_cents < income_cents');

  test('should have income_budget_diff_alert=false when budget_cents = income_cents');

  test('should have income_budget_diff_alert=true when budget_cents > income_cents');

  test('should have correct income_budget_diff_str when budget_cents=0 and income_cents=0');

  test('should have correct income_budget_diff_str when budget_cents=500 and income_cents=1000');

  test('should have correct income_budget_diff_str when budget_cents=1000 and income_cents=500');

  test('should have correct income_budget_diff_str when budget_cents=11560 and income_cents=33534');

  test('should have correct income_str when income_cents=0');

  test('should have correct income_str when income_cents=500');

  test('should have correct income_str when income_cents=12345');
});
