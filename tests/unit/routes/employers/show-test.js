import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | employers/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:employers/show');
    assert.ok(route);
  });
});
