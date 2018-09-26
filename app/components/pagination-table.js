import Component from '@ember/component';
import { computed, get } from '@ember/object';

export default Component.extend({
  columns: null,
  limit: null,
  meta: null,
  page: null,
  rows: null,

  currentPage: computed('page', function() {
    let currentPage = parseInt(get(this, 'page'), 10);
    if (isNaN(currentPage)) {
      currentPage = 1;
    }
    return currentPage;
  }),
  numPages: computed('meta.pages', function() {
    let numPages = parseInt(get(this, 'meta.pages'), 10);
    if (isNaN(numPages)) {
      numPages = 1;
    }
    return numPages;
  }),
  // paginationPages: computed('currentPage', 'numPages', function() {
  //   const currentPage = this.get('currentPage');
  //   const numPages = this.get('numPages');
  //   const pages = [];
  //   if (currentPage > 1) {
  //     // []
  //   }
  // }),
});
