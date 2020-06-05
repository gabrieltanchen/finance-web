import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | categories/settings', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:categories/settings');
    assert.ok(route);
  });
});
