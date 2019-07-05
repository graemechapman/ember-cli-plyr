import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('plyr-element', 'Integration | Component | plyr element', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{plyr-element}}`);

  assert.equal(this.element.text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#plyr-element}}
      template block text
    {{/plyr-element}}
  `);

  assert.equal(this.element.text().trim(), 'template block text');
});
