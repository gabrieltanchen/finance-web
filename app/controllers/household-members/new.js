import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class HouseholdMembersNewController extends Controller {
  @service router;
  @alias('model') householdMember;

  @action
  transitionToHouseholdMemberDetails() {
    this.router.transitionTo('household-members.show', this.householdMember.id);
  }
}
