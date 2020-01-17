import { setupTest } from 'ember-qunit';
import { get, set } from '@ember/object';
import { module, test } from 'qunit';

module('Unit | Model | subcategory annual report', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    assert.ok(model);
  });

  test('should have correct apr_actual_str when apr_actual_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 0);
    assert.equal(get(model, 'apr_actual_str'), '-');
  });

  test('should have correct apr_actual_str when apr_actual_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 500);
    assert.equal(get(model, 'apr_actual_str'), '$5.00');
  });

  test('should have correct apr_actual_str when apr_actual_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 12345);
    assert.equal(get(model, 'apr_actual_str'), '$123.45');
  });

  test('should have apr_alert=false when apr_actual_cents < apr_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 1);
    set(model, 'apr_budget_cents', 2);
    assert.equal(get(model, 'apr_alert'), false);
  });

  test('should have apr_alert=false when apr_actual_cents == apr_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 1);
    set(model, 'apr_budget_cents', 1);
    assert.equal(get(model, 'apr_alert'), false);
  });

  test('should have apr_alert=true when apr_actual_cents > apr_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 2);
    set(model, 'apr_budget_cents', 1);
    assert.equal(get(model, 'apr_alert'), true);
  });

  test('should have correct apr_budget_str when apr_budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_budget_cents', 0);
    assert.equal(get(model, 'apr_budget_str'), '-');
  });

  test('should have correct apr_budget_str when apr_budget_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_budget_cents', 500);
    assert.equal(get(model, 'apr_budget_str'), '$5.00');
  });

  test('should have correct apr_budget_str when apr_budget_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_budget_cents', 12345);
    assert.equal(get(model, 'apr_budget_str'), '$123.45');
  });

  test('should have correct apr_diff_str when apr_actual_cents=0 and apr_budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 0);
    set(model, 'apr_budget_cents', 0);
    assert.equal(get(model, 'apr_diff_str'), '-');
  });

  test('should have correct apr_diff_str when apr_actual_cents=500 and apr_budget_cents=1000', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 500);
    set(model, 'apr_budget_cents', 1000);
    assert.equal(get(model, 'apr_diff_str'), '$5.00');
  });

  test('should have correct apr_diff_str when apr_actual_cents=1000 and apr_budget_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 1000);
    set(model, 'apr_budget_cents', 500);
    assert.equal(get(model, 'apr_diff_str'), '$-5.00');
  });

  test('should have correct apr_diff_str when apr_actual_cents=11560 and apr_budget_cents=33534', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 11560);
    set(model, 'apr_budget_cents', 33534);
    assert.equal(get(model, 'apr_diff_str'), '$219.74');
  });

  test('should have correct aug_actual_str when aug_actual_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'aug_actual_cents', 0);
    assert.equal(get(model, 'aug_actual_str'), '-');
  });

  test('should have correct aug_actual_str when aug_actual_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'aug_actual_cents', 500);
    assert.equal(get(model, 'aug_actual_str'), '$5.00');
  });

  test('should have correct aug_actual_str when aug_actual_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'aug_actual_cents', 12345);
    assert.equal(get(model, 'aug_actual_str'), '$123.45');
  });

  test('should have aug_alert=false when aug_actual_cents < aug_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'aug_actual_cents', 1);
    set(model, 'aug_budget_cents', 2);
    assert.equal(get(model, 'aug_alert'), false);
  });

  test('should have aug_alert=false when aug_actual_cents == aug_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'aug_actual_cents', 1);
    set(model, 'aug_budget_cents', 1);
    assert.equal(get(model, 'aug_alert'), false);
  });

  test('should have aug_alert=true when aug_actual_cents > aug_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'aug_actual_cents', 2);
    set(model, 'aug_budget_cents', 1);
    assert.equal(get(model, 'aug_alert'), true);
  });

  test('should have correct aug_budget_str when aug_budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'aug_budget_cents', 0);
    assert.equal(get(model, 'aug_budget_str'), '-');
  });

  test('should have correct aug_budget_str when aug_budget_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'aug_budget_cents', 500);
    assert.equal(get(model, 'aug_budget_str'), '$5.00');
  });

  test('should have correct aug_budget_str when aug_budget_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'aug_budget_cents', 12345);
    assert.equal(get(model, 'aug_budget_str'), '$123.45');
  });

  test('should have correct aug_diff_str when aug_actual_cents=0 and aug_budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'aug_actual_cents', 0);
    set(model, 'aug_budget_cents', 0);
    assert.equal(get(model, 'aug_diff_str'), '-');
  });

  test('should have correct aug_diff_str when aug_actual_cents=500 and aug_budget_cents=1000', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'aug_actual_cents', 500);
    set(model, 'aug_budget_cents', 1000);
    assert.equal(get(model, 'aug_diff_str'), '$5.00');
  });

  test('should have correct aug_diff_str when aug_actual_cents=1000 and aug_budget_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'aug_actual_cents', 1000);
    set(model, 'aug_budget_cents', 500);
    assert.equal(get(model, 'aug_diff_str'), '$-5.00');
  });

  test('should have correct aug_diff_str when aug_actual_cents=11560 and aug_budget_cents=33534', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'aug_actual_cents', 11560);
    set(model, 'aug_budget_cents', 33534);
    assert.equal(get(model, 'aug_diff_str'), '$219.74');
  });

  test('should have correct dec_actual_str when dec_actual_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'dec_actual_cents', 0);
    assert.equal(get(model, 'dec_actual_str'), '-');
  });

  test('should have correct dec_actual_str when dec_actual_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'dec_actual_cents', 500);
    assert.equal(get(model, 'dec_actual_str'), '$5.00');
  });

  test('should have correct dec_actual_str when dec_actual_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'dec_actual_cents', 12345);
    assert.equal(get(model, 'dec_actual_str'), '$123.45');
  });

  test('should have dec_alert=false when dec_actual_cents < dec_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'dec_actual_cents', 1);
    set(model, 'dec_budget_cents', 2);
    assert.equal(get(model, 'dec_alert'), false);
  });

  test('should have dec_alert=false when dec_actual_cents == dec_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'dec_actual_cents', 1);
    set(model, 'dec_budget_cents', 1);
    assert.equal(get(model, 'dec_alert'), false);
  });

  test('should have dec_alert=true when dec_actual_cents > dec_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'dec_actual_cents', 2);
    set(model, 'dec_budget_cents', 1);
    assert.equal(get(model, 'dec_alert'), true);
  });

  test('should have correct dec_budget_str when dec_budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'dec_budget_cents', 0);
    assert.equal(get(model, 'dec_budget_str'), '-');
  });

  test('should have correct dec_budget_str when dec_budget_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'dec_budget_cents', 500);
    assert.equal(get(model, 'dec_budget_str'), '$5.00');
  });

  test('should have correct dec_budget_str when dec_budget_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'dec_budget_cents', 12345);
    assert.equal(get(model, 'dec_budget_str'), '$123.45');
  });

  test('should have correct dec_diff_str when dec_actual_cents=0 and dec_budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'dec_actual_cents', 0);
    set(model, 'dec_budget_cents', 0);
    assert.equal(get(model, 'dec_diff_str'), '-');
  });

  test('should have correct dec_diff_str when dec_actual_cents=500 and dec_budget_cents=1000', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'dec_actual_cents', 500);
    set(model, 'dec_budget_cents', 1000);
    assert.equal(get(model, 'dec_diff_str'), '$5.00');
  });

  test('should have correct dec_diff_str when dec_actual_cents=1000 and dec_budget_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'dec_actual_cents', 1000);
    set(model, 'dec_budget_cents', 500);
    assert.equal(get(model, 'dec_diff_str'), '$-5.00');
  });

  test('should have correct dec_diff_str when dec_actual_cents=11560 and dec_budget_cents=33534', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'dec_actual_cents', 11560);
    set(model, 'dec_budget_cents', 33534);
    assert.equal(get(model, 'dec_diff_str'), '$219.74');
  });

  test('should have correct feb_actual_str when feb_actual_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'feb_actual_cents', 0);
    assert.equal(get(model, 'feb_actual_str'), '-');
  });

  test('should have correct feb_actual_str when feb_actual_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'feb_actual_cents', 500);
    assert.equal(get(model, 'feb_actual_str'), '$5.00');
  });

  test('should have correct feb_actual_str when feb_actual_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'feb_actual_cents', 12345);
    assert.equal(get(model, 'feb_actual_str'), '$123.45');
  });

  test('should have feb_alert=false when feb_actual_cents < feb_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'feb_actual_cents', 1);
    set(model, 'feb_budget_cents', 2);
    assert.equal(get(model, 'feb_alert'), false);
  });

  test('should have feb_alert=false when feb_actual_cents == feb_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'feb_actual_cents', 1);
    set(model, 'feb_budget_cents', 1);
    assert.equal(get(model, 'feb_alert'), false);
  });

  test('should have feb_alert=true when feb_actual_cents > feb_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'feb_actual_cents', 2);
    set(model, 'feb_budget_cents', 1);
    assert.equal(get(model, 'feb_alert'), true);
  });

  test('should have correct feb_budget_str when feb_budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'feb_budget_cents', 0);
    assert.equal(get(model, 'feb_budget_str'), '-');
  });

  test('should have correct feb_budget_str when feb_budget_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'feb_budget_cents', 500);
    assert.equal(get(model, 'feb_budget_str'), '$5.00');
  });

  test('should have correct feb_budget_str when feb_budget_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'feb_budget_cents', 12345);
    assert.equal(get(model, 'feb_budget_str'), '$123.45');
  });

  test('should have correct feb_diff_str when feb_actual_cents=0 and feb_budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'feb_actual_cents', 0);
    set(model, 'feb_budget_cents', 0);
    assert.equal(get(model, 'feb_diff_str'), '-');
  });

  test('should have correct feb_diff_str when feb_actual_cents=500 and feb_budget_cents=1000', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'feb_actual_cents', 500);
    set(model, 'feb_budget_cents', 1000);
    assert.equal(get(model, 'feb_diff_str'), '$5.00');
  });

  test('should have correct feb_diff_str when feb_actual_cents=1000 and feb_budget_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'feb_actual_cents', 1000);
    set(model, 'feb_budget_cents', 500);
    assert.equal(get(model, 'feb_diff_str'), '$-5.00');
  });

  test('should have correct feb_diff_str when feb_actual_cents=11560 and feb_budget_cents=33534', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'feb_actual_cents', 11560);
    set(model, 'feb_budget_cents', 33534);
    assert.equal(get(model, 'feb_diff_str'), '$219.74');
  });

  test('should have correct mar_actual_str when mar_actual_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'mar_actual_cents', 0);
    assert.equal(get(model, 'mar_actual_str'), '-');
  });

  test('should have correct mar_actual_str when mar_actual_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'mar_actual_cents', 500);
    assert.equal(get(model, 'mar_actual_str'), '$5.00');
  });

  test('should have correct mar_actual_str when mar_actual_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'mar_actual_cents', 12345);
    assert.equal(get(model, 'mar_actual_str'), '$123.45');
  });

  test('should have mar_alert=false when mar_actual_cents < mar_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'mar_actual_cents', 1);
    set(model, 'mar_budget_cents', 2);
    assert.equal(get(model, 'mar_alert'), false);
  });

  test('should have mar_alert=false when mar_actual_cents == mar_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'mar_actual_cents', 1);
    set(model, 'mar_budget_cents', 1);
    assert.equal(get(model, 'mar_alert'), false);
  });

  test('should have mar_alert=true when mar_actual_cents > mar_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'mar_actual_cents', 2);
    set(model, 'mar_budget_cents', 1);
    assert.equal(get(model, 'mar_alert'), true);
  });

  test('should have correct mar_budget_str when mar_budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'mar_budget_cents', 0);
    assert.equal(get(model, 'mar_budget_str'), '-');
  });

  test('should have correct mar_budget_str when mar_budget_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'mar_budget_cents', 500);
    assert.equal(get(model, 'mar_budget_str'), '$5.00');
  });

  test('should have correct mar_budget_str when mar_budget_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'mar_budget_cents', 12345);
    assert.equal(get(model, 'mar_budget_str'), '$123.45');
  });

  test('should have correct mar_diff_str when mar_actual_cents=0 and mar_budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'mar_actual_cents', 0);
    set(model, 'mar_budget_cents', 0);
    assert.equal(get(model, 'mar_diff_str'), '-');
  });

  test('should have correct mar_diff_str when mar_actual_cents=500 and mar_budget_cents=1000', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'mar_actual_cents', 500);
    set(model, 'mar_budget_cents', 1000);
    assert.equal(get(model, 'mar_diff_str'), '$5.00');
  });

  test('should have correct mar_diff_str when mar_actual_cents=1000 and mar_budget_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'mar_actual_cents', 1000);
    set(model, 'mar_budget_cents', 500);
    assert.equal(get(model, 'mar_diff_str'), '$-5.00');
  });

  test('should have correct mar_diff_str when mar_actual_cents=11560 and mar_budget_cents=33534', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'mar_actual_cents', 11560);
    set(model, 'mar_budget_cents', 33534);
    assert.equal(get(model, 'mar_diff_str'), '$219.74');
  });

  test('should have correct may_actual_str when may_actual_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'may_actual_cents', 0);
    assert.equal(get(model, 'may_actual_str'), '-');
  });

  test('should have correct may_actual_str when may_actual_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'may_actual_cents', 500);
    assert.equal(get(model, 'may_actual_str'), '$5.00');
  });

  test('should have correct may_actual_str when may_actual_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'may_actual_cents', 12345);
    assert.equal(get(model, 'may_actual_str'), '$123.45');
  });

  test('should have may_alert=false when may_actual_cents < may_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'may_actual_cents', 1);
    set(model, 'may_budget_cents', 2);
    assert.equal(get(model, 'may_alert'), false);
  });

  test('should have may_alert=false when may_actual_cents == may_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'may_actual_cents', 1);
    set(model, 'may_budget_cents', 1);
    assert.equal(get(model, 'may_alert'), false);
  });

  test('should have may_alert=true when may_actual_cents > may_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'may_actual_cents', 2);
    set(model, 'may_budget_cents', 1);
    assert.equal(get(model, 'may_alert'), true);
  });

  test('should have correct may_budget_str when may_budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'may_budget_cents', 0);
    assert.equal(get(model, 'may_budget_str'), '-');
  });

  test('should have correct may_budget_str when may_budget_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'may_budget_cents', 500);
    assert.equal(get(model, 'may_budget_str'), '$5.00');
  });

  test('should have correct may_budget_str when may_budget_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'may_budget_cents', 12345);
    assert.equal(get(model, 'may_budget_str'), '$123.45');
  });

  test('should have correct may_diff_str when may_actual_cents=0 and may_budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'may_actual_cents', 0);
    set(model, 'may_budget_cents', 0);
    assert.equal(get(model, 'may_diff_str'), '-');
  });

  test('should have correct may_diff_str when may_actual_cents=500 and may_budget_cents=1000', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'may_actual_cents', 500);
    set(model, 'may_budget_cents', 1000);
    assert.equal(get(model, 'may_diff_str'), '$5.00');
  });

  test('should have correct may_diff_str when may_actual_cents=1000 and may_budget_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'may_actual_cents', 1000);
    set(model, 'may_budget_cents', 500);
    assert.equal(get(model, 'may_diff_str'), '$-5.00');
  });

  test('should have correct may_diff_str when may_actual_cents=11560 and may_budget_cents=33534', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'may_actual_cents', 11560);
    set(model, 'may_budget_cents', 33534);
    assert.equal(get(model, 'may_diff_str'), '$219.74');
  });

  test('should have correct jan_actual_str when jan_actual_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jan_actual_cents', 0);
    assert.equal(get(model, 'jan_actual_str'), '-');
  });

  test('should have correct jan_actual_str when jan_actual_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jan_actual_cents', 500);
    assert.equal(get(model, 'jan_actual_str'), '$5.00');
  });

  test('should have correct jan_actual_str when jan_actual_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jan_actual_cents', 12345);
    assert.equal(get(model, 'jan_actual_str'), '$123.45');
  });

  test('should have jan_alert=false when jan_actual_cents < jan_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jan_actual_cents', 1);
    set(model, 'jan_budget_cents', 2);
    assert.equal(get(model, 'jan_alert'), false);
  });

  test('should have jan_alert=false when jan_actual_cents == jan_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jan_actual_cents', 1);
    set(model, 'jan_budget_cents', 1);
    assert.equal(get(model, 'jan_alert'), false);
  });

  test('should have jan_alert=true when jan_actual_cents > jan_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jan_actual_cents', 2);
    set(model, 'jan_budget_cents', 1);
    assert.equal(get(model, 'jan_alert'), true);
  });

  test('should have correct jan_budget_str when jan_budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jan_budget_cents', 0);
    assert.equal(get(model, 'jan_budget_str'), '-');
  });

  test('should have correct jan_budget_str when jan_budget_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jan_budget_cents', 500);
    assert.equal(get(model, 'jan_budget_str'), '$5.00');
  });

  test('should have correct jan_budget_str when jan_budget_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jan_budget_cents', 12345);
    assert.equal(get(model, 'jan_budget_str'), '$123.45');
  });

  test('should have correct jan_diff_str when jan_actual_cents=0 and jan_budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jan_actual_cents', 0);
    set(model, 'jan_budget_cents', 0);
    assert.equal(get(model, 'jan_diff_str'), '-');
  });

  test('should have correct jan_diff_str when jan_actual_cents=500 and jan_budget_cents=1000', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jan_actual_cents', 500);
    set(model, 'jan_budget_cents', 1000);
    assert.equal(get(model, 'jan_diff_str'), '$5.00');
  });

  test('should have correct jan_diff_str when jan_actual_cents=1000 and jan_budget_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jan_actual_cents', 1000);
    set(model, 'jan_budget_cents', 500);
    assert.equal(get(model, 'jan_diff_str'), '$-5.00');
  });

  test('should have correct jan_diff_str when jan_actual_cents=11560 and jan_budget_cents=33534', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jan_actual_cents', 11560);
    set(model, 'jan_budget_cents', 33534);
    assert.equal(get(model, 'jan_diff_str'), '$219.74');
  });

  test('should have correct jul_actual_str when jul_actual_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jul_actual_cents', 0);
    assert.equal(get(model, 'jul_actual_str'), '-');
  });

  test('should have correct jul_actual_str when jul_actual_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jul_actual_cents', 500);
    assert.equal(get(model, 'jul_actual_str'), '$5.00');
  });

  test('should have correct jul_actual_str when jul_actual_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jul_actual_cents', 12345);
    assert.equal(get(model, 'jul_actual_str'), '$123.45');
  });

  test('should have jul_alert=false when jul_actual_cents < jul_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jul_actual_cents', 1);
    set(model, 'jul_budget_cents', 2);
    assert.equal(get(model, 'jul_alert'), false);
  });

  test('should have jul_alert=false when jul_actual_cents == jul_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jul_actual_cents', 1);
    set(model, 'jul_budget_cents', 1);
    assert.equal(get(model, 'jul_alert'), false);
  });

  test('should have jul_alert=true when jul_actual_cents > jul_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jul_actual_cents', 2);
    set(model, 'jul_budget_cents', 1);
    assert.equal(get(model, 'jul_alert'), true);
  });

  test('should have correct jul_budget_str when jul_budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jul_budget_cents', 0);
    assert.equal(get(model, 'jul_budget_str'), '-');
  });

  test('should have correct jul_budget_str when jul_budget_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jul_budget_cents', 500);
    assert.equal(get(model, 'jul_budget_str'), '$5.00');
  });

  test('should have correct jul_budget_str when jul_budget_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jul_budget_cents', 12345);
    assert.equal(get(model, 'jul_budget_str'), '$123.45');
  });

  test('should have correct jul_diff_str when jul_actual_cents=0 and jul_budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jul_actual_cents', 0);
    set(model, 'jul_budget_cents', 0);
    assert.equal(get(model, 'jul_diff_str'), '-');
  });

  test('should have correct jul_diff_str when jul_actual_cents=500 and jul_budget_cents=1000', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jul_actual_cents', 500);
    set(model, 'jul_budget_cents', 1000);
    assert.equal(get(model, 'jul_diff_str'), '$5.00');
  });

  test('should have correct jul_diff_str when jul_actual_cents=1000 and jul_budget_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jul_actual_cents', 1000);
    set(model, 'jul_budget_cents', 500);
    assert.equal(get(model, 'jul_diff_str'), '$-5.00');
  });

  test('should have correct jul_diff_str when jul_actual_cents=11560 and jul_budget_cents=33534', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jul_actual_cents', 11560);
    set(model, 'jul_budget_cents', 33534);
    assert.equal(get(model, 'jul_diff_str'), '$219.74');
  });

  test('should have correct jun_actual_str when jun_actual_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jun_actual_cents', 0);
    assert.equal(get(model, 'jun_actual_str'), '-');
  });

  test('should have correct jun_actual_str when jun_actual_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jun_actual_cents', 500);
    assert.equal(get(model, 'jun_actual_str'), '$5.00');
  });

  test('should have correct jun_actual_str when jun_actual_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jun_actual_cents', 12345);
    assert.equal(get(model, 'jun_actual_str'), '$123.45');
  });

  test('should have jun_alert=false when jun_actual_cents < jun_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jun_actual_cents', 1);
    set(model, 'jun_budget_cents', 2);
    assert.equal(get(model, 'jun_alert'), false);
  });

  test('should have jun_alert=false when jun_actual_cents == jun_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jun_actual_cents', 1);
    set(model, 'jun_budget_cents', 1);
    assert.equal(get(model, 'jun_alert'), false);
  });

  test('should have jun_alert=true when jun_actual_cents > jun_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jun_actual_cents', 2);
    set(model, 'jun_budget_cents', 1);
    assert.equal(get(model, 'jun_alert'), true);
  });

  test('should have correct jun_budget_str when jun_budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jun_budget_cents', 0);
    assert.equal(get(model, 'jun_budget_str'), '-');
  });

  test('should have correct jun_budget_str when jun_budget_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jun_budget_cents', 500);
    assert.equal(get(model, 'jun_budget_str'), '$5.00');
  });

  test('should have correct jun_budget_str when jun_budget_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jun_budget_cents', 12345);
    assert.equal(get(model, 'jun_budget_str'), '$123.45');
  });

  test('should have correct jun_diff_str when jun_actual_cents=0 and jun_budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jun_actual_cents', 0);
    set(model, 'jun_budget_cents', 0);
    assert.equal(get(model, 'jun_diff_str'), '-');
  });

  test('should have correct jun_diff_str when jun_actual_cents=500 and jun_budget_cents=1000', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jun_actual_cents', 500);
    set(model, 'jun_budget_cents', 1000);
    assert.equal(get(model, 'jun_diff_str'), '$5.00');
  });

  test('should have correct jun_diff_str when jun_actual_cents=1000 and jun_budget_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jun_actual_cents', 1000);
    set(model, 'jun_budget_cents', 500);
    assert.equal(get(model, 'jun_diff_str'), '$-5.00');
  });

  test('should have correct jun_diff_str when jun_actual_cents=11560 and jun_budget_cents=33534', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'jun_actual_cents', 11560);
    set(model, 'jun_budget_cents', 33534);
    assert.equal(get(model, 'jun_diff_str'), '$219.74');
  });

  test('should have correct nov_actual_str when nov_actual_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'nov_actual_cents', 0);
    assert.equal(get(model, 'nov_actual_str'), '-');
  });

  test('should have correct nov_actual_str when nov_actual_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'nov_actual_cents', 500);
    assert.equal(get(model, 'nov_actual_str'), '$5.00');
  });

  test('should have correct nov_actual_str when nov_actual_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'nov_actual_cents', 12345);
    assert.equal(get(model, 'nov_actual_str'), '$123.45');
  });

  test('should have nov_alert=false when nov_actual_cents < nov_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'nov_actual_cents', 1);
    set(model, 'nov_budget_cents', 2);
    assert.equal(get(model, 'nov_alert'), false);
  });

  test('should have nov_alert=false when nov_actual_cents == nov_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'nov_actual_cents', 1);
    set(model, 'nov_budget_cents', 1);
    assert.equal(get(model, 'nov_alert'), false);
  });

  test('should have nov_alert=true when nov_actual_cents > nov_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'nov_actual_cents', 2);
    set(model, 'nov_budget_cents', 1);
    assert.equal(get(model, 'nov_alert'), true);
  });

  test('should have correct nov_budget_str when nov_budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'nov_budget_cents', 0);
    assert.equal(get(model, 'nov_budget_str'), '-');
  });

  test('should have correct nov_budget_str when nov_budget_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'nov_budget_cents', 500);
    assert.equal(get(model, 'nov_budget_str'), '$5.00');
  });

  test('should have correct nov_budget_str when nov_budget_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'nov_budget_cents', 12345);
    assert.equal(get(model, 'nov_budget_str'), '$123.45');
  });

  test('should have correct nov_diff_str when nov_actual_cents=0 and nov_budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'nov_actual_cents', 0);
    set(model, 'nov_budget_cents', 0);
    assert.equal(get(model, 'nov_diff_str'), '-');
  });

  test('should have correct nov_diff_str when nov_actual_cents=500 and nov_budget_cents=1000', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'nov_actual_cents', 500);
    set(model, 'nov_budget_cents', 1000);
    assert.equal(get(model, 'nov_diff_str'), '$5.00');
  });

  test('should have correct nov_diff_str when nov_actual_cents=1000 and nov_budget_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'nov_actual_cents', 1000);
    set(model, 'nov_budget_cents', 500);
    assert.equal(get(model, 'nov_diff_str'), '$-5.00');
  });

  test('should have correct nov_diff_str when nov_actual_cents=11560 and nov_budget_cents=33534', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'nov_actual_cents', 11560);
    set(model, 'nov_budget_cents', 33534);
    assert.equal(get(model, 'nov_diff_str'), '$219.74');
  });

  test('should have correct oct_actual_str when oct_actual_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'oct_actual_cents', 0);
    assert.equal(get(model, 'oct_actual_str'), '-');
  });

  test('should have correct oct_actual_str when oct_actual_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'oct_actual_cents', 500);
    assert.equal(get(model, 'oct_actual_str'), '$5.00');
  });

  test('should have correct oct_actual_str when oct_actual_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'oct_actual_cents', 12345);
    assert.equal(get(model, 'oct_actual_str'), '$123.45');
  });

  test('should have oct_alert=false when oct_actual_cents < oct_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'oct_actual_cents', 1);
    set(model, 'oct_budget_cents', 2);
    assert.equal(get(model, 'oct_alert'), false);
  });

  test('should have oct_alert=false when oct_actual_cents == oct_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'oct_actual_cents', 1);
    set(model, 'oct_budget_cents', 1);
    assert.equal(get(model, 'oct_alert'), false);
  });

  test('should have oct_alert=true when oct_actual_cents > oct_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'oct_actual_cents', 2);
    set(model, 'oct_budget_cents', 1);
    assert.equal(get(model, 'oct_alert'), true);
  });

  test('should have correct oct_budget_str when oct_budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'oct_budget_cents', 0);
    assert.equal(get(model, 'oct_budget_str'), '-');
  });

  test('should have correct oct_budget_str when oct_budget_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'oct_budget_cents', 500);
    assert.equal(get(model, 'oct_budget_str'), '$5.00');
  });

  test('should have correct oct_budget_str when oct_budget_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'oct_budget_cents', 12345);
    assert.equal(get(model, 'oct_budget_str'), '$123.45');
  });

  test('should have correct oct_diff_str when oct_actual_cents=0 and oct_budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'oct_actual_cents', 0);
    set(model, 'oct_budget_cents', 0);
    assert.equal(get(model, 'oct_diff_str'), '-');
  });

  test('should have correct oct_diff_str when oct_actual_cents=500 and oct_budget_cents=1000', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'oct_actual_cents', 500);
    set(model, 'oct_budget_cents', 1000);
    assert.equal(get(model, 'oct_diff_str'), '$5.00');
  });

  test('should have correct oct_diff_str when oct_actual_cents=1000 and oct_budget_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'oct_actual_cents', 1000);
    set(model, 'oct_budget_cents', 500);
    assert.equal(get(model, 'oct_diff_str'), '$-5.00');
  });

  test('should have correct oct_diff_str when oct_actual_cents=11560 and oct_budget_cents=33534', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'oct_actual_cents', 11560);
    set(model, 'oct_budget_cents', 33534);
    assert.equal(get(model, 'oct_diff_str'), '$219.74');
  });

  test('should have correct sep_actual_str when sep_actual_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'sep_actual_cents', 0);
    assert.equal(get(model, 'sep_actual_str'), '-');
  });

  test('should have correct sep_actual_str when sep_actual_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'sep_actual_cents', 500);
    assert.equal(get(model, 'sep_actual_str'), '$5.00');
  });

  test('should have correct sep_actual_str when sep_actual_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'sep_actual_cents', 12345);
    assert.equal(get(model, 'sep_actual_str'), '$123.45');
  });

  test('should have sep_alert=false when sep_actual_cents < sep_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'sep_actual_cents', 1);
    set(model, 'sep_budget_cents', 2);
    assert.equal(get(model, 'sep_alert'), false);
  });

  test('should have sep_alert=false when sep_actual_cents == sep_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'sep_actual_cents', 1);
    set(model, 'sep_budget_cents', 1);
    assert.equal(get(model, 'sep_alert'), false);
  });

  test('should have sep_alert=true when sep_actual_cents > sep_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'sep_actual_cents', 2);
    set(model, 'sep_budget_cents', 1);
    assert.equal(get(model, 'sep_alert'), true);
  });

  test('should have correct sep_budget_str when sep_budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'sep_budget_cents', 0);
    assert.equal(get(model, 'sep_budget_str'), '-');
  });

  test('should have correct sep_budget_str when sep_budget_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'sep_budget_cents', 500);
    assert.equal(get(model, 'sep_budget_str'), '$5.00');
  });

  test('should have correct sep_budget_str when sep_budget_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'sep_budget_cents', 12345);
    assert.equal(get(model, 'sep_budget_str'), '$123.45');
  });

  test('should have correct sep_diff_str when sep_actual_cents=0 and sep_budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'sep_actual_cents', 0);
    set(model, 'sep_budget_cents', 0);
    assert.equal(get(model, 'sep_diff_str'), '-');
  });

  test('should have correct sep_diff_str when sep_actual_cents=500 and sep_budget_cents=1000', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'sep_actual_cents', 500);
    set(model, 'sep_budget_cents', 1000);
    assert.equal(get(model, 'sep_diff_str'), '$5.00');
  });

  test('should have correct sep_diff_str when sep_actual_cents=1000 and sep_budget_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'sep_actual_cents', 1000);
    set(model, 'sep_budget_cents', 500);
    assert.equal(get(model, 'sep_diff_str'), '$-5.00');
  });

  test('should have correct sep_diff_str when sep_actual_cents=11560 and sep_budget_cents=33534', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'sep_actual_cents', 11560);
    set(model, 'sep_budget_cents', 33534);
    assert.equal(get(model, 'sep_diff_str'), '$219.74');
  });

  test('should have correct tot_actual_cents when all actual cents are 0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 0);
    set(model, 'aug_actual_cents', 0);
    set(model, 'dec_actual_cents', 0);
    set(model, 'feb_actual_cents', 0);
    set(model, 'mar_actual_cents', 0);
    set(model, 'may_actual_cents', 0);
    set(model, 'jan_actual_cents', 0);
    set(model, 'jul_actual_cents', 0);
    set(model, 'jun_actual_cents', 0);
    set(model, 'nov_actual_cents', 0);
    set(model, 'oct_actual_cents', 0);
    set(model, 'sep_actual_cents', 0);
    assert.equal(get(model, 'tot_actual_cents'), 0);
  });

  test('should add apr_actual_cents to tot_actual_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 500);
    set(model, 'aug_actual_cents', 0);
    set(model, 'dec_actual_cents', 0);
    set(model, 'feb_actual_cents', 0);
    set(model, 'mar_actual_cents', 0);
    set(model, 'may_actual_cents', 0);
    set(model, 'jan_actual_cents', 0);
    set(model, 'jul_actual_cents', 0);
    set(model, 'jun_actual_cents', 0);
    set(model, 'nov_actual_cents', 0);
    set(model, 'oct_actual_cents', 0);
    set(model, 'sep_actual_cents', 0);
    assert.equal(get(model, 'tot_actual_cents'), 500);
  });

  test('should add aug_actual_cents to tot_actual_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 0);
    set(model, 'aug_actual_cents', 500);
    set(model, 'dec_actual_cents', 0);
    set(model, 'feb_actual_cents', 0);
    set(model, 'mar_actual_cents', 0);
    set(model, 'may_actual_cents', 0);
    set(model, 'jan_actual_cents', 0);
    set(model, 'jul_actual_cents', 0);
    set(model, 'jun_actual_cents', 0);
    set(model, 'nov_actual_cents', 0);
    set(model, 'oct_actual_cents', 0);
    set(model, 'sep_actual_cents', 0);
    assert.equal(get(model, 'tot_actual_cents'), 500);
  });

  test('should add dec_actual_cents to tot_actual_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 0);
    set(model, 'aug_actual_cents', 0);
    set(model, 'dec_actual_cents', 500);
    set(model, 'feb_actual_cents', 0);
    set(model, 'mar_actual_cents', 0);
    set(model, 'may_actual_cents', 0);
    set(model, 'jan_actual_cents', 0);
    set(model, 'jul_actual_cents', 0);
    set(model, 'jun_actual_cents', 0);
    set(model, 'nov_actual_cents', 0);
    set(model, 'oct_actual_cents', 0);
    set(model, 'sep_actual_cents', 0);
    assert.equal(get(model, 'tot_actual_cents'), 500);
  });

  test('should add feb_actual_cents to tot_actual_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 0);
    set(model, 'aug_actual_cents', 0);
    set(model, 'dec_actual_cents', 0);
    set(model, 'feb_actual_cents', 500);
    set(model, 'mar_actual_cents', 0);
    set(model, 'may_actual_cents', 0);
    set(model, 'jan_actual_cents', 0);
    set(model, 'jul_actual_cents', 0);
    set(model, 'jun_actual_cents', 0);
    set(model, 'nov_actual_cents', 0);
    set(model, 'oct_actual_cents', 0);
    set(model, 'sep_actual_cents', 0);
    assert.equal(get(model, 'tot_actual_cents'), 500);
  });

  test('should add mar_actual_cents to tot_actual_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 0);
    set(model, 'aug_actual_cents', 0);
    set(model, 'dec_actual_cents', 0);
    set(model, 'feb_actual_cents', 0);
    set(model, 'mar_actual_cents', 500);
    set(model, 'may_actual_cents', 0);
    set(model, 'jan_actual_cents', 0);
    set(model, 'jul_actual_cents', 0);
    set(model, 'jun_actual_cents', 0);
    set(model, 'nov_actual_cents', 0);
    set(model, 'oct_actual_cents', 0);
    set(model, 'sep_actual_cents', 0);
    assert.equal(get(model, 'tot_actual_cents'), 500);
  });

  test('should add may_actual_cents to tot_actual_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 0);
    set(model, 'aug_actual_cents', 0);
    set(model, 'dec_actual_cents', 0);
    set(model, 'feb_actual_cents', 0);
    set(model, 'mar_actual_cents', 0);
    set(model, 'may_actual_cents', 500);
    set(model, 'jan_actual_cents', 0);
    set(model, 'jul_actual_cents', 0);
    set(model, 'jun_actual_cents', 0);
    set(model, 'nov_actual_cents', 0);
    set(model, 'oct_actual_cents', 0);
    set(model, 'sep_actual_cents', 0);
    assert.equal(get(model, 'tot_actual_cents'), 500);
  });

  test('should add jan_actual_cents to tot_actual_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 0);
    set(model, 'aug_actual_cents', 0);
    set(model, 'dec_actual_cents', 0);
    set(model, 'feb_actual_cents', 0);
    set(model, 'mar_actual_cents', 0);
    set(model, 'may_actual_cents', 0);
    set(model, 'jan_actual_cents', 500);
    set(model, 'jul_actual_cents', 0);
    set(model, 'jun_actual_cents', 0);
    set(model, 'nov_actual_cents', 0);
    set(model, 'oct_actual_cents', 0);
    set(model, 'sep_actual_cents', 0);
    assert.equal(get(model, 'tot_actual_cents'), 500);
  });

  test('should add jul_actual_cents to tot_actual_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 0);
    set(model, 'aug_actual_cents', 0);
    set(model, 'dec_actual_cents', 0);
    set(model, 'feb_actual_cents', 0);
    set(model, 'mar_actual_cents', 0);
    set(model, 'may_actual_cents', 0);
    set(model, 'jan_actual_cents', 0);
    set(model, 'jul_actual_cents', 500);
    set(model, 'jun_actual_cents', 0);
    set(model, 'nov_actual_cents', 0);
    set(model, 'oct_actual_cents', 0);
    set(model, 'sep_actual_cents', 0);
    assert.equal(get(model, 'tot_actual_cents'), 500);
  });

  test('should add jun_actual_cents to tot_actual_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 0);
    set(model, 'aug_actual_cents', 0);
    set(model, 'dec_actual_cents', 0);
    set(model, 'feb_actual_cents', 0);
    set(model, 'mar_actual_cents', 0);
    set(model, 'may_actual_cents', 0);
    set(model, 'jan_actual_cents', 0);
    set(model, 'jul_actual_cents', 0);
    set(model, 'jun_actual_cents', 500);
    set(model, 'nov_actual_cents', 0);
    set(model, 'oct_actual_cents', 0);
    set(model, 'sep_actual_cents', 0);
    assert.equal(get(model, 'tot_actual_cents'), 500);
  });

  test('should add nov_actual_cents to tot_actual_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 0);
    set(model, 'aug_actual_cents', 0);
    set(model, 'dec_actual_cents', 0);
    set(model, 'feb_actual_cents', 0);
    set(model, 'mar_actual_cents', 0);
    set(model, 'may_actual_cents', 0);
    set(model, 'jan_actual_cents', 0);
    set(model, 'jul_actual_cents', 0);
    set(model, 'jun_actual_cents', 0);
    set(model, 'nov_actual_cents', 500);
    set(model, 'oct_actual_cents', 0);
    set(model, 'sep_actual_cents', 0);
    assert.equal(get(model, 'tot_actual_cents'), 500);
  });

  test('should add oct_actual_cents to tot_actual_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 0);
    set(model, 'aug_actual_cents', 0);
    set(model, 'dec_actual_cents', 0);
    set(model, 'feb_actual_cents', 0);
    set(model, 'mar_actual_cents', 0);
    set(model, 'may_actual_cents', 0);
    set(model, 'jan_actual_cents', 0);
    set(model, 'jul_actual_cents', 0);
    set(model, 'jun_actual_cents', 0);
    set(model, 'nov_actual_cents', 0);
    set(model, 'oct_actual_cents', 500);
    set(model, 'sep_actual_cents', 0);
    assert.equal(get(model, 'tot_actual_cents'), 500);
  });

  test('should add sep_actual_cents to tot_actual_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 0);
    set(model, 'aug_actual_cents', 0);
    set(model, 'dec_actual_cents', 0);
    set(model, 'feb_actual_cents', 0);
    set(model, 'mar_actual_cents', 0);
    set(model, 'may_actual_cents', 0);
    set(model, 'jan_actual_cents', 0);
    set(model, 'jul_actual_cents', 0);
    set(model, 'jun_actual_cents', 0);
    set(model, 'nov_actual_cents', 0);
    set(model, 'oct_actual_cents', 0);
    set(model, 'sep_actual_cents', 500);
    assert.equal(get(model, 'tot_actual_cents'), 500);
  });

  test('should have correct tot_actual_str when tot_actual_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 0);
    set(model, 'aug_actual_cents', 0);
    set(model, 'dec_actual_cents', 0);
    set(model, 'feb_actual_cents', 0);
    set(model, 'mar_actual_cents', 0);
    set(model, 'may_actual_cents', 0);
    set(model, 'jan_actual_cents', 0);
    set(model, 'jul_actual_cents', 0);
    set(model, 'jun_actual_cents', 0);
    set(model, 'nov_actual_cents', 0);
    set(model, 'oct_actual_cents', 0);
    set(model, 'sep_actual_cents', 0);
    assert.equal(get(model, 'tot_actual_str'), '-');
  });

  test('should have correct tot_actual_str when tot_actual_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 500);
    set(model, 'aug_actual_cents', 0);
    set(model, 'dec_actual_cents', 0);
    set(model, 'feb_actual_cents', 0);
    set(model, 'mar_actual_cents', 0);
    set(model, 'may_actual_cents', 0);
    set(model, 'jan_actual_cents', 0);
    set(model, 'jul_actual_cents', 0);
    set(model, 'jun_actual_cents', 0);
    set(model, 'nov_actual_cents', 0);
    set(model, 'oct_actual_cents', 0);
    set(model, 'sep_actual_cents', 0);
    assert.equal(get(model, 'tot_actual_str'), '$5.00');
  });

  test('should have correct tot_actual_str when tot_actual_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 12345);
    set(model, 'aug_actual_cents', 0);
    set(model, 'dec_actual_cents', 0);
    set(model, 'feb_actual_cents', 0);
    set(model, 'mar_actual_cents', 0);
    set(model, 'may_actual_cents', 0);
    set(model, 'jan_actual_cents', 0);
    set(model, 'jul_actual_cents', 0);
    set(model, 'jun_actual_cents', 0);
    set(model, 'nov_actual_cents', 0);
    set(model, 'oct_actual_cents', 0);
    set(model, 'sep_actual_cents', 0);
    assert.equal(get(model, 'tot_actual_str'), '$123.45');
  });

  test('should have correct tot_budget_cents when all budget cents are 0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_budget_cents', 0);
    set(model, 'aug_budget_cents', 0);
    set(model, 'dec_budget_cents', 0);
    set(model, 'feb_budget_cents', 0);
    set(model, 'mar_budget_cents', 0);
    set(model, 'may_budget_cents', 0);
    set(model, 'jan_budget_cents', 0);
    set(model, 'jul_budget_cents', 0);
    set(model, 'jun_budget_cents', 0);
    set(model, 'nov_budget_cents', 0);
    set(model, 'oct_budget_cents', 0);
    set(model, 'sep_budget_cents', 0);
    assert.equal(get(model, 'tot_budget_cents'), 0);
  });

  test('should add apr_budget_cents to tot_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_budget_cents', 500);
    set(model, 'aug_budget_cents', 0);
    set(model, 'dec_budget_cents', 0);
    set(model, 'feb_budget_cents', 0);
    set(model, 'mar_budget_cents', 0);
    set(model, 'may_budget_cents', 0);
    set(model, 'jan_budget_cents', 0);
    set(model, 'jul_budget_cents', 0);
    set(model, 'jun_budget_cents', 0);
    set(model, 'nov_budget_cents', 0);
    set(model, 'oct_budget_cents', 0);
    set(model, 'sep_budget_cents', 0);
    assert.equal(get(model, 'tot_budget_cents'), 500);
  });

  test('should add aug_budget_cents to tot_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_budget_cents', 0);
    set(model, 'aug_budget_cents', 500);
    set(model, 'dec_budget_cents', 0);
    set(model, 'feb_budget_cents', 0);
    set(model, 'mar_budget_cents', 0);
    set(model, 'may_budget_cents', 0);
    set(model, 'jan_budget_cents', 0);
    set(model, 'jul_budget_cents', 0);
    set(model, 'jun_budget_cents', 0);
    set(model, 'nov_budget_cents', 0);
    set(model, 'oct_budget_cents', 0);
    set(model, 'sep_budget_cents', 0);
    assert.equal(get(model, 'tot_budget_cents'), 500);
  });

  test('should add dec_budget_cents to tot_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_budget_cents', 0);
    set(model, 'aug_budget_cents', 0);
    set(model, 'dec_budget_cents', 500);
    set(model, 'feb_budget_cents', 0);
    set(model, 'mar_budget_cents', 0);
    set(model, 'may_budget_cents', 0);
    set(model, 'jan_budget_cents', 0);
    set(model, 'jul_budget_cents', 0);
    set(model, 'jun_budget_cents', 0);
    set(model, 'nov_budget_cents', 0);
    set(model, 'oct_budget_cents', 0);
    set(model, 'sep_budget_cents', 0);
    assert.equal(get(model, 'tot_budget_cents'), 500);
  });

  test('should add feb_budget_cents to tot_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_budget_cents', 0);
    set(model, 'aug_budget_cents', 0);
    set(model, 'dec_budget_cents', 0);
    set(model, 'feb_budget_cents', 500);
    set(model, 'mar_budget_cents', 0);
    set(model, 'may_budget_cents', 0);
    set(model, 'jan_budget_cents', 0);
    set(model, 'jul_budget_cents', 0);
    set(model, 'jun_budget_cents', 0);
    set(model, 'nov_budget_cents', 0);
    set(model, 'oct_budget_cents', 0);
    set(model, 'sep_budget_cents', 0);
    assert.equal(get(model, 'tot_budget_cents'), 500);
  });

  test('should add mar_budget_cents to tot_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_budget_cents', 0);
    set(model, 'aug_budget_cents', 0);
    set(model, 'dec_budget_cents', 0);
    set(model, 'feb_budget_cents', 0);
    set(model, 'mar_budget_cents', 500);
    set(model, 'may_budget_cents', 0);
    set(model, 'jan_budget_cents', 0);
    set(model, 'jul_budget_cents', 0);
    set(model, 'jun_budget_cents', 0);
    set(model, 'nov_budget_cents', 0);
    set(model, 'oct_budget_cents', 0);
    set(model, 'sep_budget_cents', 0);
    assert.equal(get(model, 'tot_budget_cents'), 500);
  });

  test('should add may_budget_cents to tot_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_budget_cents', 0);
    set(model, 'aug_budget_cents', 0);
    set(model, 'dec_budget_cents', 0);
    set(model, 'feb_budget_cents', 0);
    set(model, 'mar_budget_cents', 0);
    set(model, 'may_budget_cents', 500);
    set(model, 'jan_budget_cents', 0);
    set(model, 'jul_budget_cents', 0);
    set(model, 'jun_budget_cents', 0);
    set(model, 'nov_budget_cents', 0);
    set(model, 'oct_budget_cents', 0);
    set(model, 'sep_budget_cents', 0);
    assert.equal(get(model, 'tot_budget_cents'), 500);
  });

  test('should add jan_budget_cents to tot_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_budget_cents', 0);
    set(model, 'aug_budget_cents', 0);
    set(model, 'dec_budget_cents', 0);
    set(model, 'feb_budget_cents', 0);
    set(model, 'mar_budget_cents', 0);
    set(model, 'may_budget_cents', 0);
    set(model, 'jan_budget_cents', 500);
    set(model, 'jul_budget_cents', 0);
    set(model, 'jun_budget_cents', 0);
    set(model, 'nov_budget_cents', 0);
    set(model, 'oct_budget_cents', 0);
    set(model, 'sep_budget_cents', 0);
    assert.equal(get(model, 'tot_budget_cents'), 500);
  });

  test('should add jul_budget_cents to tot_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_budget_cents', 0);
    set(model, 'aug_budget_cents', 0);
    set(model, 'dec_budget_cents', 0);
    set(model, 'feb_budget_cents', 0);
    set(model, 'mar_budget_cents', 0);
    set(model, 'may_budget_cents', 0);
    set(model, 'jan_budget_cents', 0);
    set(model, 'jul_budget_cents', 500);
    set(model, 'jun_budget_cents', 0);
    set(model, 'nov_budget_cents', 0);
    set(model, 'oct_budget_cents', 0);
    set(model, 'sep_budget_cents', 0);
    assert.equal(get(model, 'tot_budget_cents'), 500);
  });

  test('should add jun_budget_cents to tot_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_budget_cents', 0);
    set(model, 'aug_budget_cents', 0);
    set(model, 'dec_budget_cents', 0);
    set(model, 'feb_budget_cents', 0);
    set(model, 'mar_budget_cents', 0);
    set(model, 'may_budget_cents', 0);
    set(model, 'jan_budget_cents', 0);
    set(model, 'jul_budget_cents', 0);
    set(model, 'jun_budget_cents', 500);
    set(model, 'nov_budget_cents', 0);
    set(model, 'oct_budget_cents', 0);
    set(model, 'sep_budget_cents', 0);
    assert.equal(get(model, 'tot_budget_cents'), 500);
  });

  test('should add nov_budget_cents to tot_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_budget_cents', 0);
    set(model, 'aug_budget_cents', 0);
    set(model, 'dec_budget_cents', 0);
    set(model, 'feb_budget_cents', 0);
    set(model, 'mar_budget_cents', 0);
    set(model, 'may_budget_cents', 0);
    set(model, 'jan_budget_cents', 0);
    set(model, 'jul_budget_cents', 0);
    set(model, 'jun_budget_cents', 0);
    set(model, 'nov_budget_cents', 500);
    set(model, 'oct_budget_cents', 0);
    set(model, 'sep_budget_cents', 0);
    assert.equal(get(model, 'tot_budget_cents'), 500);
  });

  test('should add oct_budget_cents to tot_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_budget_cents', 0);
    set(model, 'aug_budget_cents', 0);
    set(model, 'dec_budget_cents', 0);
    set(model, 'feb_budget_cents', 0);
    set(model, 'mar_budget_cents', 0);
    set(model, 'may_budget_cents', 0);
    set(model, 'jan_budget_cents', 0);
    set(model, 'jul_budget_cents', 0);
    set(model, 'jun_budget_cents', 0);
    set(model, 'nov_budget_cents', 0);
    set(model, 'oct_budget_cents', 500);
    set(model, 'sep_budget_cents', 0);
    assert.equal(get(model, 'tot_budget_cents'), 500);
  });

  test('should add sep_budget_cents to tot_budget_cents', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_budget_cents', 0);
    set(model, 'aug_budget_cents', 0);
    set(model, 'dec_budget_cents', 0);
    set(model, 'feb_budget_cents', 0);
    set(model, 'mar_budget_cents', 0);
    set(model, 'may_budget_cents', 0);
    set(model, 'jan_budget_cents', 0);
    set(model, 'jul_budget_cents', 0);
    set(model, 'jun_budget_cents', 0);
    set(model, 'nov_budget_cents', 0);
    set(model, 'oct_budget_cents', 0);
    set(model, 'sep_budget_cents', 500);
    assert.equal(get(model, 'tot_budget_cents'), 500);
  });

  test('should have correct tot_budget_str when tot_budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_budget_cents', 0);
    set(model, 'aug_budget_cents', 0);
    set(model, 'dec_budget_cents', 0);
    set(model, 'feb_budget_cents', 0);
    set(model, 'mar_budget_cents', 0);
    set(model, 'may_budget_cents', 0);
    set(model, 'jan_budget_cents', 0);
    set(model, 'jul_budget_cents', 0);
    set(model, 'jun_budget_cents', 0);
    set(model, 'nov_budget_cents', 0);
    set(model, 'oct_budget_cents', 0);
    set(model, 'sep_budget_cents', 0);
    assert.equal(get(model, 'tot_budget_str'), '-');
  });

  test('should have correct tot_budget_str when tot_budget_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_budget_cents', 500);
    set(model, 'aug_budget_cents', 0);
    set(model, 'dec_budget_cents', 0);
    set(model, 'feb_budget_cents', 0);
    set(model, 'mar_budget_cents', 0);
    set(model, 'may_budget_cents', 0);
    set(model, 'jan_budget_cents', 0);
    set(model, 'jul_budget_cents', 0);
    set(model, 'jun_budget_cents', 0);
    set(model, 'nov_budget_cents', 0);
    set(model, 'oct_budget_cents', 0);
    set(model, 'sep_budget_cents', 0);
    assert.equal(get(model, 'tot_budget_str'), '$5.00');
  });

  test('should have correct tot_budget_str when tot_budget_cents=12345', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_budget_cents', 12345);
    set(model, 'aug_budget_cents', 0);
    set(model, 'dec_budget_cents', 0);
    set(model, 'feb_budget_cents', 0);
    set(model, 'mar_budget_cents', 0);
    set(model, 'may_budget_cents', 0);
    set(model, 'jan_budget_cents', 0);
    set(model, 'jul_budget_cents', 0);
    set(model, 'jun_budget_cents', 0);
    set(model, 'nov_budget_cents', 0);
    set(model, 'oct_budget_cents', 0);
    set(model, 'sep_budget_cents', 0);
    assert.equal(get(model, 'tot_budget_str'), '$123.45');
  });

  test('should have correct tot_diff_str when tot_actual_cents=0 and tot_budget_cents=0', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 0);
    set(model, 'aug_actual_cents', 0);
    set(model, 'dec_actual_cents', 0);
    set(model, 'feb_actual_cents', 0);
    set(model, 'mar_actual_cents', 0);
    set(model, 'may_actual_cents', 0);
    set(model, 'jan_actual_cents', 0);
    set(model, 'jul_actual_cents', 0);
    set(model, 'jun_actual_cents', 0);
    set(model, 'nov_actual_cents', 0);
    set(model, 'oct_actual_cents', 0);
    set(model, 'sep_actual_cents', 0);
    set(model, 'apr_budget_cents', 0);
    set(model, 'aug_budget_cents', 0);
    set(model, 'dec_budget_cents', 0);
    set(model, 'feb_budget_cents', 0);
    set(model, 'mar_budget_cents', 0);
    set(model, 'may_budget_cents', 0);
    set(model, 'jan_budget_cents', 0);
    set(model, 'jul_budget_cents', 0);
    set(model, 'jun_budget_cents', 0);
    set(model, 'nov_budget_cents', 0);
    set(model, 'oct_budget_cents', 0);
    set(model, 'sep_budget_cents', 0);
    assert.equal(get(model, 'tot_diff_str'), '-');
  });

  test('should have correct tot_diff_str when tot_actual_cents=500 and tot_budget_cents=1000', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 500);
    set(model, 'aug_actual_cents', 0);
    set(model, 'dec_actual_cents', 0);
    set(model, 'feb_actual_cents', 0);
    set(model, 'mar_actual_cents', 0);
    set(model, 'may_actual_cents', 0);
    set(model, 'jan_actual_cents', 0);
    set(model, 'jul_actual_cents', 0);
    set(model, 'jun_actual_cents', 0);
    set(model, 'nov_actual_cents', 0);
    set(model, 'oct_actual_cents', 0);
    set(model, 'sep_actual_cents', 0);
    set(model, 'apr_budget_cents', 1000);
    set(model, 'aug_budget_cents', 0);
    set(model, 'dec_budget_cents', 0);
    set(model, 'feb_budget_cents', 0);
    set(model, 'mar_budget_cents', 0);
    set(model, 'may_budget_cents', 0);
    set(model, 'jan_budget_cents', 0);
    set(model, 'jul_budget_cents', 0);
    set(model, 'jun_budget_cents', 0);
    set(model, 'nov_budget_cents', 0);
    set(model, 'oct_budget_cents', 0);
    set(model, 'sep_budget_cents', 0);
    assert.equal(get(model, 'tot_diff_str'), '$5.00');
  });

  test('should have correct tot_diff_str when tot_actual_cents=1000 and tot_budget_cents=500', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 1000);
    set(model, 'aug_actual_cents', 0);
    set(model, 'dec_actual_cents', 0);
    set(model, 'feb_actual_cents', 0);
    set(model, 'mar_actual_cents', 0);
    set(model, 'may_actual_cents', 0);
    set(model, 'jan_actual_cents', 0);
    set(model, 'jul_actual_cents', 0);
    set(model, 'jun_actual_cents', 0);
    set(model, 'nov_actual_cents', 0);
    set(model, 'oct_actual_cents', 0);
    set(model, 'sep_actual_cents', 0);
    set(model, 'apr_budget_cents', 500);
    set(model, 'aug_budget_cents', 0);
    set(model, 'dec_budget_cents', 0);
    set(model, 'feb_budget_cents', 0);
    set(model, 'mar_budget_cents', 0);
    set(model, 'may_budget_cents', 0);
    set(model, 'jan_budget_cents', 0);
    set(model, 'jul_budget_cents', 0);
    set(model, 'jun_budget_cents', 0);
    set(model, 'nov_budget_cents', 0);
    set(model, 'oct_budget_cents', 0);
    set(model, 'sep_budget_cents', 0);
    assert.equal(get(model, 'tot_diff_str'), '$-5.00');
  });

  test('should have correct tot_diff_str when tot_actual_cents=11560 and tot_budget_cents=33534', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('subcategory-annual-report', {});
    set(model, 'apr_actual_cents', 11560);
    set(model, 'aug_actual_cents', 0);
    set(model, 'dec_actual_cents', 0);
    set(model, 'feb_actual_cents', 0);
    set(model, 'mar_actual_cents', 0);
    set(model, 'may_actual_cents', 0);
    set(model, 'jan_actual_cents', 0);
    set(model, 'jul_actual_cents', 0);
    set(model, 'jun_actual_cents', 0);
    set(model, 'nov_actual_cents', 0);
    set(model, 'oct_actual_cents', 0);
    set(model, 'sep_actual_cents', 0);
    set(model, 'apr_budget_cents', 33534);
    set(model, 'aug_budget_cents', 0);
    set(model, 'dec_budget_cents', 0);
    set(model, 'feb_budget_cents', 0);
    set(model, 'mar_budget_cents', 0);
    set(model, 'may_budget_cents', 0);
    set(model, 'jan_budget_cents', 0);
    set(model, 'jul_budget_cents', 0);
    set(model, 'jun_budget_cents', 0);
    set(model, 'nov_budget_cents', 0);
    set(model, 'oct_budget_cents', 0);
    set(model, 'sep_budget_cents', 0);
    assert.equal(get(model, 'tot_diff_str'), '$219.74');
  });
});
