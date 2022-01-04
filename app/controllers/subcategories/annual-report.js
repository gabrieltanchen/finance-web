import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { tracked } from '@glimmer/tracking';
import moment from 'moment';

export default class SubcategoriesAnnualReportController extends Controller {
  @alias('model.annualReport') annualReport;
  @alias('model.subcategory') subcategory;
  @tracked year = moment().year();

  @action
  nextYear() {
    this.year = parseInt(this.year, 10) + 1;
  }

  @action
  previousYear() {
    this.year = parseInt(this.year, 10) - 1;
  }
}
