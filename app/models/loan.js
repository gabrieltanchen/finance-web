import Model, { attr, hasMany } from '@ember-data/model';

export default class LoanModel extends Model {
  @attr('dollars') amount;
  @attr('dollars') balance;
  @attr('date') createdAt;
  @attr('string') name;

  @hasMany(
    'loan-payment',
    { async: true, inverse: 'loan' },
  ) loanPayments;

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
