import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | loan-payments/settings', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:loan-payments/settings');
    assert.ok(controller);
  });
});
