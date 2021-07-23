import Model, { attr, hasMany } from '@ember-data/model';

export default class FundModel extends Model {
  @attr('dollars') balance;
  @attr('date') createdAt;
  @attr('string') name;

  @hasMany('deposit') deposits;
  @hasMany('expense') expenses;

  get balanceStr() {
    if (parseFloat(this.balance) === 0) {
      return '-';
    }
    const balanceStr = parseFloat(this.balance).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${balanceStr}`;
  }
}
