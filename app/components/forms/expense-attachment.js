import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import ENV from 'finance-web/config/environment';

export default class FormsExpenseAttachmentComponent extends Component {
  @service session;
  @tracked errors = [];
  @tracked file;

  @action
  fileSelected(event) {
    this.file = event.target.files[0];
  }

  @action
  async save(e) {
    e.preventDefault();
    try {
      const newAttachment = !this.args.attachment.id;
      await this.args.attachment.save();
      if (newAttachment) {
        await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          const fd = new FormData();
          xhr.open('POST', `${ENV.apiURL}/attachments/${this.args.attachment.id}/upload`);
          xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 204) {
              resolve();
            } else if (xhr.readyState === 4) {
              reject(new Error(xhr.responseText));
            }
          };
          xhr.setRequestHeader('Authorization', `Bearer ${this.session.authToken}`);
          fd.append('file', this.file);
          xhr.send(fd);
        });
      }
      this.args.saveSuccessful();
    } catch (err) {
      let errors = ['An error occurred. Please try again later.'];
      if (err && err.errors) {
        errors = err.errors.map((error) => {
          return error.detail;
        });
      }
      this.errors = errors;
    }
  }
}
