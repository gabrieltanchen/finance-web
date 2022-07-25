import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | forms/helpers/attachment', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders an empty attachment form', async function(assert) {
    this.set('attachment', {
      name: '',
    });
    this.set('index', 0);
    this.set('attachmentSelected', function() {});

    await render(hbs`<Forms::Helpers::Attachment @attachment={{this.attachment}} @index={{this.index}} @attachmentSelected={{this.attachmentSelected}} />`);

    assert.dom('div').exists();
    assert.dom('div label').exists({ count: 1 });
    assert.dom('div input').exists({ count: 2 });
    assert.dom('div input:nth-of-type(1)').hasNoValue();
  });

  test('it renders a filled out attachment name', async function(assert) {
    this.set('attachment', {
      name: 'hello world',
    });
    this.set('index', 0);
    this.set('attachmentSelected', function() {});

    await render(hbs`<Forms::Helpers::Attachment @attachment={{this.attachment}} @index={{this.index}} @attachmentSelected={{this.attachmentSelected}} />`);

    assert.dom('div').exists();
    assert.dom('div label').exists({ count: 1 });
    assert.dom('div input').exists({ count: 2 });
    assert.dom('div input:nth-of-type(1)').hasValue('hello world');
  });

  // test('it renders', async function(assert) {
  //   // Set any properties with this.set('myProperty', 'value');
  //   // Handle any actions with this.set('myAction', function(val) { ... });
  //
  //   await render(hbs`<Forms::Helpers::Attachment />`);
  //
  //   assert.dom(this.element).hasText('');
  //
  //   // Template block usage:
  //   await render(hbs`
  //     <Forms::Helpers::Attachment>
  //       template block text
  //     </Forms::Helpers::Attachment>
  //   `);
  //
  //   assert.dom(this.element).hasText('template block text');
  // });
});
