import DS from 'ember-data';
import { get, observer, set } from '@ember/object';

export default DS.Model.extend({
  amount: DS.attr('number'),
  amount_cents: DS.attr('number'),
  created_at: DS.attr('date'),
  date: DS.attr('date'),
  description: DS.attr('string'),
  reimbursed_amount: DS.attr('number'),
  reimbursed_cents: DS.attr('number'),

  category: DS.belongsTo('category'),
  vendor: DS.belongsTo('vendor'),

  amountChanged: observer('amount', function() {
    set(this, 'amount_cents', parseInt(get(this, 'amount') * 100, 10));
  }),
  amountCentsChanged: observer('amount_cents', function() {
    set(this, 'amount', get(this, 'amount_cents') / 100);
  }),
  reimbursedAmountChanged: observer('reimbursed_amount', function() {
    set(this, 'reimbursed_cents', parseInt(get(this, 'reimbursed_amount') * 100, 10));
  }),
  reimbursedCentsChanged: observer('reimbursed_cents', function() {
    set(this, 'reimbursed_amount', get(this, 'reimbursed_cents') / 100);
  }),
});
