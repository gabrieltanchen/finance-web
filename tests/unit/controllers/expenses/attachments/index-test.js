import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | expenses/attachments/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:expenses/attachments/index');
    assert.ok(controller);
  });
});
