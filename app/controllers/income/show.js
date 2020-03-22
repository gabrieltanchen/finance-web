import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  householdMember: alias('model.householdMember'),
  income: alias('model.income'),
  showDeleteModal: false,

  actions: {
    closeDeleteModal() {
      set(this, 'showDeleteModal', false);
    },
    async deleteIncome() {
      set(this, 'showDeleteModal', false);
      const income = get(this, 'income');
      try {
        await income.destroyRecord();
        this.transitionToRoute('income.index');
      } catch (err) {
        income.rollbackAttributes();
        let errors = ['Unable to delete income.'];
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
