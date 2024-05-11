import Model, { attr, hasMany } from '@ember-data/model';

export default class EmployerModel extends Model {
  @attr('date') createdAt;
  @attr('string') name;

  @hasMany('income') incomes;
}
