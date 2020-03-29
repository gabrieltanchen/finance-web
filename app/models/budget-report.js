import DS from 'ember-data';
import { computed, get } from '@ember/object';

export default DS.Model.extend({
  actual: DS.attr('number'),
  actual_cents: DS.attr('number'),
  budget: DS.attr('number'),
  budget_cents: DS.attr('number'),

  category: DS.belongsTo('category'),
  subcategory: DS.belongsTo('subcategory'),

  alertState: computed('actual_cents', 'budget_cents', function() {
    return get(this, 'actual_cents') > get(this, 'budget_cents');
  }),
  actual_str: computed('actual', function() {
    if (get(this, 'actual') === 0) {
      return '-';
    }
    return `$${get(this, 'actual').toFixed(2)}`;
  }),
  budget_str: computed('budget', function() {
    if (get(this, 'budget') === 0) {
      return '-';
    }
    return `$${get(this, 'budget').toFixed(2)}`;
  }),
  difference: computed('actual', 'budget', function() {
    return (get(this, 'budget') - get(this, 'actual')).toFixed(2);
  }),
  difference_str: computed('difference', function() {
    const difference = parseFloat(get(this, 'difference'));
    if (difference === 0) {
      return '-';
    }
    return `$${difference.toFixed(2)}`;
  }),
});
