import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class EmployersEditController extends Controller {
  @service router;
  @alias('model') employer;

  @action
  transitionToEmployerDetails() {
    this.router.transitionTo('employers.show', this.employer.id);
  }
}
