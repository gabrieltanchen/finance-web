import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';
import moment from 'moment';

export default class DashboardController extends Controller {
  queryParams = ['month', 'year'];
  @alias('model.budgetReports') budgetReports;
  @alias('model.monthlyReport') monthlyReport;
  @tracked month = moment().format('MMMM');
  @tracked year = moment().year();

  monthOptions = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  yearOptions = [2017, 2018, 2019, 2020];

  @action setMonth(month) {
    this.month = month;
  }

  @action setYear(year) {
    this.year = year;
  }
}
