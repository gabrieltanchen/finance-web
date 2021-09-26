import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | sign-up', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:sign-up');
    assert.ok(route);
  });
});
