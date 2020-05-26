import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | household-members/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:household-members/edit');
    assert.ok(controller);
  });
});
