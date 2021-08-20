import Model, { attr, belongsTo } from '@ember-data/model';

export default class DepositModel extends Model {
  @attr('dollars') amount;
  @attr('date') createdAt;
  @attr('string') date;

  @belongsTo('fund') fund;

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
