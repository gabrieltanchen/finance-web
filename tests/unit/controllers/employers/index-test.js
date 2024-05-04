import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | employers/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:employers/index');
    assert.ok(controller);
  });
});
