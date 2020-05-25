import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';

export default class VendorsNewController extends Controller {
  @alias('model') vendor;

  @action
  transitionToVendorDetails(vendorId) {
    this.transitionToRoute('vendors.show', vendorId);
  }
}
