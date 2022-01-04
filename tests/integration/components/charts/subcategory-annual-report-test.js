import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | charts/subcategory-annual-report', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('annualReport', {
      aprActual: 0,
      aprBudget: 0,
      augActual: 0,
      augBudget: 0,
      decActual: 0,
      decBudget: 0,
      febActual: 0,
      febBudget: 0,
      hasNextYear: false,
      hasPrevYear: false,
      janActual: 0,
      janBudget: 0,
      julActual: 0,
      julBudget: 0,
      junActual: 0,
      junBudget: 0,
      marActual: 0,
      marBudget: 0,
      mayActual: 0,
      mayBudget: 0,
      novActual: 0,
      novBudget: 0,
      octActual: 0,
      octBudget: 0,
      sepActual: 0,
      sepBudget: 0,
      year: 2021,
    });

    await render(hbs`<Charts::SubcategoryAnnualReport @annualReport={{this.annualReport}} />`);

    assert.dom('canvas').exists();
  });
});
