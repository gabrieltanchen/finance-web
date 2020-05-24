import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | vendor', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('vendor', {});
    assert.ok(model);
  });

  test('it has the correct sumAmount', function(assert) {
    const store = this.owner.lookup('service:store');
    const vendor = store.createRecord('vendor', {
      sumAmountCents: 0,
    });

    assert.equal(vendor.sumAmount, '-');

    vendor.sumAmountCents = 500;

    assert.equal(vendor.sumAmount, '$5.00');

    vendor.sumAmountCents = 123456;

    assert.equal(vendor.sumAmount, '$1,234.56');

    vendor.sumAmountCents = -500;

    assert.equal(vendor.sumAmount, '$-5.00');

    vendor.sumAmountCents = -654321;

    assert.equal(vendor.sumAmount, '$-6,543.21');
  });

  test('it has the correct sumReimbursed', function(assert) {
    const store = this.owner.lookup('service:store');
    const vendor = store.createRecord('vendor', {
      sumReimbursedCents: 0,
    });

    assert.equal(vendor.sumReimbursed, '-');

    vendor.sumReimbursedCents = 500;

    assert.equal(vendor.sumReimbursed, '$5.00');

    vendor.sumReimbursedCents = 123456;

    assert.equal(vendor.sumReimbursed, '$1,234.56');

    vendor.sumReimbursedCents = -500;

    assert.equal(vendor.sumReimbursed, '$-5.00');

    vendor.sumReimbursedCents = -654321;

    assert.equal(vendor.sumReimbursed, '$-6,543.21');
  });

  test('it has the correct sumTotal', function(assert) {
    const store = this.owner.lookup('service:store');
    const vendor = store.createRecord('vendor', {
      sumAmountCents: 0,
      sumReimbursedCents: 0,
    });

    assert.equal(vendor.sumTotal, '-');

    vendor.sumAmountCents = 1000;
    vendor.sumReimbursedCents = 500;

    assert.equal(vendor.sumTotal, '$5.00');

    vendor.sumAmountCents = 500;
    vendor.sumReimbursedCents = 1000;

    assert.equal(vendor.sumTotal, '$-5.00');

    vendor.sumReimbursedCents = 500;

    assert.equal(vendor.sumTotal, '-');

    vendor.sumAmountCents = 1234567;
    vendor.sumReimbursedCents = 500;

    assert.equal(vendor.sumTotal, '$12,340.67');
  });
});
