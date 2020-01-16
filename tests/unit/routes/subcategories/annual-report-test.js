import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | subcategories/annual-report', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:subcategories/annual-report');
    assert.ok(route);
  });
});
