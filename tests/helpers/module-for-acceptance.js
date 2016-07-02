import Ember from 'ember';
import { module } from 'qunit';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

// jscs:disable disallowDirectPropertyAccess
const jq = Ember.$;
// jscs:enable disallowDirectPropertyAccess

export default function(name, options = {}) {
  module(name, {
    beforeEach() {
      jq('#ember-testing').append(
        jq('<div class="ember-load-indicator">Loading.....</div>')
      );
      this.application = startApp();
      if (options.beforeEach) {
        options.beforeEach(...arguments);
      }
    },

    afterEach() {
      if (options.afterEach) {
        options.afterEach(...arguments);
      }
      destroyApp(this.application);
    }
  });
}
