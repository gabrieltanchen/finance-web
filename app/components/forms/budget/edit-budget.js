import Component from '@ember/component';
import { computed, get, set } from '@ember/object';

export default Component.extend({
  errors: null,

  monthOptions: computed('budget.month', function() {
    const month = get(this, 'budget.month');
    return [{
      optionName: 'January',
      optionValue: 0,
      selected: month === 0,
    }, {
      optionName: 'February',
      optionValue: 1,
      selected: month === 1,
    }, {
      optionName: 'March',
      optionValue: 2,
      selected: month === 2,
    }, {
      optionName: 'April',
      optionValue: 3,
      selected: month === 3,
    }, {
      optionName: 'May',
      optionValue: 4,
      selected: month === 4,
    }, {
      optionName: 'June',
      optionValue: 5,
      selected: month === 5,
    }, {
      optionName: 'July',
      optionValue: 6,
      selected: month === 6,
    }, {
      optionName: 'August',
      optionValue: 7,
      selected: month === 7,
    }, {
      optionName: 'September',
      optionValue: 8,
      selected: month === 8,
    }, {
      optionName: 'October',
      optionValue: 9,
      selected: month === 9,
    }, {
      optionName: 'November',
      optionValue: 10,
      selected: month === 10,
    }, {
      optionName: 'December',
      optionValue: 11,
      selected: month === 11,
    }];
  }),

  disableSubmit: computed('budget.isInvalid', function() {
    return get(this, 'budget.isInvalid');
  }),

  actions: {
    async submit() {
      set(this, 'errors', null);
      const budget = get(this, 'budget');
      try {
        await budget.save();
        get(this, 'budgetSaved')();
      } catch (err) {
        let errors = ['Unable to save budget.'];
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
