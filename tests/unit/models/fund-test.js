import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | fund', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('fund', {});
    assert.ok(model);
  });

  test('it has the correct balanceStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const fund = store.createRecord('fund', {
      balance: 0,
    });

    assert.equal(fund.balanceStr, '-');

    fund.balance = '5.00';

    assert.equal(fund.balanceStr, '$5.00');

    fund.balance = '1234.56';

    assert.equal(fund.balanceStr, '$1,234.56');

    fund.balance = '-5.00';

    assert.equal(fund.balanceStr, '$-5.00');

    fund.balance = '-6543.21';

    assert.equal(fund.balanceStr, '$-6,543.21');
  });
});
