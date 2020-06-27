import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | income/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:income/index');
    assert.ok(controller);
  });
});
