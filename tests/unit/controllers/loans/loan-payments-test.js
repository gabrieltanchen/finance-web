import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | loans/loan-payments', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:loans/loan-payments');
    assert.ok(controller);
  });
});
