import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | deposits/settings', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:deposits/settings');
    assert.ok(controller);
  });
});
