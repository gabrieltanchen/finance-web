import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | budgets/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:budgets/show');
    assert.ok(route);
  });
});
