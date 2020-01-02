import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | categories/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:categories/edit');
    assert.ok(route);
  });
});
