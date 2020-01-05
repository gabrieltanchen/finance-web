import Controller from '@ember/controller';
import { get } from '@ember/object';
import { alias } from '@ember/object/computed';
import BudgetValidations from '../../validations/budget';

export default Controller.extend({
  budget: alias('model.budget'),
  BudgetValidations,
  errors: null,

  actions: {
    budgetSaved() {
      const budget = get(this, 'budget');
      this.transitionToRoute('budgets.show', budget.id);
    },
  },
});
