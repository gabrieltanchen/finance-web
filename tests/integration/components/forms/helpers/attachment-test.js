import { module, test } from 'qunit';
import { setupRenderingTest } from 'finance-web/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | forms/helpers/attachment', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Forms::Helpers::Attachment />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Forms::Helpers::Attachment>
        template block text
      </Forms::Helpers::Attachment>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
