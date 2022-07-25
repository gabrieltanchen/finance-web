import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
// import ENV from 'finance-web/config/environment';

export default class FormsHelpersAttachmentComponent extends Component {
  @service session;

  @action
  fileSelected(event) {
    this.args.attachmentSelected(this.args.index, event.target.files[0]);
    // this.args.attachment.file = event.target.files[0];
  }

  // @action
  // async fileAdded(file) {
  //   this.args.attachment.file = file;
  //   // try {
  //   //   await file.upload({
  //   //     headers: {
  //   //       'Authorization': `Bearer ${this.session.authToken}`,
  //   //     },
  //   //     url: `${ENV.apiURL}/attachments/${this.args.attachment.id}/upload`,
  //   //   });
  //   // } catch (err) {
  //   //   file.state = 'aborted';
  //   //   // console.log(err);
  //   // }
  // }
}
