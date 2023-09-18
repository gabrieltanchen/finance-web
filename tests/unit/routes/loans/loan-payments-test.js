import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | /loans/loan-payments', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:loans/loan-payments');
    assert.ok(route);
  });
});
