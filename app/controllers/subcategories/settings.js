import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';

export default class SubcategoriesSettingsController extends Controller {
  @alias('model') subcategory;
  @tracked showDeleteModal;
  @tracked deleteErrors = [];

  @action
  closeDeleteModal() {
    this.showDeleteModal = false;
  }

  @action
  async deleteSubcategory(e) {
    e.preventDefault();
    const categoryId = this.subcategory.category.get('id');
    try {
      await this.subcategory.destroyRecord();
      this.showDeleteModal = false;
      this.transitionToRoute('categories.subcategories', categoryId);
    } catch (err) {
      this.subcategory.rollbackAttributes();
      let errors = ['An error occurred. Please try again later.'];
      if (err && err.errors) {
        errors = err.errors.map((error) => {
          return error.detail;
        });
      }
      this.deleteErrors = errors;
    }
  }

  @action
  openDeleteModal() {
    this.deleteErrors = [];
    this.showDeleteModal = true;
  }
}
