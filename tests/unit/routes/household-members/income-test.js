import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | household-members/income', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:household-members/income');
    assert.ok(route);
  });
});
