import DS from 'ember-data';
import { observer } from '@ember/object';

export default DS.Model.extend({
  amount: DS.attr('number'),
  amount_cents: DS.attr('number'),
  category: DS.belongsTo('category'),
  created_at: DS.attr('date'),
  date: DS.attr('date'),
  description: DS.attr('string'),
  reimbursed_amount: DS.attr('number'),
  reimbursed_cents: DS.attr('number'),
  vendor: DS.belongsTo('vendor'),

  amountChanged: observer('amount', function() {
    this.set('amount_cents', parseInt(this.amount * 100, 10));
  }),
  amountCentsChanged: observer('amount_cents', function() {
    this.set('amount', this.amount_cents / 100);
  }),
  reimbursedAmountChanged: observer('reimbursed_amount', function() {
    this.set('reimbursed_cents', parseInt(this.reimbursed_amount * 100, 10));
  }),
  reimbursedCentsChanged: observer('reimbursed_cents', function() {
    this.set('reimbursed_amount', this.reimbursed_cents / 100);
  }),
});
