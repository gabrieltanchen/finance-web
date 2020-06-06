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
    linkTo: 'subcategories.show',
    name: 'Name',
    propertyName: 'name',
  }, {
    name: 'Created At',
    propertyName: 'createdAt',
  }];

  @action
  setPage(page) {
    this.page = page;
  }
}
