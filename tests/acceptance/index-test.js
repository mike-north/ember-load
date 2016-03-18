import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /', function(assert) {
  assert.expect(3);
  let done = assert.async();
  assert.equal(find('.ember-load-indicator').length, 1, 'Load indicator is initially present');
  setTimeout(() => {
    visit('/');

    andThen(function() {
      assert.equal(find('.ember-load-indicator').length, 0, 'Load indicator is no longer present');
      assert.equal(currentURL(), '/');
      done();
    });
  }, 1600);
});
