import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | expenses/attachments/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:expenses/attachments/new');
    assert.ok(route);
  });
});
