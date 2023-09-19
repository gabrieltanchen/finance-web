import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | loans/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:loans/new');
    assert.ok(route);
  });
});
