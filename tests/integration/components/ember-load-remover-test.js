import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

// jshint -W079
const { $ } = Ember;
// jshint +W079
moduleForComponent('ember-load-remover', 'Integration | Component | ember load remover', {
  integration: true,
  beforeEach() {
    $('#ember-testing').append($('<div class="ember-load-indicator">Loading...</div>'));
  }
});

test('Operates the default way', function(assert) {
  assert.equal($('#ember-testing .ember-load-indicator').length, 1, 'One loading indicator initially present');
  this.render(hbs`{{ember-load-remover}}`);

  assert.equal(this.$().text().trim(), '');
  assert.equal($('#ember-testing .ember-load-indicator').length, 0, 'Loading indicator has been removed');
});

test('Operates with the removeLoadingIndicator function customized', function(assert) {
  assert.equal($('#ember-testing .ember-load-indicator').length, 1, 'One loading indicator initially present');
  let dummyCallCount = 0;
  this.set('dummy', function() {
    dummyCallCount++;
  });
  this.render(hbs`{{ember-load-remover removeLoadingIndicator=dummy}}`);

  assert.equal($('#ember-testing .ember-load-indicator').length, 1, 'Loading indicator has not been removed');
  assert.equal(dummyCallCount, 1, 'removeLoadingIndicator has been invoked once');
});
