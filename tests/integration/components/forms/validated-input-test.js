import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | forms/validated-input', function() {
  setupComponentTest('forms/validated-input', {
    integration: true,
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#forms/validated-input}}
    //     template content
    //   {{/forms/validated-input}}
    // `);

    this.render(hbs`{{forms/validated-input}}`);
    expect(this.$()).to.have.length(1);
  });
});
