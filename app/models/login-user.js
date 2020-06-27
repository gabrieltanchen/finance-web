import Model, { attr } from '@ember-data/model';

export default class LoginUserModel extends Model {
  @attr('string') email;
  @attr('string') password;
  @attr('string') token;
}
