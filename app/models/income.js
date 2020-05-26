import Model, { attr, belongsTo } from '@ember-data/model';

export default class IncomeModel extends Model {
  @attr('number') amountCents;
  @attr('date') createdAt;
  @attr('string') date;
  @attr('string') description;

  @belongsTo('household-member') householdMember;

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
}
