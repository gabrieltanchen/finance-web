import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | loan-payments/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:loan-payments/show');
    assert.ok(controller);
  });
});
