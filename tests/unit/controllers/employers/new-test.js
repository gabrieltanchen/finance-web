import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | employers/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:employers/new');
    assert.ok(controller);
  });
});
