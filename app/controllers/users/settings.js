import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default class UsersSettingsController extends Controller {
  @alias('model') user;
}
