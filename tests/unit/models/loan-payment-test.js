import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | loan payment', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('loan-payment', {});
    assert.ok(model);
  });

  test('it has the correct interestAmountStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const loanPayment = store.createRecord('loan-payment', {
      interestAmount: 0,
    });

    assert.equal(loanPayment.interestAmountStr, '-');

    loanPayment.interestAmount = '5.00';

    assert.equal(loanPayment.interestAmountStr, '$5.00');

    loanPayment.interestAmount = '1234.56';

    assert.equal(loanPayment.interestAmountStr, '$1,234.56');

    loanPayment.interestAmount = '-5.00';

    assert.equal(loanPayment.interestAmountStr, '$-5.00');

    loanPayment.interestAmount = '-6543.21';

    assert.equal(loanPayment.interestAmountStr, '$-6,543.21');
  });

  test('it has the correct principalAmountStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const loanPayment = store.createRecord('loan-payment', {
      principalAmount: 0,
    });

    assert.equal(loanPayment.principalAmountStr, '-');

    loanPayment.principalAmount = '5.00';

    assert.equal(loanPayment.principalAmountStr, '$5.00');

    loanPayment.principalAmount = '1234.56';

    assert.equal(loanPayment.principalAmountStr, '$1,234.56');

    loanPayment.principalAmount = '-5.00';

    assert.equal(loanPayment.principalAmountStr, '$-5.00');

    loanPayment.principalAmount = '-6543.21';

    assert.equal(loanPayment.principalAmountStr, '$-6,543.21');
  });

  test('it has the correct totalAmountStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const loanPayment = store.createRecord('loan-payment', {
      interestAmount: 0,
      principalAmount: 0,
    });

    assert.equal(loanPayment.totalAmountStr, '-');

    loanPayment.principalAmount = '2.50';
    loanPayment.interestAmount = '2.50';

    assert.equal(loanPayment.totalAmountStr, '$5.00');

    loanPayment.principalAmount = '617.28';
    loanPayment.interestAmount = '617.28';

    assert.equal(loanPayment.totalAmountStr, '$1,234.56');

    loanPayment.principalAmount = '-2.50';
    loanPayment.interestAmount = '-2.50';

    assert.equal(loanPayment.totalAmountStr, '$-5.00');

    loanPayment.principalAmount = '-3271.61';
    loanPayment.interestAmount = '-3271.60';

    assert.equal(loanPayment.totalAmountStr, '$-6,543.21');
  });
});
