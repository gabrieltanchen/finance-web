import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | budgets/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:budgets/edit');
    assert.ok(route);
  });
});
