import DS from 'ember-data';
import {
  computed,
  get,
  observer,
  set,
} from '@ember/object';

export default DS.Model.extend({
  amount: DS.attr('number'),
  amount_cents: DS.attr('number'),
  created_at: DS.attr('date'),
  date: DS.attr('string'),
  description: DS.attr('string'),
  reimbursed_amount: DS.attr('number'),
  reimbursed_cents: DS.attr('number'),

  household_member: DS.belongsTo('household-member'),
  subcategory: DS.belongsTo('subcategory'),
  vendor: DS.belongsTo('vendor'),

  amount_str: computed('amount', function() {
    if (get(this, 'amount') === 0) {
      return '-';
    }
    return `$${get(this, 'amount').toFixed(2)}`;
  }),
  reimbursed_amount_str: computed('reimbursed_amount', function() {
    if (get(this, 'reimbursed_amount') === 0) {
      return '-';
    }
    return `$${get(this, 'reimbursed_amount').toFixed(2)}`;
  }),

  amountChanged: observer('amount', function() {
    set(this, 'amount_cents', parseInt((get(this, 'amount') * 100).toFixed(0), 10));
  }),
  amountCentsChanged: observer('amount_cents', function() {
    set(this, 'amount', get(this, 'amount_cents') / 100);
  }),
  reimbursedAmountChanged: observer('reimbursed_amount', function() {
    set(this, 'reimbursed_cents', parseInt((get(this, 'reimbursed_amount') * 100).toFixed(0), 10));
  }),
  reimbursedCentsChanged: observer('reimbursed_cents', function() {
    set(this, 'reimbursed_amount', get(this, 'reimbursed_cents') / 100);
  }),
});
