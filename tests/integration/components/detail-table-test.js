import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | detail-table', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.setProperties({
      model: {
        prop1: 'Value 1',
        prop2: 'Value 2',
        prop3: 'Value 3',
      },
      properties: [{
        name: 'Property 1',
        propertyName: 'prop1',
      }, {
        name: 'Property 2',
        propertyName: 'prop2',
      }, {
        name: 'Property 3',
        propertyName: 'prop3',
      }],
    });
  });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<DetailTable @model={{this.model}} @properties={{this.properties}} />`);

    assert.dom('table').exists();
    assert.dom('table tbody tr').exists({ count: 3 });
    assert.dom('table tbody tr:nth-of-type(1) td').exists({ count: 2 });
    assert.dom('table tbody tr:nth-of-type(1) td:nth-of-type(1)').containsText('Property 1');
    assert.dom('table tbody tr:nth-of-type(1) td:nth-of-type(2)').containsText('Value 1');
    assert.dom('table tbody tr:nth-of-type(2) td').exists({ count: 2 });
    assert.dom('table tbody tr:nth-of-type(2) td:nth-of-type(1)').containsText('Property 2');
    assert.dom('table tbody tr:nth-of-type(2) td:nth-of-type(2)').containsText('Value 2');
    assert.dom('table tbody tr:nth-of-type(3) td').exists({ count: 2 });
    assert.dom('table tbody tr:nth-of-type(3) td:nth-of-type(1)').containsText('Property 3');
    assert.dom('table tbody tr:nth-of-type(3) td:nth-of-type(2)').containsText('Value 3');
  });
});
