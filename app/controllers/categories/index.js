import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';
import { computed, get, set } from '@ember/object';
import CategoryValidations from '../../validations/category';

export default Controller.extend({
  categories: alias('model.categories'),
  CategoryValidations,
  meta: null,
  newCategory: alias('model.newCategory'),
  queryParams: ['create', 'limit', 'page'],

  tableColumns: [{
    name: 'Name',
    propertyName: 'name',
  }, {
    name: 'Created At',
    propertyName: 'created_at',
  }],

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
    nextPage() {
      let page = get(this, 'currentPage');
      const numPages = get(this, 'numPages');
      page += 1;
      if (page >= numPages) {
        page = numPages;
      }
      set(this, 'page', page);
    },
    previousPage() {
      let page = get(this, 'currentPage');
      page -= 1;
      if (page <= 1) {
        page = 1;
      }
      set(this, 'page', page);
    },
    setPage(page) {
      set(this, 'page', page);
    },
    showCreateForm() {
      set(this, 'create', true);
    },
  },
});
