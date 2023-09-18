import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | loan-payments/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:loan-payments/edit');
    assert.ok(route);
  });
});
