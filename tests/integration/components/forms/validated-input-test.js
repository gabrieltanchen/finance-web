import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | forms/validated-input', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('propertyId', 'test-property-id');
    this.set('propertyName', 'first_name');
    this.set('type', 'text');
    this.set('user', {
      'first_name': 'John',
    });

    await render(hbs`{{forms/validated-input type=type propertyId=propertyId propertyName=propertyName changeset=user}}`);

    assert.equal(this.element.querySelector('#test-property-id').value.trim(), 'John');
  });
});
