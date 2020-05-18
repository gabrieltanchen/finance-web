import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | application', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const serializer = store.serializerFor('login-user');

    assert.ok(serializer);
  });

  // test('it serializes records', function(assert) {
  //   let store = this.owner.lookup('service:store');
  //   let record = store.createRecord('application', {});
  //
  //   let serializedRecord = record.serialize();
  //
  //   assert.ok(serializedRecord);
  // });
});
