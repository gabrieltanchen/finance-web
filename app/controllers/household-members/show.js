import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  householdMember: alias('model.householdMember'),
  errors: null,
  showDeleteModal: false,

  actions: {
    closeDeleteModal() {
      set(this, 'showDeleteModal', false);
    },
    async deleteHouseholdMember() {
      set(this, 'showDeleteModal', false);
      const householdMember = get(this, 'householdMember');
      try {
        await householdMember.destroyRecord();
        this.transitionToRoute('household-members.index');
      } catch (err) {
        householdMember.rollbackAttributes();
        let errors = ['Unable to delete member.'];
        if (err && err.errors) {
          errors = err.errors.map((error) => {
            return error.detail;
          });
        }
        set(this, 'errors', errors);
      }
    },
    openDeleteModal() {
      set(this, 'showDeleteModal', true);
    },
  },
});
