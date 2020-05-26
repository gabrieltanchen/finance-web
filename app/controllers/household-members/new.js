import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';

export default class HouseholdMembersNewController extends Controller {
  @alias('model') householdMember;

  @action
  transitionToHouseholdMemberDetails() {
    this.transitionToRoute('household-members.show', this.householdMember.id);
  }
}
