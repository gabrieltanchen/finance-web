import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default class SubcategoriesAnnualReportController extends Controller {
  @alias('model.annualReports') annualReports;
  @alias('model.subcategory') subcategory;
}
