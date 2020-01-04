import DS from 'ember-data';
import { computed, get } from '@ember/object';

export default DS.Model.extend({
  actual: DS.attr('number'),
  actual_cents: DS.attr('number'),
  budget: DS.attr('number'),
  budget_cents: DS.attr('number'),
  difference: DS.attr('number'),
  difference_cents: DS.attr('number'),

  category: DS.belongsTo('category'),
  subcategory: DS.belongsTo('subcategory'),

  alertState: computed('actual_cents', 'budget_cents', function() {
    return get(this, 'actual_cents') > get(this, 'budget_cents');
  }),
});
