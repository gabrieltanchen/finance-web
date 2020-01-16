import DS from 'ember-data';
import { computed, get } from '@ember/object';

export default DS.Model.extend({
  apr_actual_cents: DS.attr('number'),
  apr_budget_cents: DS.attr('number'),
  aug_actual_cents: DS.attr('number'),
  aug_budget_cents: DS.attr('number'),
  dec_actual_cents: DS.attr('number'),
  dec_budget_cents: DS.attr('number'),
  feb_actual_cents: DS.attr('number'),
  feb_budget_cents: DS.attr('number'),
  mar_actual_cents: DS.attr('number'),
  mar_budget_cents: DS.attr('number'),
  may_actual_cents: DS.attr('number'),
  may_budget_cents: DS.attr('number'),
  jan_actual_cents: DS.attr('number'),
  jan_budget_cents: DS.attr('number'),
  jul_actual_cents: DS.attr('number'),
  jul_budget_cents: DS.attr('number'),
  jun_actual_cents: DS.attr('number'),
  jun_budget_cents: DS.attr('number'),
  nov_actual_cents: DS.attr('number'),
  nov_budget_cents: DS.attr('number'),
  oct_actual_cents: DS.attr('number'),
  oct_budget_cents: DS.attr('number'),
  sep_actual_cents: DS.attr('number'),
  sep_budget_cents: DS.attr('number'),
  year: DS.attr('number'),

  apr_actual_str: computed('apr_actual_cents', function() {
    return `$${(get(this, 'apr_actual_cents') / 100).toFixed(2)}`;
  }),
  apr_alert: computed('apr_actual_cents', 'apr_budget_cents', function() {
    return get(this, 'apr_actual_cents') > get(this, 'apr_budget_cents');
  }),
  apr_budget_str: computed('apr_budget_cents', function() {
    return `$${(get(this, 'apr_budget_cents') / 100).toFixed(2)}`;
  }),
  apr_diff_str: computed('apr_actual_cents', 'apr_budget_cents', function() {
    return `$${((get(this, 'apr_budget_cents') - get(this, 'apr_actual_cents')) / 100).toFixed(2)}`;
  }),
  aug_actual_str: computed('aug_actual_cents', function() {
    return `$${(get(this, 'aug_actual_cents') / 100).toFixed(2)}`;
  }),
  aug_alert: computed('aug_actual_cents', 'aug_budget_cents', function() {
    return get(this, 'aug_actual_cents') > get(this, 'aug_budget_cents');
  }),
  aug_budget_str: computed('aug_budget_cents', function() {
    return `$${(get(this, 'aug_budget_cents') / 100).toFixed(2)}`;
  }),
  aug_diff_str: computed('aug_actual_cents', 'aug_budget_cents', function() {
    return `$${((get(this, 'aug_budget_cents') - get(this, 'aug_actual_cents')) / 100).toFixed(2)}`;
  }),
  dec_actual_str: computed('dec_actual_cents', function() {
    return `$${(get(this, 'dec_actual_cents') / 100).toFixed(2)}`;
  }),
  dec_alert: computed('dec_actual_cents', 'dec_budget_cents', function() {
    return get(this, 'dec_actual_cents') > get(this, 'dec_budget_cents');
  }),
  dec_budget_str: computed('dec_budget_cents', function() {
    return `$${(get(this, 'dec_budget_cents') / 100).toFixed(2)}`;
  }),
  dec_diff_str: computed('dec_actual_cents', 'dec_budget_cents', function() {
    return `$${((get(this, 'dec_budget_cents') - get(this, 'dec_actual_cents')) / 100).toFixed(2)}`;
  }),
  feb_actual_str: computed('feb_actual_cents', function() {
    return `$${(get(this, 'feb_actual_cents') / 100).toFixed(2)}`;
  }),
  feb_alert: computed('feb_actual_cents', 'feb_budget_cents', function() {
    return get(this, 'feb_actual_cents') > get(this, 'feb_budget_cents');
  }),
  feb_budget_str: computed('feb_budget_cents', function() {
    return `$${(get(this, 'feb_budget_cents') / 100).toFixed(2)}`;
  }),
  feb_diff_str: computed('feb_actual_cents', 'feb_budget_cents', function() {
    return `$${((get(this, 'feb_budget_cents') - get(this, 'feb_actual_cents')) / 100).toFixed(2)}`;
  }),
  mar_actual_str: computed('mar_actual_cents', function() {
    return `$${(get(this, 'mar_actual_cents') / 100).toFixed(2)}`;
  }),
  mar_alert: computed('mar_actual_cents', 'mar_budget_cents', function() {
    return get(this, 'mar_actual_cents') > get(this, 'mar_budget_cents');
  }),
  mar_budget_str: computed('mar_budget_cents', function() {
    return `$${(get(this, 'mar_budget_cents') / 100).toFixed(2)}`;
  }),
  mar_diff_str: computed('mar_actual_cents', 'mar_budget_cents', function() {
    return `$${((get(this, 'mar_budget_cents') - get(this, 'mar_actual_cents')) / 100).toFixed(2)}`;
  }),
  may_actual_str: computed('may_actual_cents', function() {
    return `$${(get(this, 'may_actual_cents') / 100).toFixed(2)}`;
  }),
  may_alert: computed('may_actual_cents', 'may_budget_cents', function() {
    return get(this, 'may_actual_cents') > get(this, 'may_budget_cents');
  }),
  may_budget_str: computed('may_budget_cents', function() {
    return `$${(get(this, 'may_budget_cents') / 100).toFixed(2)}`;
  }),
  may_diff_str: computed('may_actual_cents', 'may_budget_cents', function() {
    return `$${((get(this, 'may_budget_cents') - get(this, 'may_actual_cents')) / 100).toFixed(2)}`;
  }),
  jan_actual_str: computed('jan_actual_cents', function() {
    return `$${(get(this, 'jan_actual_cents') / 100).toFixed(2)}`;
  }),
  jan_alert: computed('jan_actual_cents', 'jan_budget_cents', function() {
    return get(this, 'jan_actual_cents') > get(this, 'jan_budget_cents');
  }),
  jan_budget_str: computed('jan_budget_cents', function() {
    return `$${(get(this, 'jan_budget_cents') / 100).toFixed(2)}`;
  }),
  jan_diff_str: computed('jan_actual_cents', 'jan_budget_cents', function() {
    return `$${((get(this, 'jan_budget_cents') - get(this, 'jan_actual_cents')) / 100).toFixed(2)}`;
  }),
  jul_actual_str: computed('jul_actual_cents', function() {
    return `$${(get(this, 'jul_actual_cents') / 100).toFixed(2)}`;
  }),
  jul_alert: computed('jul_actual_cents', 'jul_budget_cents', function() {
    return get(this, 'jul_actual_cents') > get(this, 'jul_budget_cents');
  }),
  jul_budget_str: computed('jul_budget_cents', function() {
    return `$${(get(this, 'jul_budget_cents') / 100).toFixed(2)}`;
  }),
  jul_diff_str: computed('jul_actual_cents', 'jul_budget_cents', function() {
    return `$${((get(this, 'jul_budget_cents') - get(this, 'jul_actual_cents')) / 100).toFixed(2)}`;
  }),
  jun_actual_str: computed('jun_actual_cents', function() {
    return `$${(get(this, 'jun_actual_cents') / 100).toFixed(2)}`;
  }),
  jun_alert: computed('jun_actual_cents', 'jun_budget_cents', function() {
    return get(this, 'jun_actual_cents') > get(this, 'jun_budget_cents');
  }),
  jun_budget_str: computed('jun_budget_cents', function() {
    return `$${(get(this, 'jun_budget_cents') / 100).toFixed(2)}`;
  }),
  jun_diff_str: computed('jun_actual_cents', 'jun_budget_cents', function() {
    return `$${((get(this, 'jun_budget_cents') - get(this, 'jun_actual_cents')) / 100).toFixed(2)}`;
  }),
  nov_actual_str: computed('nov_actual_cents', function() {
    return `$${(get(this, 'nov_actual_cents') / 100).toFixed(2)}`;
  }),
  nov_alert: computed('nov_actual_cents', 'nov_budget_cents', function() {
    return get(this, 'nov_actual_cents') > get(this, 'nov_budget_cents');
  }),
  nov_budget_str: computed('nov_budget_cents', function() {
    return `$${(get(this, 'nov_budget_cents') / 100).toFixed(2)}`;
  }),
  nov_diff_str: computed('nov_actual_cents', 'nov_budget_cents', function() {
    return `$${((get(this, 'nov_budget_cents') - get(this, 'nov_actual_cents')) / 100).toFixed(2)}`;
  }),
  oct_actual_str: computed('oct_actual_cents', function() {
    return `$${(get(this, 'oct_actual_cents') / 100).toFixed(2)}`;
  }),
  oct_alert: computed('oct_actual_cents', 'oct_budget_cents', function() {
    return get(this, 'oct_actual_cents') > get(this, 'oct_budget_cents');
  }),
  oct_budget_str: computed('oct_budget_cents', function() {
    return `$${(get(this, 'oct_budget_cents') / 100).toFixed(2)}`;
  }),
  oct_diff_str: computed('oct_actual_cents', 'oct_budget_cents', function() {
    return `$${((get(this, 'oct_budget_cents') - get(this, 'oct_actual_cents')) / 100).toFixed(2)}`;
  }),
  sep_actual_str: computed('sep_actual_cents', function() {
    return `$${(get(this, 'sep_actual_cents') / 100).toFixed(2)}`;
  }),
  sep_alert: computed('sep_actual_cents', 'sep_budget_cents', function() {
    return get(this, 'sep_actual_cents') > get(this, 'sep_budget_cents');
  }),
  sep_budget_str: computed('sep_budget_cents', function() {
    return `$${(get(this, 'sep_budget_cents') / 100).toFixed(2)}`;
  }),
  sep_diff_str: computed('sep_actual_cents', 'sep_budget_cents', function() {
    return `$${((get(this, 'sep_budget_cents') - get(this, 'sep_actual_cents')) / 100).toFixed(2)}`;
  }),
  tot_actual_cents: computed(
    'apr_actual_cents',
    'aug_actual_cents',
    'dec_actual_cents',
    'feb_actual_cents',
    'mar_actual_cents',
    'may_actual_cents',
    'jan_actual_cents',
    'jul_actual_cents',
    'jun_actual_cents',
    'nov_actual_cents',
    'oct_actual_cents',
    'sep_actual_cents',
    function() {
      return get(this, 'jan_actual_cents')
        + get(this, 'feb_actual_cents')
        + get(this, 'mar_actual_cents')
        + get(this, 'apr_actual_cents')
        + get(this, 'may_actual_cents')
        + get(this, 'jun_actual_cents')
        + get(this, 'jul_actual_cents')
        + get(this, 'aug_actual_cents')
        + get(this, 'sep_actual_cents')
        + get(this, 'oct_actual_cents')
        + get(this, 'nov_actual_cents')
        + get(this, 'dec_actual_cents');
    },
  ),
  tot_actual_str: computed('tot_actual_cents', function() {
    return `$${(get(this, 'tot_actual_cents') / 100).toFixed(2)}`;
  }),
  tot_alert: computed('tot_actual_cents', 'tot_budget_cents', function() {
    return get(this, 'tot_actual_cents') > get(this, 'tot_budget_cents');
  }),
  tot_budget_cents: computed(
    'apr_budget_cents',
    'aug_budget_cents',
    'dec_budget_cents',
    'feb_budget_cents',
    'mar_budget_cents',
    'may_budget_cents',
    'jan_budget_cents',
    'jul_budget_cents',
    'jun_budget_cents',
    'nov_budget_cents',
    'oct_budget_cents',
    'sep_budget_cents',
    function() {
      return get(this, 'jan_budget_cents')
        + get(this, 'feb_budget_cents')
        + get(this, 'mar_budget_cents')
        + get(this, 'apr_budget_cents')
        + get(this, 'may_budget_cents')
        + get(this, 'jun_budget_cents')
        + get(this, 'jul_budget_cents')
        + get(this, 'aug_budget_cents')
        + get(this, 'sep_budget_cents')
        + get(this, 'oct_budget_cents')
        + get(this, 'nov_budget_cents')
        + get(this, 'dec_budget_cents');
    },
  ),
  tot_budget_str: computed('tot_budget_cents', function() {
    return `$${(get(this, 'tot_budget_cents') / 100).toFixed(2)}`;
  }),
  tot_diff_str: computed('tot_actual_cents', 'tot_budget_cents', function() {
    return `$${((get(this, 'tot_budget_cents') - get(this, 'tot_actual_cents')) / 100).toFixed(2)}`;
  }),
});
