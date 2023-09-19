import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';
import moment from 'moment';

export default class DashboardController extends Controller {
  queryParams = ['month', 'year'];
  @alias('model.budgetReports') budgetReports;
  @alias('model.monthlyReport') monthlyReport;
  @alias('model.openLoans') openLoans;
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
  yearOptions = [2017, 2018, 2019, 2020, 2021, 2022, 2023];

  get openLoansTotalAmount() {
    let totalAmount = 0;
    this.openLoans.forEach((loan) => {
      totalAmount += parseFloat(loan.amount);
    });
    const totalAmountStr = totalAmount.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${totalAmountStr}`;
  }

  get openLoansTotalBalance() {
    let totalBalance = 0;
    this.openLoans.forEach((loan) => {
      totalBalance += parseFloat(loan.balance);
    });
    const totalBalanceStr = totalBalance.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${totalBalanceStr}`;
  }

  @action setMonth(month) {
    this.month = month;
  }

  @action setYear(year) {
    this.year = year;
  }
}
