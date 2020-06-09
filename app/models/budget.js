import Model, { attr, belongsTo } from '@ember-data/model';

export default class BudgetModel extends Model {
  @attr('dollars') amount;
  @attr('date') createdAt;
  @attr('number') month;
  @attr('number') year;

  @belongsTo('subcategory') subcategory;

  get amountStr() {
    if (parseFloat(this.amount) === 0) {
      return '-';
    }
    const amountStr = parseFloat(this.amount).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${amountStr}`;
  }

  get monthStr() {
    const months = [
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
    return months[this.month];
  }
}
