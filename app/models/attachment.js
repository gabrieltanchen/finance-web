import Model, { attr, belongsTo } from '@ember-data/model';

export default class AttachmentModel extends Model {
  @attr('string') downloadUrl;
  @attr('string') name;

  @belongsTo('expense') expense;
}
