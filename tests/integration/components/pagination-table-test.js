import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
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
    assert.notOk(this.element.querySelector('.pagination-previous a'));
    assert.ok(this.element.querySelector('.pagination-next').classList.contains('disabled'));
    assert.notOk(this.element.querySelector('.pagination-next a'));
  });

  test('should disable previous when on first page', async function(assert) {
    this.set('meta', {
      pages: 5,
    });
    this.set('page', 1);

    await render(hbs`{{pagination-table meta=meta page=page}}`);

    assert.ok(this.element.querySelector('.pagination-previous').classList.contains('disabled'));
    assert.notOk(this.element.querySelector('.pagination-previous a'));
    assert.notOk(this.element.querySelector('.pagination-next').classList.contains('disabled'));
    assert.ok(this.element.querySelector('.pagination-next a'));
  });

  test('should disable next when on last page', async function(assert) {
    this.set('meta', {
      pages: 5,
    });
    this.set('page', 5);

    await render(hbs`{{pagination-table meta=meta page=page}}`);

    assert.notOk(this.element.querySelector('.pagination-previous').classList.contains('disabled'));
    assert.ok(this.element.querySelector('.pagination-previous a'));
    assert.ok(this.element.querySelector('.pagination-next').classList.contains('disabled'));
    assert.notOk(this.element.querySelector('.pagination-next a'));
  });

  test('should go to previous page', async function(assert) {
    this.set('meta', {
      pages: 5,
    });
    this.set('page', 3);

    await render(hbs`{{pagination-table meta=meta page=page}}`);

    await click('.pagination-previous a');

    assert.equal(this.get('page'), 2);
  });

  test('should go to next page', async function(assert) {
    this.set('meta', {
      pages: 5,
    });
    this.set('page', 3);

    await render(hbs`{{pagination-table meta=meta page=page}}`);

    await click('.pagination-next a');

    assert.equal(this.get('page'), 4);
  });

  test('should jump to page', async function(assert) {
    this.set('meta', {
      pages: 5,
    });
    this.set('page', 3);

    await render(hbs`{{pagination-table meta=meta page=page}}`);

    await click('.page-link a');

    assert.equal(this.get('page'), 1);
  });
});
