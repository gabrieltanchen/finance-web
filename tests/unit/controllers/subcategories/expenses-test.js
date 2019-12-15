import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { get, set } from '@ember/object';

module('Unit | Controller | subcategories/expenses', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:subcategories/expenses');
    assert.ok(controller);
  });

  test('should update create on closeCreateForm action', function(assert) {
    const controller = this.owner.lookup('controller:subcategories/expenses');
    set(controller, 'create', true);

    controller.send('closeCreateForm');
    assert.equal(get(controller, 'create'), null);
  });

  test('should update create on showCreateForm action', function(assert) {
    const controller = this.owner.lookup('controller:subcategories/expenses');
    set(controller, 'create', null);

    controller.send('showCreateForm');
    assert.equal(get(controller, 'create'), true);
  });

  test('should update vendor on vendorSelected action', async function(assert) {
    const controller = this.owner.lookup('controller:subcategories/expenses');
    set(controller, 'vendor', null);
    set(controller, 'model', {
      'newExpense': {
        'vendor': null,
      },
    });
    set(controller, 'store', {
      findRecord(modelName, id) {
        assert.equal(modelName, 'vendor');
        return {
          id,
        };
      },
    });

    await controller.send('vendorSelected', 'b6f0441e-bdee-4172-a646-4d8c9191db57');
    assert.equal(get(controller, 'newExpense.vendor.id'), 'b6f0441e-bdee-4172-a646-4d8c9191db57');
  });
});
