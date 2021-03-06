import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Transform | dollar', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const transform = this.owner.lookup('transform:dollars');
    assert.ok(transform);
  });

  test('it correctly serializes data', function(assert) {
    const transform = this.owner.lookup('transform:dollars');

    assert.equal(transform.serialize('0.00'), 0);
    assert.equal(transform.serialize('5.00'), 500);
    assert.equal(transform.serialize('1234.56'), 123456);
    assert.equal(transform.serialize('-5.00'), -500);
    assert.equal(transform.serialize('-6543.21'), -654321);
    assert.equal(transform.serialize('16.99'), 1699);
  });

  test('it correctly deserializes data', function(assert) {
    const transform = this.owner.lookup('transform:dollars');

    assert.equal(transform.deserialize('0'), '0.00');
    assert.equal(transform.deserialize('500'), '5.00');
    assert.equal(transform.deserialize('123456'), '1234.56');
    assert.equal(transform.deserialize('-500'), '-5.00');
    assert.equal(transform.deserialize('-654321'), '-6543.21');
    assert.equal(transform.deserialize('1699'), '16.99');
  });
});
