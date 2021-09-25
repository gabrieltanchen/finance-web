import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | users/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:users/show');
    assert.ok(route);
  });
});
