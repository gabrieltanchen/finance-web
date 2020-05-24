import Model, { attr } from '@ember-data/model';

export default class VendorModel extends Model {
  @attr('date') createdAt;
  @attr('string') name;
}
