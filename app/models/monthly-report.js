import DS from 'ember-data';
import { computed, get } from '@ember/object';

export default DS.Model.extend({
  actual_cents: DS.attr('number'),
  budget_cents: DS.attr('number'),
  income_cents: DS.attr('number'),

  actual_str: computed('actual_cents', function() {
    const actual = parseFloat(get(this, 'actual_cents') / 100);
    if (actual === 0) {
      return '-';
    }
    return `$${actual.toFixed(2)}`;
  }),
  budget_actual_diff_alert: computed('actual_cents', 'budget_cents', function() {
    return get(this, 'actual_cents') > get(this, 'budget_cents');
  }),
  budget_actual_diff_str: computed('actual_cents', 'budget_cents', function() {
    const actualCents = get(this, 'actual_cents');
    const budgetCents = get(this, 'budget_cents');
    const difference = parseFloat((budgetCents - actualCents) / 100);
    if (difference === 0) {
      return '-';
    }
    return `$${difference.toFixed(2)}`;
  }),
  budget_str: computed('budget_cents', function() {
    const budget = parseFloat(get(this, 'budget_cents') / 100);
    if (budget === 0) {
      return '-';
    }
    return `$${budget.toFixed(2)}`;
  }),
  income_actual_diff_alert: computed('actual_cents', 'income_cents', function() {
    return get(this, 'actual_cents') > get(this, 'income_cents');
  }),
  income_actual_diff_str: computed('actual_cents', 'income_cents', function() {
    const actualCents = get(this, 'actual_cents');
    const incomeCents = get(this, 'income_cents');
    const difference = parseFloat((incomeCents - actualCents) / 100);
    if (difference === 0) {
      return '-';
    }
    return `$${difference.toFixed(2)}`;
  }),
  income_budget_diff_alert: computed('budget_cents', 'income_cents', function() {
    return get(this, 'budget_cents') > get(this, 'income_cents');
  }),
  income_budget_diff_str: computed('budget_cents', 'income_cents', function() {
    const budgetCents = get(this, 'budget_cents');
    const incomeCents = get(this, 'income_cents');
    const difference = parseFloat((incomeCents - budgetCents) / 100);
    if (difference === 0) {
      return '-';
    }
    return `$${difference.toFixed(2)}`;
  }),
  income_str: computed('income_cents', function() {
    const income = parseFloat(get(this, 'income_cents') / 100);
    if (income === 0) {
      return '-';
    }
    return `$${income.toFixed(2)}`;
  }),
});
