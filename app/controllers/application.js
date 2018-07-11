import Controller from '@ember/controller';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),

  actions: {
    logout() {
      get(this, 'session').logout();
      this.transitionToRoute('index');
    },
  },
});
