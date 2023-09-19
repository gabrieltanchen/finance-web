import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | loans/settings', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:loans/settings');
    assert.ok(route);
  });
});
