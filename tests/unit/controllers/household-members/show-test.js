import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | household-members/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:household-members/show');
    assert.ok(controller);
  });
});
