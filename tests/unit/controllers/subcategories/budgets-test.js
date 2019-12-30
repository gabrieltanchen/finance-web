import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { get, set } from '@ember/object';

module('Unit | Controller | subcategories/budgets', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:subcategories/budgets');
    assert.ok(controller);
  });

  test('should update create on closeCreateForm action', function(assert) {
    const controller = this.owner.lookup('controller:subcategories/budgets');
    set(controller, 'create', true);

    controller.send('closeCreateForm');
    assert.equal(get(controller, 'create'), null);
  });

  test('should update create on showCreateForm action', function(assert) {
    const controller = this.owner.lookup('controller:subcategories/budgets');
    set(controller, 'create', null);

    controller.send('showCreateForm');
    assert.equal(get(controller, 'create'), true);
  });
});
