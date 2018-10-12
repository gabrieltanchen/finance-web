import DS from 'ember-data';

export default DS.Model.extend({
  amount: DS.attr('number'),
  category: DS.belongsTo('category'),
  created_at: DS.attr('date'),
  date: DS.attr('date'),
  description: DS.attr('string'),
  reimbursed_amount: DS.attr('number'),
  vendor: DS.belongsTo('vendor'),
});
