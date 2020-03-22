import DS from 'ember-data';
import {
  computed,
  get,
  observer,
  set,
} from '@ember/object';

export default DS.Model.extend({
  budget: DS.attr('number'),
  budget_cents: DS.attr('number'),
  created_at: DS.attr('date'),
  month: DS.attr('number'),
  year: DS.attr('number'),

  subcategory: DS.belongsTo('subcategory'),

  budget_str: computed('budget', function() {
    if (get(this, 'budget') === 0) {
      return '-';
    }
    return `$${get(this, 'budget').toFixed(2)}`;
  }),
  month_name: computed('month', function() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[get(this, 'month')];
  }),

  budgetChanged: observer('budget', function() {
    set(this, 'budget_cents', parseInt((get(this, 'budget') * 100).toFixed(0), 10));
  }),
  budgetCentsChanged: observer('budget_cents', function() {
    set(this, 'budget', get(this, 'budget_cents') / 100);
  }),
});
