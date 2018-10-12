import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | forms/expense/create-expense', function() {
  setupComponentTest('forms/expense/create-expense', {
    integration: true,
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#forms/expense/create-expense}}
    //     template content
    //   {{/forms/expense/create-expense}}
    // `);

    this.render(hbs`{{forms/expense/create-expense}}`);
    expect(this.$()).to.have.length(1);
  });
});
