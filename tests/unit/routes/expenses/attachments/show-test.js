import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | expenses/attachments/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:expenses/attachments/show');
    assert.ok(route);
  });
});
