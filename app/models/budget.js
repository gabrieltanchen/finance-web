import DS from 'ember-data';
import { get, observer, set } from '@ember/object';

export default DS.Model.extend({
  budget: DS.attr('number'),
  budget_cents: DS.attr('number'),
  created_at: DS.attr('date'),
  month: DS.attr('number'),
  year: DS.attr('number'),

  subcategory: DS.belongsTo('subcategory'),

  budgetChanged: observer('budget', function() {
    set(this, 'budget_cents', parseInt(get(this, 'budget') * 100, 10));
  }),
  budgetCentsChanged: observer('budget_cents', function() {
    set(this, 'budget', get(this, 'budget_cents') / 100);
  }),
});
