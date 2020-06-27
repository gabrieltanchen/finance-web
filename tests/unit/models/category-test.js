import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | category', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('category', {});
    assert.ok(model);
  });

  test('it has the correct sumAmountStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const category = store.createRecord('category', {
      sumAmount: 0,
    });

    assert.equal(category.sumAmountStr, '-');

    category.sumAmount = '5.00';

    assert.equal(category.sumAmountStr, '$5.00');

    category.sumAmount = '1234.56';

    assert.equal(category.sumAmountStr, '$1,234.56');

    category.sumAmount = '-5.00';

    assert.equal(category.sumAmountStr, '$-5.00');

    category.sumAmount = '-6543.21';

    assert.equal(category.sumAmountStr, '$-6,543.21');
  });

  test('it has the correct sumReimbursedStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const category = store.createRecord('category', {
      sumReimbursed: 0,
    });

    assert.equal(category.sumReimbursedStr, '-');

    category.sumReimbursed = '5.00';

    assert.equal(category.sumReimbursedStr, '$5.00');

    category.sumReimbursed = '1234.56';

    assert.equal(category.sumReimbursedStr, '$1,234.56');

    category.sumReimbursed = '-5.00';

    assert.equal(category.sumReimbursedStr, '$-5.00');

    category.sumReimbursed = '-6543.21';

    assert.equal(category.sumReimbursedStr, '$-6,543.21');
  });

  test('it has the correct sumTotalStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const category = store.createRecord('category', {
      sumAmount: 0,
      sumReimbursed: 0,
    });

    assert.equal(category.sumTotalStr, '-');

    category.sumAmount = '10.00';
    category.sumReimbursed = '5.00';

    assert.equal(category.sumTotalStr, '$5.00');

    category.sumAmount = '5.00';
    category.sumReimbursed = '10.00';

    assert.equal(category.sumTotalStr, '$-5.00');

    category.sumReimbursed = '5.00';

    assert.equal(category.sumTotalStr, '-');

    category.sumAmount = '12345.67';
    category.sumReimbursed = '5.00';

    assert.equal(category.sumTotalStr, '$12,340.67');
  });
});
