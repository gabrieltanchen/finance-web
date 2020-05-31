import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | household member', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('household-member', {});
    assert.ok(model);
  });

  test('it has the correct sumAmountStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const householdMember = store.createRecord('household-member', {
      sumAmount: 0,
    });

    assert.equal(householdMember.sumAmountStr, '-');

    householdMember.sumAmount = '5.00';

    assert.equal(householdMember.sumAmountStr, '$5.00');

    householdMember.sumAmount = '1234.56';

    assert.equal(householdMember.sumAmountStr, '$1,234.56');

    householdMember.sumAmount = '-5.00';

    assert.equal(householdMember.sumAmountStr, '$-5.00');

    householdMember.sumAmount = '-6543.21';

    assert.equal(householdMember.sumAmountStr, '$-6,543.21');
  });

  test('it has the correct sumIncomeStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const householdMember = store.createRecord('household-member', {
      sumIncome: 0,
    });

    assert.equal(householdMember.sumIncomeStr, '-');

    householdMember.sumIncome = '5.00';

    assert.equal(householdMember.sumIncomeStr, '$5.00');

    householdMember.sumIncome = '1234.56';

    assert.equal(householdMember.sumIncomeStr, '$1,234.56');

    householdMember.sumIncome = '-5.00';

    assert.equal(householdMember.sumIncomeStr, '$-5.00');

    householdMember.sumIncome = '-6543.21';

    assert.equal(householdMember.sumIncomeStr, '$-6,543.21');
  });

  test('it has the correct sumReimbursedStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const householdMember = store.createRecord('household-member', {
      sumReimbursed: 0,
    });

    assert.equal(householdMember.sumReimbursedStr, '-');

    householdMember.sumReimbursed = '5.00';

    assert.equal(householdMember.sumReimbursedStr, '$5.00');

    householdMember.sumReimbursed = '1234.56';

    assert.equal(householdMember.sumReimbursedStr, '$1,234.56');

    householdMember.sumReimbursed = '-5.00';

    assert.equal(householdMember.sumReimbursedStr, '$-5.00');

    householdMember.sumReimbursed = '-6543.21';

    assert.equal(householdMember.sumReimbursedStr, '$-6,543.21');
  });

  test('it has the correct sumTotalStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const householdMember = store.createRecord('household-member', {
      sumAmount: 0,
      sumReimbursed: 0,
    });

    assert.equal(householdMember.sumTotalStr, '-');

    householdMember.sumAmount = '10.00';
    householdMember.sumReimbursed = '5.00';

    assert.equal(householdMember.sumTotalStr, '$5.00');

    householdMember.sumAmount = '5.00';
    householdMember.sumReimbursed = '10.00';

    assert.equal(householdMember.sumTotalStr, '$-5.00');

    householdMember.sumReimbursed = '5.00';

    assert.equal(householdMember.sumTotalStr, '-');

    householdMember.sumAmount = '12345.67';
    householdMember.sumReimbursed = '5.00';

    assert.equal(householdMember.sumTotalStr, '$12,340.67');
  });
});
