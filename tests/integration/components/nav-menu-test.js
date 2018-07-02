import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | nav-menu', function() {
  setupComponentTest('nav-menu', {
    integration: true,
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#nav-menu}}
    //     template content
    //   {{/nav-menu}}
    // `);

    this.render(hbs`{{nav-menu}}`);
    expect(this.$()).to.have.length(1);
  });
});
