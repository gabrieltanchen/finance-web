import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | expenses/settings', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:expenses/settings');
    assert.ok(route);
  });
});
