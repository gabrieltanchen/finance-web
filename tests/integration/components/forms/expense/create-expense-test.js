import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

const ajaxStub = Service.extend({
  request() {
    return Promise.resolve({
      data: [],
    });
  },
});

module('Integration | Component | forms/expense/create-expense', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:ajax', ajaxStub);
  });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{forms/expense/create-expense}}`);

    assert.equal(this.element.querySelector('#create-expense-button').value.trim(), 'Create');
  });
});
