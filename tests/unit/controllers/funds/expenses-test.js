import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | funds/expenses', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:funds/expenses');
    assert.ok(controller);
  });
});
