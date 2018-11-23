import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { get, set } from '@ember/object';

module('Unit | Controller | categories/subcategories', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:categories/subcategories');
    assert.ok(controller);
  });

  test('should update create on closeCreateForm action', function(assert) {
    const controller = this.owner.lookup('controller:categories/subcategories');
    set(controller, 'create', true);

    controller.send('closeCreateForm');
    assert.equal(get(controller, 'create'), null);
  });

  test('should update create on showCreateForm action', function(assert) {
    const controller = this.owner.lookup('controller:categories/subcategories');
    set(controller, 'create', null);

    controller.send('showCreateForm');
    assert.equal(get(controller, 'create'), true);
  });
});
