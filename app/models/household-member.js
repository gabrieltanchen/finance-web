import Model, { attr, hasMany } from '@ember-data/model';

export default class HouseholdMemberModel extends Model {
  @attr('date') createdAt;
  @attr('string') name;

  @hasMany('expense') expenses;
}
