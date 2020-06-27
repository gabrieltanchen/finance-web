import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | paginated-table', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a single column table with pagination navigation', async function(assert) {
    this.set('columns', [{
      name: 'Name',
      propertyName: 'name',
    }]);
    this.set('rows', [{
      name: 'Row 1',
    }, {
      name: 'Row 2',
    }, {
      name: 'Row 3',
    }]);

    await render(hbs`<PaginatedTable @columns={{this.columns}} @rows={{this.rows}} />`);

    assert.dom('nav').exists();
    assert.dom('nav').hasClass('pagination');
    assert.dom('nav').hasAttribute('aria-label', 'Pagination Navigation');
    assert.dom('nav ul').exists();
    assert.dom('nav ul li.pagination-previous').exists();
    assert.dom('nav ul li.pagination-next').exists();

    assert.dom('table').exists();
    assert.dom('table thead tr').exists({ count: 1 });
    assert.dom('table thead tr th').exists({ count: 1 });
    assert.dom('table thead tr th').containsText('Name');

    assert.dom('table tbody tr').exists({ count: 3 });
    assert.dom('table tbody tr:nth-of-type(1) td').exists({ count: 1 });
    assert.dom('table tbody tr:nth-of-type(1) td').containsText('Row 1');
    assert.dom('table tbody tr:nth-of-type(2) td').exists({ count: 1 });
    assert.dom('table tbody tr:nth-of-type(2) td').containsText('Row 2');
    assert.dom('table tbody tr:nth-of-type(3) td').exists({ count: 1 });
    assert.dom('table tbody tr:nth-of-type(3) td').containsText('Row 3');
  });

  test('it renders a two-column table', async function(assert) {
    this.set('columns', [{
      name: 'Column 1',
      propertyName: 'col1',
    }, {
      name: 'Column 2',
      propertyName: 'col2',
    }]);
    this.set('rows', [{
      col1: 'Row 1 Column 1',
      col2: 'Row 1 Column 2',
    }, {
      col1: 'Row 2 Column 1',
      col2: 'Row 2 Column 2',
    }, {
      col1: 'Row 3 Column 1',
      col2: 'Row 3 Column 2',
    }]);

    await render(hbs`<PaginatedTable @columns={{this.columns}} @rows={{this.rows}} />`);

    assert.dom('table').exists();
    assert.dom('table thead tr').exists({ count: 1 });
    assert.dom('table thead tr th').exists({ count: 2 });
    assert.dom('table thead tr th:nth-of-type(1)').containsText('Column 1');
    assert.dom('table thead tr th:nth-of-type(2)').containsText('Column 2');

    assert.dom('table tbody tr').exists({ count: 3 });
    assert.dom('table tbody tr:nth-of-type(1) td').exists({ count: 2 });
    assert.dom('table tbody tr:nth-of-type(1) td:nth-of-type(1)').containsText('Row 1 Column 1');
    assert.dom('table tbody tr:nth-of-type(1) td:nth-of-type(2)').containsText('Row 1 Column 2');
    assert.dom('table tbody tr:nth-of-type(2) td').exists({ count: 2 });
    assert.dom('table tbody tr:nth-of-type(2) td:nth-of-type(1)').containsText('Row 2 Column 1');
    assert.dom('table tbody tr:nth-of-type(2) td:nth-of-type(2)').containsText('Row 2 Column 2');
    assert.dom('table tbody tr:nth-of-type(3) td').exists({ count: 2 });
    assert.dom('table tbody tr:nth-of-type(3) td:nth-of-type(1)').containsText('Row 3 Column 1');
    assert.dom('table tbody tr:nth-of-type(3) td:nth-of-type(2)').containsText('Row 3 Column 2');
  });

  test('it should render the previous page button', async function(assert) {
    this.set('page', 1);

    await render(hbs`<PaginatedTable @page={{this.page}} />`);

    assert.dom('nav ul li.pagination-previous').exists();
    assert.dom('nav ul li.pagination-previous span').exists();
    assert.dom('nav ul li.pagination-previous button').doesNotExist();
    assert.dom('nav ul li.pagination-previous span').containsText('Previous');

    this.set('page', 2);

    assert.dom('nav ul li.pagination-previous span').doesNotExist();
    assert.dom('nav ul li.pagination-previous button').exists();
    assert.dom('nav ul li.pagination-previous button').containsText('Previous');
    assert.dom('nav ul li.pagination-previous button').hasAttribute('aria-label', 'Go to previous page');
  });

  test('it should render the next page button', async function(assert) {
    this.set('page', 1);
    this.set('numPages', 1);

    await render(hbs`<PaginatedTable @page={{this.page}} @numPages={{this.numPages}} />`);

    assert.dom('nav ul li.pagination-next').exists();
    assert.dom('nav ul li.pagination-next span').exists();
    assert.dom('nav ul li.pagination-next button').doesNotExist();
    assert.dom('nav ul li.pagination-next span').containsText('Next');

    this.set('numPages', 2);

    assert.dom('nav ul li.pagination-next span').doesNotExist();
    assert.dom('nav ul li.pagination-next button').exists();
    assert.dom('nav ul li.pagination-next button').containsText('Next');
    assert.dom('nav ul li.pagination-next button').hasAttribute('aria-label', 'Go to next page');

    this.set('page', 2);

    assert.dom('nav ul li.pagination-next span').exists();
    assert.dom('nav ul li.pagination-next button').doesNotExist();
  });

  test('it should render pagination page buttons', async function(assert) {
    this.set('page', 1);
    this.set('numPages', 1);

    await render(hbs`<PaginatedTable @page={{this.page}} @numPages={{this.numPages}} />`);

    assert.dom('nav ul li.pagination-page').exists({ count: 1 });
    assert.dom('nav ul li.pagination-page span').exists();
    assert.dom('nav ul li.pagination-page button').doesNotExist();
    assert.dom('nav ul li.pagination-page span').containsText('1');

    this.set('numPages', 3);

    assert.dom('nav ul li.pagination-page').exists({ count: 3 });
    assert.dom('nav ul li.pagination-page:nth-of-type(2) span').exists();
    assert.dom('nav ul li.pagination-page:nth-of-type(2) button').doesNotExist();
    assert.dom('nav ul li.pagination-page:nth-of-type(2) span').containsText('1');
    assert.dom('nav ul li.pagination-page:nth-of-type(3) span').doesNotExist();
    assert.dom('nav ul li.pagination-page:nth-of-type(3) button').exists();
    assert.dom('nav ul li.pagination-page:nth-of-type(3) button').containsText('2');
    assert.dom('nav ul li.pagination-page:nth-of-type(3) button').hasAttribute('aria-label', 'Go to page 2');
    assert.dom('nav ul li.pagination-page:nth-of-type(4) span').doesNotExist();
    assert.dom('nav ul li.pagination-page:nth-of-type(4) button').exists();
    assert.dom('nav ul li.pagination-page:nth-of-type(4) button').containsText('3');
    assert.dom('nav ul li.pagination-page:nth-of-type(4) button').hasAttribute('aria-label', 'Go to page 3');

    this.set('page', 2);

    assert.dom('nav ul li.pagination-page').exists({ count: 3 });
    assert.dom('nav ul li.pagination-page:nth-of-type(2) span').doesNotExist();
    assert.dom('nav ul li.pagination-page:nth-of-type(2) button').exists();
    assert.dom('nav ul li.pagination-page:nth-of-type(2) button').containsText('1');
    assert.dom('nav ul li.pagination-page:nth-of-type(2) button').hasAttribute('aria-label', 'Go to page 1');
    assert.dom('nav ul li.pagination-page:nth-of-type(3) span').exists();
    assert.dom('nav ul li.pagination-page:nth-of-type(3) button').doesNotExist();
    assert.dom('nav ul li.pagination-page:nth-of-type(3) span').containsText('2');
    assert.dom('nav ul li.pagination-page:nth-of-type(4) span').doesNotExist();
    assert.dom('nav ul li.pagination-page:nth-of-type(4) button').exists();
    assert.dom('nav ul li.pagination-page:nth-of-type(4) button').containsText('3');
    assert.dom('nav ul li.pagination-page:nth-of-type(4) button').hasAttribute('aria-label', 'Go to page 3');

    this.set('page', 5);
    this.set('numPages', 10);

    assert.dom('nav ul li.pagination-page').exists({ count: 7 });
    assert.dom('nav ul li.pagination-page:nth-of-type(2) span').doesNotExist();
    assert.dom('nav ul li.pagination-page:nth-of-type(2) button').exists();
    assert.dom('nav ul li.pagination-page:nth-of-type(2) button').containsText('2');
    assert.dom('nav ul li.pagination-page:nth-of-type(2) button').hasAttribute('aria-label', 'Go to page 2');
    assert.dom('nav ul li.pagination-page:nth-of-type(3) span').doesNotExist();
    assert.dom('nav ul li.pagination-page:nth-of-type(3) button').exists();
    assert.dom('nav ul li.pagination-page:nth-of-type(3) button').containsText('3');
    assert.dom('nav ul li.pagination-page:nth-of-type(3) button').hasAttribute('aria-label', 'Go to page 3');
    assert.dom('nav ul li.pagination-page:nth-of-type(4) span').doesNotExist();
    assert.dom('nav ul li.pagination-page:nth-of-type(4) button').exists();
    assert.dom('nav ul li.pagination-page:nth-of-type(4) button').containsText('4');
    assert.dom('nav ul li.pagination-page:nth-of-type(4) button').hasAttribute('aria-label', 'Go to page 4');
    assert.dom('nav ul li.pagination-page:nth-of-type(5) span').exists();
    assert.dom('nav ul li.pagination-page:nth-of-type(5) button').doesNotExist();
    assert.dom('nav ul li.pagination-page:nth-of-type(5) span').containsText('5');
    assert.dom('nav ul li.pagination-page:nth-of-type(6) span').doesNotExist();
    assert.dom('nav ul li.pagination-page:nth-of-type(6) button').exists();
    assert.dom('nav ul li.pagination-page:nth-of-type(6) button').containsText('6');
    assert.dom('nav ul li.pagination-page:nth-of-type(6) button').hasAttribute('aria-label', 'Go to page 6');
    assert.dom('nav ul li.pagination-page:nth-of-type(7) span').doesNotExist();
    assert.dom('nav ul li.pagination-page:nth-of-type(7) button').exists();
    assert.dom('nav ul li.pagination-page:nth-of-type(7) button').containsText('7');
    assert.dom('nav ul li.pagination-page:nth-of-type(7) button').hasAttribute('aria-label', 'Go to page 7');
    assert.dom('nav ul li.pagination-page:nth-of-type(8) span').doesNotExist();
    assert.dom('nav ul li.pagination-page:nth-of-type(8) button').exists();
    assert.dom('nav ul li.pagination-page:nth-of-type(8) button').containsText('8');
    assert.dom('nav ul li.pagination-page:nth-of-type(8) button').hasAttribute('aria-label', 'Go to page 8');
  });
});
