import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | pagination-table', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{pagination-table}}`);

    assert.equal(this.element.querySelector('.pagination-previous').textContent.trim(), 'Previous');
    assert.equal(this.element.querySelector('.pagination-next').textContent.trim(), 'Next');
  });

  test('should render with no pages', async function(assert) {
    this.set('meta', {
      pages: 0,
    });

    await render(hbs`{{pagination-table meta=meta}}`);

    assert.ok(this.element.querySelector('.pagination-previous').classList.contains('disabled'));
    assert.ok(this.element.querySelector('.pagination-next').classList.contains('disabled'));
  });
});
