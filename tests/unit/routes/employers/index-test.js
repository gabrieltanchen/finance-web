import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | employers/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:employers/index');
    assert.ok(route);
  });
});
