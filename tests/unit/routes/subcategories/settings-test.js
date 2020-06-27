import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | subcategories/settings', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:subcategories/settings');
    assert.ok(route);
  });
});
