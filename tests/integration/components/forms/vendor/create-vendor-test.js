import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | forms/vendor/create-vendor', function() {
  setupComponentTest('forms/vendor/create-vendor', {
    integration: true,
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#forms/vendor/create-vendor}}
    //     template content
    //   {{/forms/vendor/create-vendor}}
    // `);

    this.render(hbs`{{forms/vendor/create-vendor}}`);
    expect(this.$()).to.have.length(1);
  });
});
