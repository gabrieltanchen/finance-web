import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | vendor', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('vendor', {});
    assert.ok(model);
  });

  test('it has the correct sumAmountStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const vendor = store.createRecord('vendor', {
      sumAmount: 0,
    });

    assert.equal(vendor.sumAmountStr, '-');

    vendor.sumAmount = '5.00';

    assert.equal(vendor.sumAmountStr, '$5.00');

    vendor.sumAmount = '1234.56';

    assert.equal(vendor.sumAmountStr, '$1,234.56');

    vendor.sumAmount = '-5.00';

    assert.equal(vendor.sumAmountStr, '$-5.00');

    vendor.sumAmount = '-6543.21';

    assert.equal(vendor.sumAmountStr, '$-6,543.21');
  });

  test('it has the correct sumReimbursedStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const vendor = store.createRecord('vendor', {
      sumReimbursed: 0,
    });

    assert.equal(vendor.sumReimbursedStr, '-');

    vendor.sumReimbursed = '5.00';

    assert.equal(vendor.sumReimbursedStr, '$5.00');

    vendor.sumReimbursed = '1234.56';

    assert.equal(vendor.sumReimbursedStr, '$1,234.56');

    vendor.sumReimbursed = '-5.00';

    assert.equal(vendor.sumReimbursedStr, '$-5.00');

    vendor.sumReimbursed = '-6543.21';

    assert.equal(vendor.sumReimbursedStr, '$-6,543.21');
  });

  test('it has the correct sumTotalStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const vendor = store.createRecord('vendor', {
      sumAmount: 0,
      sumReimbursed: 0,
    });

    assert.equal(vendor.sumTotalStr, '-');

    vendor.sumAmount = '10.00';
    vendor.sumReimbursed = '5.00';

    assert.equal(vendor.sumTotalStr, '$5.00');

    vendor.sumAmount = '5.00';
    vendor.sumReimbursed = '10.00';

    assert.equal(vendor.sumTotalStr, '$-5.00');

    vendor.sumReimbursed = '5.00';

    assert.equal(vendor.sumTotalStr, '-');

    vendor.sumAmount = '12345.67';
    vendor.sumReimbursed = '5.00';

    assert.equal(vendor.sumTotalStr, '$12,340.67');
  });
});
