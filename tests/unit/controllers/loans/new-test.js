import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | loans/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:loans/new');
    assert.ok(controller);
  });
});
