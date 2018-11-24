import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | forms/validated-datepicker', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('propertyId', 'test-property-id');
    this.set('propertyName', 'date');
    this.set('expense', {
      'date': '2018-01-01',
    });

    await render(hbs`{{forms/validated-input propertyId=propertyId propertyName=propertyName changeset=expense}}`);

    assert.equal(this.element.querySelector('#test-property-id').value.trim(), '2018-01-01');
  });
});
