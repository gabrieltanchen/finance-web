import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | dashboard', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:dashboard');
    assert.ok(controller);
  });

  test('it has the correct openLoansTotalAmount', function(assert) {
    const controller = this.owner.lookup('controller:dashboard');
    controller.model = {
      openLoans: [{
        amount: '2.50',
      }, {
        amount: '2.50',
      }],
    };

    assert.equal(controller.openLoansTotalAmount, '$5.00');

    controller.model = {
      openLoans: [{
        amount: '617.28',
      }, {
        amount: '617.28',
      }],
    };

    assert.equal(controller.openLoansTotalAmount, '$1,234.56');

    controller.model = {
      openLoans: [{
        amount: '-2.50',
      }, {
        amount: '-2.50',
      }],
    };

    assert.equal(controller.openLoansTotalAmount, '$-5.00');

    controller.model = {
      openLoans: [{
        amount: '-3271.61',
      }, {
        amount: '-3271.60',
      }],
    };

    assert.equal(controller.openLoansTotalAmount, '$-6,543.21');
  });

  test('it has the correct openLoansTotalBalance', function(assert) {
    const controller = this.owner.lookup('controller:dashboard');
    controller.model = {
      openLoans: [{
        balance: '2.50',
      }, {
        balance: '2.50',
      }],
    };

    assert.equal(controller.openLoansTotalBalance, '$5.00');

    controller.model = {
      openLoans: [{
        balance: '617.28',
      }, {
        balance: '617.28',
      }],
    };

    assert.equal(controller.openLoansTotalBalance, '$1,234.56');

    controller.model = {
      openLoans: [{
        balance: '-2.50',
      }, {
        balance: '-2.50',
      }],
    };

    assert.equal(controller.openLoansTotalBalance, '$-5.00');

    controller.model = {
      openLoans: [{
        balance: '-3271.61',
      }, {
        balance: '-3271.60',
      }],
    };

    assert.equal(controller.openLoansTotalBalance, '$-6,543.21');
  });
});
