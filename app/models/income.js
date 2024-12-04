import Model, { attr, belongsTo } from '@ember-data/model';

export default class IncomeModel extends Model {
  @attr('dollars') amount;
  @attr('date') createdAt;
  @attr('string') date;
  @attr('string') description;

  @belongsTo(
    'employer',
    { async: true, inverse: 'incomes' },
  ) employer;
  @belongsTo(
    'household-member',
    { async: true, inverse: 'incomes' },
  ) householdMember;

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
}
