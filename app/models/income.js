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

  household_member: DS.belongsTo('household-member'),

  amount_str: computed('amount', function() {
    if (get(this, 'amount') === 0) {
      return '-';
    }
    return `$${get(this, 'amount').toFixed(2)}`;
  }),

  amountChanged: observer('amount', function() {
    set(this, 'amount_cents', parseInt((get(this, 'amount') * 100).toFixed(0), 10));
  }),
  amountCentsChanged: observer('amount_cents', function() {
    set(this, 'amount', get(this, 'amount_cents') / 100);
  }),
});
