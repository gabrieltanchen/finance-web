import Model, { attr, belongsTo } from '@ember-data/model';

export default class ExpenseModel extends Model {
  @attr('number') amountCents;
  @attr('date') createdAt;
  @attr('string') date;
  @attr('string') description;
  @attr('number') reimbursedCents;

  @belongsTo('household-member') householdMember;
  @belongsTo('vendor') vendor;

  get amount() {
    if (this.amountCents === 0) {
      return '-';
    }
    const amount = (this.amountCents / 100).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${amount}`;
  }

  get reimbursedAmount() {
    if (this.reimbursedCents === 0) {
      return '-';
    }
    const reimbursedAmount = (this.reimbursedCents / 100).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${reimbursedAmount}`;
  }
}
