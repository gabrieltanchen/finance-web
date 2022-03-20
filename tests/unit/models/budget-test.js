import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | budget', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('budget', {});
    assert.ok(model);
  });

  test('it has the correct amountStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const budget = store.createRecord('budget', {
      amount: 0,
    });

    assert.equal(budget.amountStr, '-');

    budget.amount = '5.00';

    assert.equal(budget.amountStr, '$5.00');

    budget.amount = '1234.56';

    assert.equal(budget.amountStr, '$1,234.56');

    budget.amount = '-5.00';

    assert.equal(budget.amountStr, '$-5.00');

    budget.amount = '-6543.21';

    assert.equal(budget.amountStr, '$-6,543.21');
  });

  test('it has the correct monthStr', function(assert) {
    const store = this.owner.lookup('service:store');
    const budget = store.createRecord('budget', {
      month: 0,
    });

    assert.equal(budget.monthStr, 'January');

    budget.month = 1;

    assert.equal(budget.monthStr, 'February');

    budget.month = 2;

    assert.equal(budget.monthStr, 'March');

    budget.month = 3;

    assert.equal(budget.monthStr, 'April');

    budget.month = 4;

    assert.equal(budget.monthStr, 'May');

    budget.month = 5;

    assert.equal(budget.monthStr, 'June');

    budget.month = 6;

    assert.equal(budget.monthStr, 'July');

    budget.month = 7;

    assert.equal(budget.monthStr, 'August');

    budget.month = 8;

    assert.equal(budget.monthStr, 'September');

    budget.month = 9;

    assert.equal(budget.monthStr, 'October');

    budget.month = 10;

    assert.equal(budget.monthStr, 'November');

    budget.month = 11;

    assert.equal(budget.monthStr, 'December');
  });

  test('it has the correct notesHtml', function(assert) {
    const store = this.owner.lookup('service:store');
    const budget = store.createRecord('budget', {
      notes: 'hello world',
    });

    assert.equal(budget.notesHtml, 'hello world');

    budget.notes = 'hello\nworld';

    assert.equal(budget.notesHtml, 'hello<br />world');

    budget.notes = 'hello\nworld\n';

    assert.equal(budget.notesHtml, 'hello<br />world<br />');
  });
});
