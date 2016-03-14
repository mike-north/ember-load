import Ember from 'ember';
import { module } from 'qunit';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

export default function(name, options = {}) {
  module(name, {
    beforeEach() {
      Ember.$('#ember-testing').append(
        Ember.$('<div class="ember-load-indicator">Loading.....</div>')
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
