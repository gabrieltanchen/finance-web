import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | categories/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:categories/new');
    assert.ok(controller);
  });
});
