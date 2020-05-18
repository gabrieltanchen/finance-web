import Model, { attr } from '@ember-data/model';

export default class LoginTokenModel extends Model {
  @attr('string') token;
}
