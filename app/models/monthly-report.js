import Model, { attr } from '@ember-data/model';

export default class MonthlyReportModel extends Model {
  @attr('dollars') actual;
  @attr('dollars') budget;
  @attr('dollars') income;

  get actualStr() {
    const actual = parseFloat(this.actual) || 0;
    if (actual === 0) {
      return '-';
    }
    const actualStr = actual.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${actualStr}`;
  }

  get budgetActualBalanceAlert() {
    const actual = parseFloat(this.actual) || 0;
    const budget = parseFloat(this.budget) || 0;
    return actual > budget;
  }

  get budgetActualBalanceStr() {
    const actual = parseFloat(this.actual) || 0;
    const budget = parseFloat(this.budget) || 0;
    const budgetActualBalance = budget - actual;
    if (budgetActualBalance === 0) {
      return '-';
    }
    const budgetActualBalanceStr = budgetActualBalance.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${budgetActualBalanceStr}`;
  }

  get budgetStr() {
    const budget = parseFloat(this.budget) || 0;
    if (budget === 0) {
      return '-';
    }
    const budgetStr = budget.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${budgetStr}`;
  }

  get incomeActualBalanceAlert() {
    const actual = parseFloat(this.actual) || 0;
    const income = parseFloat(this.income) || 0;
    return actual > income;
  }

  get incomeActualBalanceStr() {
    const actual = parseFloat(this.actual) || 0;
    const income = parseFloat(this.income) || 0;
    const incomeActualBalance = income - actual;
    if (incomeActualBalance === 0) {
      return '-';
    }
    const incomeActualBalanceStr = incomeActualBalance.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${incomeActualBalanceStr}`;
  }

  get incomeBudgetBalanceAlert() {
    const budget = parseFloat(this.budget) || 0;
    const income = parseFloat(this.income) || 0;
    return budget > income;
  }

  get incomeBudgetBalanceStr() {
    const budget = parseFloat(this.budget) || 0;
    const income = parseFloat(this.income) || 0;
    const incomeBudgetBalance = income - budget;
    if (incomeBudgetBalance === 0) {
      return '-';
    }
    const incomeBudgetBalanceStr = incomeBudgetBalance.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${incomeBudgetBalanceStr}`;
  }

  get incomeStr() {
    const income = parseFloat(this.income) || 0;
    if (income === 0) {
      return '-';
    }
    const incomeStr = income.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${incomeStr}`;
  }
}
