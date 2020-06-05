import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';

export default class VendorsEditController extends Controller {
  @alias('model') vendor;

  @action
  transitionToVendorDetails() {
    this.transitionToRoute('vendors.show', this.vendor.id);
  }
}
