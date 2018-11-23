import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';
import { computed, get, set } from '@ember/object';

export default Controller.extend({
  queryParams: ['create', 'limit', 'page'],
  meta: null,
  tableColumns: [{
    isLink: true,
    linkParam: 'id',
    linkTo: 'categories.show',
    name: 'Name',
    propertyName: 'name',
  }, {
    name: 'Created At',
    propertyName: 'created_at',
  }],
  category: alias('model.category'),
  newCategory: alias('model.newCategory'),
  subcategories: alias('model.subcategories'),

  currentPage: computed('page', function() {
    let currentPage = 1;
    if (get(this, 'page') && !isNaN(parseInt(get(this, 'page'), 10))) {
      currentPage = parseInt(get(this, 'page'), 10);
    }
    return currentPage;
  }),

  disableNext: computed('currentPage', 'numPages', function() {
    const currentPage = get(this, 'currentPage');
    const numPages = get(this, 'numPages');
    return currentPage >= numPages;
  }),

  disablePrevious: computed('currentPage', function() {
    const currentPage = get(this, 'currentPage');
    return currentPage <= 1;
  }),

  numPages: computed('meta.pages', function() {
    let numPages = parseInt(get(this, 'meta.pages'), 10);
    if (!numPages) {
      numPages = 1;
    }
    return numPages;
  }),

  paginationPages: computed('currentPage', 'numPages', function() {
    const currentPage = get(this, 'currentPage');
    const numPages = get(this, 'numPages');
    const pageNumbers = [currentPage];
    if (currentPage > 1) {
      for (const i of Array(3).keys()) {
        if (currentPage - (i + 1) >= 1) {
          pageNumbers.push(currentPage - (i + 1));
        }
      }
    }
    if (currentPage < numPages) {
      for (const i of Array(3).keys()) {
        if (currentPage + (i + 1) <= numPages) {
          pageNumbers.push(currentPage + (i + 1));
        }
      }
    }

    pageNumbers.sort(function(a, b) { return a - b; });

    return pageNumbers.map((page) => {
      return {
        current: (page === currentPage),
        page,
      };
    });
  }),

  actions: {
    closeCreateForm() {
      set(this, 'create', null);
    },
    showCreateForm() {
      set(this, 'create', true);
    },
  },
});
