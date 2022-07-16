import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import ENV from 'finance-web/config/environment';

export default class FormsHelpersAttachmentComponent extends Component {
  @service session;

  @action
  async fileAdded(file) {
    try {
      await file.upload({
        headers: {
          'Authorization': `Bearer ${this.session.authToken}`,
        },
        url: `${ENV.apiURL}/attachments/${this.args.attachment.id}/upload`,
      });
    } catch (err) {
      file.state = 'aborted';
      // console.log(err);
    }
  }
}
