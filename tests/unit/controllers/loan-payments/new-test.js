import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | loan-payments/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:loan-payments/new');
    assert.ok(controller);
  });
});
