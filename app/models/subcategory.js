import DS from 'ember-data';

export default DS.Model.extend({
  created_at: DS.attr('string'),
  name: DS.attr('string'),

  category: DS.belongsTo('category'),
});
