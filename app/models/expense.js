import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class ExpenseModel extends Model {
  @attr('dollars') amount;
  @attr('date') createdAt;
  @attr('string') date;
  @attr('string') description;
  @attr('dollars') reimbursedAmount;

  @belongsTo(
    'fund',
    { async: true, inverse: 'expenses' },
  ) fund;
  @belongsTo(
    'household-member',
    { async: true, inverse: 'expenses' },
  ) householdMember;
  @belongsTo(
    'subcategory',
    { async: true, inverse: 'expenses' },
  ) subcategory;
  @belongsTo(
    'vendor',
    { async: true, inverse: 'expenses' },
  ) vendor;
  @hasMany(
    'attachment',
    { async: true, inverse: 'expense' },
  ) attachments;

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

  get reimbursedAmountStr() {
    if (parseFloat(this.reimbursedAmount) === 0) {
      return '-';
    }
    const reimbursedAmountStr = parseFloat(this.reimbursedAmount).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${reimbursedAmountStr}`;
  }
}
