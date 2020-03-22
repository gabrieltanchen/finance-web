import Component from '@ember/component';
import { computed, get, set } from '@ember/object';

export default Component.extend({
  errors: null,

  monthOptions: [{
    optionName: 'January',
    optionValue: 0,
  }, {
    optionName: 'February',
    optionValue: 1,
  }, {
    optionName: 'March',
    optionValue: 2,
  }, {
    optionName: 'April',
    optionValue: 3,
  }, {
    optionName: 'May',
    optionValue: 4,
  }, {
    optionName: 'June',
    optionValue: 5,
  }, {
    optionName: 'July',
    optionValue: 6,
  }, {
    optionName: 'August',
    optionValue: 7,
  }, {
    optionName: 'September',
    optionValue: 8,
  }, {
    optionName: 'October',
    optionValue: 9,
  }, {
    optionName: 'November',
    optionValue: 10,
  }, {
    optionName: 'December',
    optionValue: 11,
  }],

  disableSubmit: computed(
    'budget.{isDirty,isInvalid}',
    function() {
      return !get(this, 'budget.isDirty')
        || get(this, 'budget.isInvalid');
    },
  ),

  actions: {
    async submit() {
      set(this, 'errors', null);
      const budget = get(this, 'budget');
      try {
        await budget.save();
        get(this, 'budgetCreated')();
      } catch (err) {
        let errors = ['Unable to create budget.'];
        if (err && err.errors) {
          errors = err.errors.map((error) => {
            return error.detail;
          });
        }
        set(this, 'errors', errors);
      }
    },
  },
});
