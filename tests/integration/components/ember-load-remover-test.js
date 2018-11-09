import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ember-load-remover', function(hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(() => {
    const loadIndicator = document.createElement('div');
    loadIndicator.classList.add('ember-load-indicator');
    document.querySelector('#ember-testing').appendChild(loadIndicator);
  });
  test('Operates the default way', async function(assert) {
    assert.equal(
      document.querySelectorAll('#ember-testing .ember-load-indicator').length,
      1,
      'One loading indicator initially present'
    );
    await render(hbs`{{ember-load-remover}}`);

    assert.equal(this.element.innerText.trim(), '');
    assert.equal(
      this.element.querySelectorAll('#ember-testing .ember-load-indicator')
        .length,
      0,
      'Loading indicator has been removed'
    );
  });

  test('Operates with the removeLoadingIndicator function customized', async function(assert) {
    assert.equal(
      document.querySelectorAll('#ember-testing .ember-load-indicator').length,
      1,
      'One loading indicator initially present'
    );
    let dummyCallCount = 0;
    this.set('dummy', async function() {
      dummyCallCount++;
    });
    await render(hbs`{{ember-load-remover removeLoadingIndicator=dummy}}`);

    assert.equal(
      document.querySelectorAll('#ember-testing .ember-load-indicator').length,
      1,
      'Loading indicator has not been removed'
    );
    assert.equal(
      dummyCallCount,
      1,
      'removeLoadingIndicator has been invoked once'
    );
  });
});
