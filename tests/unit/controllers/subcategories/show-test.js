import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | subcategories/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:subcategories/show');
    assert.ok(controller);
  });
});
