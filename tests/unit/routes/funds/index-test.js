import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | funds/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:funds/index');
    assert.ok(route);
  });
});
