import DS from 'ember-data';

export default DS.Model.extend({
  created_at: DS.attr('string'),
  name: DS.attr('string'),
  parent_uuid: DS.attr('string'),
});
