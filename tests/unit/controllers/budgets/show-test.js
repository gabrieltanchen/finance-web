import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | budgets/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:budgets/show');
    assert.ok(controller);
  });
});
