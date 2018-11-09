import { module, test } from 'qunit';
import { visit, currentURL, findAll } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | index', function(hooks) {
  setupApplicationTest(hooks);
  hooks.beforeEach(() => {
    const loadIndicator = document.createElement('div');
    loadIndicator.classList.add('ember-load-indicator');
    document.querySelector('#ember-testing').appendChild(loadIndicator);
  });

  test('visiting /index', async function(assert) {
    assert.equal(
      findAll('.ember-load-indicator').length,
      1,
      'Load indicator is initially present'
    );
    await visit('/');

    assert.equal(
      findAll('.ember-load-indicator').length,
      0,
      'Load indicator is no longer present'
    );
    assert.equal(currentURL(), '/');
  });
});
