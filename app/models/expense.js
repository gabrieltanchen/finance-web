import Model, { attr, belongsTo } from '@ember-data/model';

export default class ExpenseModel extends Model {
  @attr('dollars') amount;
  @attr('date') createdAt;
  @attr('string') date;
  @attr('string') description;
  @attr('dollars') reimbursedAmount;

  @belongsTo('household-member') householdMember;
  @belongsTo('subcategory') subcategory;
  @belongsTo('vendor') vendor;

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
