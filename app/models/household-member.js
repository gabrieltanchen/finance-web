import Model, { attr, hasMany } from '@ember-data/model';

export default class HouseholdMemberModel extends Model {
  @attr('date') createdAt;
  @attr('number') expenseCount;
  @attr('string') name;
  @attr('number') sumAmountCents;
  @attr('number') sumIncomeCents;
  @attr('number') sumReimbursedCents;

  @hasMany('expense') expenses;

  get sumAmount() {
    if (this.sumAmountCents === 0) {
      return '-';
    }
    const sumAmount = (this.sumAmountCents / 100).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${sumAmount}`;
  }

  get sumIncome() {
    if (this.sumIncomeCents === 0) {
      return '-';
    }
    const sumIncome = (this.sumIncomeCents / 100).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${sumIncome}`;
  }

  get sumReimbursed() {
    if (this.sumReimbursedCents === 0) {
      return '-';
    }
    const sumReimbursed = (this.sumReimbursedCents / 100).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${sumReimbursed}`;
  }

  get sumTotal() {
    const totalCents = this.sumAmountCents - this.sumReimbursedCents;
    if (totalCents === 0) {
      return '-';
    }
    const sumTotal = (totalCents / 100).toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${sumTotal}`;
  }
}
