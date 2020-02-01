import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | income/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:income/edit');
    assert.ok(route);
  });
});
