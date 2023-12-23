import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class CategoriesSubcategoriesController extends Controller {
  queryParams = ['page'];

  @alias('model.category') category;
  @alias('model.subcategories') subcategories;
  @tracked page = null;

  tableColumns = [{
    name: 'Name',
    propertyName: 'name',
  }, {
    name: 'Created At',
    propertyName: 'createdAt',
  }, {
    linkText: 'View',
    linkTo: 'subcategories.show',
    name: '',
  }, {
    linkText: 'Edit',
    linkTo: 'subcategories.edit',
    name: '',
  }];

  get paginationButtons() {
    return [{
      linkToQuery: { categoryId: this.category.id },
      linkToRoute: 'subcategories.new',
      linkToText: 'New',
    }];
  }

  @action
  setPage(page) {
    this.page = page;
  }
}
