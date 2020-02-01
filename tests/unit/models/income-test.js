import { setupTest } from 'ember-qunit';
import { get, set } from '@ember/object';
import { module, test } from 'qunit';

module('Unit | Model | income', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('income', {});
    assert.ok(model);
  });

  test('should have correct amount_str when amount=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('income', {});
    set(model, 'amount', 0);
    assert.equal(get(model, 'amount_str'), '-');
  });

  test('should have correct amount_str when amount=5', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('income', {});
    set(model, 'amount', 5);
    assert.equal(get(model, 'amount_str'), '$5.00');
  });

  test('should have correct amount_str when amount=123.45', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('income', {});
    set(model, 'amount', 123.45);
    assert.equal(get(model, 'amount_str'), '$123.45');
  });

  test('should update amount_cents after amount was changed to 0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('income', {});
    set(model, 'amount', 0);
    assert.equal(get(model, 'amount_cents'), 0);
  });

  test('should update amount_cents after amount was changed to 123.45', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('income', {});
    set(model, 'amount', 123.45);
    assert.equal(get(model, 'amount_cents'), 12345);
  });

  test('should update amount after amount_cents was changed to 0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('income', {});
    set(model, 'amount_cents', 0);
    assert.equal(get(model, 'amount'), 0);
  });

  test('should update amount after amount_cents was changed to 12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('income', {});
    set(model, 'amount_cents', 12345);
    assert.equal(get(model, 'amount'), 123.45);
  });
});
