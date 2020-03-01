import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | monthly report', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('monthly-report', {});
    assert.ok(model);
  });

  test('should have correct actual_str when actual_cents=0');

  test('should have correct actual_str when actual_cents=500');

  test('should have correct actual_str when actual_cents=12345');

  test('should have budget_actual_diff_alert=false when actual_cents < budget_cents');

  test('should have budget_actual_diff_alert=false when actual_cents = budget_cents');

  test('should have budget_actual_diff_alert=true when actual_cents > budget_cents');

  test('should have correct budget_actual_diff_str when actual_cents=0 and budget_cents=0');

  test('should have correct budget_actual_diff_str when actual_cents = 500 and budget_cents=1000');

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
