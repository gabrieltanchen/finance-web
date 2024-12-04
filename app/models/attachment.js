import Model, { attr, belongsTo } from '@ember-data/model';

export default class AttachmentModel extends Model {
  @attr('date') createdAt;
  @attr('string') downloadUrl;
  @attr('string') name;

  @belongsTo(
    'expense',
    { async: true, inverse: 'attachments' },
  ) expense;
}
