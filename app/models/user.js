import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('date') createdAt;
  @attr('string') email;
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('string') password;
}
