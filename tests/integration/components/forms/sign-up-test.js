import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | forms/sign-up', function() {
  setupComponentTest('forms/sign-up', {
    integration: true,
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#forms/sign-up}}
    //     template content
    //   {{/forms/sign-up}}
    // `);

    this.render(hbs`{{forms/sign-up}}`);
    expect(this.$()).to.have.length(1);
  });
});
