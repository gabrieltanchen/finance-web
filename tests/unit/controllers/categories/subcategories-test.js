import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | categories/subcategories', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    const controller = this.owner.lookup('controller:categories/subcategories');
    assert.ok(controller);
  });

  test('should update create on closeCreateForm action', function(assert) {
    const controller = this.owner.lookup('controller:categories/subcategories');
    controller.set('create', true);

    controller.send('closeCreateForm');
    assert.equal(controller.get('create'), null);
  });

  test('should update create on showCreateForm action', function(assert) {
    const controller = this.owner.lookup('controller:categories/subcategories');
    controller.set('create', null);

    controller.send('showCreateForm');
    assert.equal(controller.get('create'), true);
  });
});
