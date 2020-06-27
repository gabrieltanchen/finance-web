import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | household-members/settings', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:household-members/settings');
    assert.ok(route);
  });
});
