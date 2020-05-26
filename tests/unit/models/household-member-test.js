import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | household member', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('household-member', {});
    assert.ok(model);
  });

  test('it has the correct sumAmount', function(assert) {
    const store = this.owner.lookup('service:store');
    const householdMember = store.createRecord('household-member', {
      sumAmountCents: 0,
    });

    assert.equal(householdMember.sumAmount, '-');

    householdMember.sumAmountCents = 500;

    assert.equal(householdMember.sumAmount, '$5.00');

    householdMember.sumAmountCents = 123456;

    assert.equal(householdMember.sumAmount, '$1,234.56');

    householdMember.sumAmountCents = -500;

    assert.equal(householdMember.sumAmount, '$-5.00');

    householdMember.sumAmountCents = -654321;

    assert.equal(householdMember.sumAmount, '$-6,543.21');
  });

  test('it has the correct sumReimbursed', function(assert) {
    const store = this.owner.lookup('service:store');
    const householdMember = store.createRecord('household-member', {
      sumReimbursedCents: 0,
    });

    assert.equal(householdMember.sumReimbursed, '-');

    householdMember.sumReimbursedCents = 500;

    assert.equal(householdMember.sumReimbursed, '$5.00');

    householdMember.sumReimbursedCents = 123456;

    assert.equal(householdMember.sumReimbursed, '$1,234.56');

    householdMember.sumReimbursedCents = -500;

    assert.equal(householdMember.sumReimbursed, '$-5.00');

    householdMember.sumReimbursedCents = -654321;

    assert.equal(householdMember.sumReimbursed, '$-6,543.21');
  });

  test('it has the correct sumTotal', function(assert) {
    const store = this.owner.lookup('service:store');
    const householdMember = store.createRecord('household-member', {
      sumAmountCents: 0,
      sumReimbursedCents: 0,
    });

    assert.equal(householdMember.sumTotal, '-');

    householdMember.sumAmountCents = 1000;
    householdMember.sumReimbursedCents = 500;

    assert.equal(householdMember.sumTotal, '$5.00');

    householdMember.sumAmountCents = 500;
    householdMember.sumReimbursedCents = 1000;

    assert.equal(householdMember.sumTotal, '$-5.00');

    householdMember.sumReimbursedCents = 500;

    assert.equal(householdMember.sumTotal, '-');

    householdMember.sumAmountCents = 1234567;
    householdMember.sumReimbursedCents = 500;
    assert.equal(householdMember.sumTotal, '$12,340.67');
  });
});
