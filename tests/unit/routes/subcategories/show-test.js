import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | subcategories/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:subcategories/show');
    assert.ok(route);
  });
});
