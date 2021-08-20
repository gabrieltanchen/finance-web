import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | deposits/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:deposits/show');
    assert.ok(controller);
  });
});
