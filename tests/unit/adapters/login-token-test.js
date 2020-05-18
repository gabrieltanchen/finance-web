import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | login token', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const adapter = this.owner.lookup('adapter:login-token');
    assert.ok(adapter);
  });
});
