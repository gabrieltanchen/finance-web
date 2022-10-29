import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | expenses/attachments/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:expenses/attachments/edit');
    assert.ok(route);
  });
});
