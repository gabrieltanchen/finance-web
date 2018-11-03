import Component from '@ember/component';
import { get, set } from '@ember/object';

export default Component.extend({
  actions: {
    dateSelected(date) {
      const changeset = get(this, 'changeset');
      set(changeset, get(this, 'propertyName'), date);
    },
  },
});
