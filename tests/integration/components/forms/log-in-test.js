import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | forms/log-in', function() {
  setupComponentTest('forms/log-in', {
    integration: true,
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#forms/log-in}}
    //     template content
    //   {{/forms/log-in}}
    // `);

    this.render(hbs`{{forms/log-in}}`);
    expect(this.$()).to.have.length(1);
  });
});
