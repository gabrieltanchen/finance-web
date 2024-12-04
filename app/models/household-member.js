import Model, { attr, hasMany } from '@ember-data/model';

export default class HouseholdMemberModel extends Model {
  @attr('date') createdAt;
  @attr('number') expenseCount;
  @attr('string') name;
  @attr('dollars') sumAmount;
  @attr('dollars') sumIncome;
  @attr('dollars') sumReimbursed;

  @hasMany(
    'expense',
    { async: true, inverse: 'householdMember' },
  ) expenses;
  @hasMany(
    'income',
    { async: true, inverse: 'householdMember' },
  ) incomes;

  get sumAmountStr() {
    if (parseFloat(this.sumAmount) === 0) {
      return '-';
    }
    const sumAmountStr = parseFloat(this.sumAmount).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${sumAmountStr}`;
  }

  get sumIncomeStr() {
    if (parseFloat(this.sumIncome) === 0) {
      return '-';
    }
    const sumIncomeStr = parseFloat(this.sumIncome).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${sumIncomeStr}`;
  }

  get sumReimbursedStr() {
    if (parseFloat(this.sumReimbursed) === 0) {
      return '-';
    }
    const sumReimbursedStr = parseFloat(this.sumReimbursed).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${sumReimbursedStr}`;
  }

  get sumTotalStr() {
    const sumTotal = this.sumAmount - this.sumReimbursed;
    if (parseFloat(sumTotal) === 0) {
      return '-';
    }
    const sumTotalStr = parseFloat(sumTotal).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${sumTotalStr}`;
  }
}
