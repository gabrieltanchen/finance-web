import Model, { attr, belongsTo } from '@ember-data/model';

export default class BudgetReportModel extends Model {
  @attr('dollars') actual;
  @attr('dollars') budget;

  @belongsTo('category') category;
  @belongsTo('subcategory') subcategory;

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

  get alert() {
    const actual = parseFloat(this.actual) || 0;
    const budget = parseFloat(this.budget) || 0;
    return actual > budget;
  }

  get balanceStr() {
    const actual = parseFloat(this.actual) || 0;
    const budget = parseFloat(this.budget) || 0;
    const balance = budget - actual;
    if (balance === 0) {
      return '-';
    }
    const balanceStr = balance.toLocaleString('en-CA', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    return `$${balanceStr}`;
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
}
