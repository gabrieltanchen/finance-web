import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | loan-payments/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:loan-payments/show');
    assert.ok(route);
  });
});
