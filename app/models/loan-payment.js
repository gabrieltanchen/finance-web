import Model, { attr, belongsTo } from '@ember-data/model';

export default class LoanPaymentModel extends Model {
  @attr('date') createdAt;
  @attr('string') date;
  @attr('dollars') interestAmount;
  @attr('dollars') principalAmount;

  @belongsTo('loan') loan;

  get interestAmountStr() {
    if (parseFloat(this.interestAmount) === 0) {
      return '-';
    }
    const interestAmountStr = parseFloat(this.interestAmount).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${interestAmountStr}`;
  }

  get principalAmountStr() {
    if (parseFloat(this.principalAmount) === 0) {
      return '-';
    }
    const principalAmountStr = parseFloat(this.principalAmount).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${principalAmountStr}`;
  }

  get totalAmountStr() {
    const totalAmount = parseFloat(this.interestAmount) + parseFloat(this.principalAmount);
    if (totalAmount === 0) {
      return '-';
    }
    const totalAmountStr = totalAmount.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${totalAmountStr}`;
  }
}
