import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | subcategory', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory', {});
    assert.ok(model);
  });

  test('it has the correct sumAmountStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const subcategory = store.createRecord('subcategory', {
      sumAmount: 0,
    });

    assert.equal(subcategory.sumAmountStr, '-');

    subcategory.sumAmount = '5.00';

    assert.equal(subcategory.sumAmountStr, '$5.00');

    subcategory.sumAmount = '1234.56';

    assert.equal(subcategory.sumAmountStr, '$1,234.56');

    subcategory.sumAmount = '-5.00';

    assert.equal(subcategory.sumAmountStr, '$-5.00');

    subcategory.sumAmount = '-6543.21';

    assert.equal(subcategory.sumAmountStr, '$-6,543.21');
  });

  test('it has the correct sumReimbursedStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const subcategory = store.createRecord('subcategory', {
      sumReimbursed: 0,
    });

    assert.equal(subcategory.sumReimbursedStr, '-');

    subcategory.sumReimbursed = '5.00';

    assert.equal(subcategory.sumReimbursedStr, '$5.00');

    subcategory.sumReimbursed = '1234.56';

    assert.equal(subcategory.sumReimbursedStr, '$1,234.56');

    subcategory.sumReimbursed = '-5.00';

    assert.equal(subcategory.sumReimbursedStr, '$-5.00');

    subcategory.sumReimbursed = '-6543.21';

    assert.equal(subcategory.sumReimbursedStr, '$-6,543.21');
  });

  test('it has the correct sumTotalStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const subcategory = store.createRecord('subcategory', {
      sumAmount: 0,
      sumReimbursed: 0,
    });

    assert.equal(subcategory.sumTotalStr, '-');

    subcategory.sumAmount = '10.00';
    subcategory.sumReimbursed = '5.00';

    assert.equal(subcategory.sumTotalStr, '$5.00');

    subcategory.sumAmount = '5.00';
    subcategory.sumReimbursed = '10.00';

    assert.equal(subcategory.sumTotalStr, '$-5.00');

    subcategory.sumReimbursed = '5.00';

    assert.equal(subcategory.sumTotalStr, '-');

    subcategory.sumAmount = '12345.67';
    subcategory.sumReimbursed = '5.00';

    assert.equal(subcategory.sumTotalStr, '$12,340.67');
  });
});
