import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | employers/settings', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:employers/settings');
    assert.ok(route);
  });
});
