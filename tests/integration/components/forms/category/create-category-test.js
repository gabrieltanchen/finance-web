import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | forms/category/create-category', function() {
  setupComponentTest('forms/category/create-category', {
    integration: true,
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#forms/category/create-category}}
    //     template content
    //   {{/forms/category/create-category}}
    // `);

    this.render(hbs`{{forms/category/create-category}}`);
    expect(this.$()).to.have.length(1);
  });
});
