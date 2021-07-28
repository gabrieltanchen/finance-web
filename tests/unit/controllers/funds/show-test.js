import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | funds/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:funds/show');
    assert.ok(controller);
  });
});
