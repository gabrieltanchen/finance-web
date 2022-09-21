import Controller from '@ember/controller';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class VendorsEditController extends Controller {
  @service router;
  @alias('model') vendor;

  @action
  transitionToVendorDetails() {
    this.router.transitionTo('vendors.show', this.vendor.id);
  }
}
