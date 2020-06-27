import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | expenses/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:expenses/new');
    assert.ok(route);
  });
});
