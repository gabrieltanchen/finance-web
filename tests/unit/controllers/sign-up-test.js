import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | sign-up', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:sign-up');
    assert.ok(controller);
  });
});
