import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { alias } from '@ember/object/computed';
import moment from 'moment';

export default Controller.extend({
  queryParams: ['month', 'year'],
  budgetReports: alias('model.budgetReports'),
  month: moment().month(),
  year: moment().year(),

  monthOptions: computed('month', function() {
    const month = parseInt(get(this, 'month'), 10);
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
  yearOptions: computed('year', function() {
    const year = parseInt(get(this, 'year'), 10);
    return [{
      optionValue: 2017,
      selected: year === 2017,
    }, {
      optionValue: 2018,
      selected: year === 2018,
    }, {
      optionValue: 2019,
      selected: year === 2019,
    }, {
      optionValue: 2020,
      selected: year === 2020,
    }];
  }),
});
