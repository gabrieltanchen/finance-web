import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | funds/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:funds/show');
    assert.ok(route);
  });
});
