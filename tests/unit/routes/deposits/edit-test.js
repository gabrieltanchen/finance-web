import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | deposits/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:deposits/edit');
    assert.ok(route);
  });
});
