import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class PaginatedTableComponent extends Component {
  get currentPage() {
    let currentPage = parseInt(this.args.page, 10);
    if (isNaN(currentPage)) {
      currentPage = 1;
    }
    return currentPage;
  }

  get currentSort() {
    return this.args.sort || this.args.defaultSort;
  }

  get currentSortDirection() {
    return this.args.sortDirection || this.args.defaultSortDirection;
  }

  get currentColumns() {
    if (this.args.columns) {
      return this.args.columns.map((column) => {
        return {
          ...column,
          isSortedAsc: column.sortName === this.currentSort && this.currentSortDirection === 'asc',
          isSortedDesc: column.sortName === this.currentSort && this.currentSortDirection === 'desc',
        };
      });
    }
    return [];
  }

  get disableNext() {
    return this.currentPage >= this.numPages;
  }

  get disablePrevious() {
    return this.currentPage <= 1;
  }

  get numPages() {
    let numPages = parseInt(this.args.numPages, 10);
    if (isNaN(numPages)) {
      numPages = 1;
    }
    return numPages;
  }

  get pageNumbers() {
    const pageNumbers = [{
      current: true,
      page: this.currentPage,
    }];

    if (this.currentPage > 1) {
      for (const i of Array(3).keys()) {
        if (this.currentPage - (i + 1) >= 1) {
          pageNumbers.push({
            current: false,
            page: this.currentPage - (i + 1),
          });
        }
      }
    }

    if (this.currentPage < this.numPages) {
      for (const i of Array(3).keys()) {
        if (this.currentPage + (i + 1) <= this.numPages) {
          pageNumbers.push({
            current: false,
            page: this.currentPage + (i + 1),
          });
        }
      }
    }

    pageNumbers.sort(function(a, b) { return a.page - b.page; });

    return pageNumbers;
  }

  @action
  setPage(page) {
    this.args.setPage(page);
  }

  @action
  setSort(sortName) {
    let sortDirection;
    if (this.currentSort === sortName && this.currentSortDirection === 'asc') {
      sortDirection = 'desc';
    } else {
      sortDirection = 'asc';
    }
    this.args.setSort(sortName, sortDirection);
  }

  @action
  previousPage() {
    let page = this.currentPage;
    page -= 1;
    if (page <= 1) {
      page = 1;
    }
    this.args.setPage(page);
  }

  @action
  nextPage() {
    let page = this.currentPage;
    page += 1;
    if (page >= this.numPages) {
      page = this.numPages;
    }
    this.args.setPage(page);
  }
}
